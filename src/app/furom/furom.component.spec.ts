import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuromComponent } from './furom.component';

describe('FuromComponent', () => {
  let component: FuromComponent;
  let fixture: ComponentFixture<FuromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
