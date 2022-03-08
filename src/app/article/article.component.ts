import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as three from 'three'
import { Camera } from 'three';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas')
  private canvasRef!: ElementRef

  @Input() public rs: number = 0.05;
  @Input() public ry: number = 0.01;
  @Input() public size: number = 200;
  @Input() public texture: string = "../../assets/texture.jpg";


  @Input() public cz: number = 400
  @Input() public fov: number = 1
  @Input('nearClipping') public ncp: number = 1
  @Input('farClipping') public fcp: number = 1000

  private camera!: three.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement{
    return this.canvasRef.nativeElement
  }
  private loader = new three.TextureLoader()
  private geometry = new three.BoxGeometry(1,1,1)
  private material = new three.MeshBasicMaterial({map: this.loader.load(this.texture)})

  private cube: three.Mesh = new three.Mesh(this.geometry, this.material)
  private renderer!: three.WebGLRenderer

  private scene!: three.Scene

  private createScene(){
    this.scene = new three.Scene()
    this.scene.background = new three.Color(0x000000)
    this.scene.add(this.cube)

    let aspectRatio = this.getAspectRatio()
    this.camera = new three.PerspectiveCamera(
      this.fov,
      aspectRatio,
      this.ncp,
      this.fcp
    )
    this.camera.position.z = this.cz
  }

  private getAspectRatio(){
    return this.canvas.clientWidth / this.canvas.clientHeight
  }

  private animateCube(){
    this.cube.rotation.x += this.rs
    this.cube.rotation.y += this.ry
  }

  constructor() { }


  private startRender(){
    this.renderer = new three.WebGLRenderer({canvas : this.canvas})
    this.renderer.setPixelRatio(devicePixelRatio)
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight)
    let co: any = this;
    (function render(){
      requestAnimationFrame(render)
      co.animateCube()
      co.renderer.render(co.scene, co.camera)
    })()

  }

  ngAfterViewInit(): void {
    this.createScene()
    //this.startRender()
  }

  ngOnInit(): void {
  }


}
