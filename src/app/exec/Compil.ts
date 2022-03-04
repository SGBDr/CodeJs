import { Puzzle } from "../interface/puzzle.interface"
import { Test } from "../interface/test.interface";

export class Compiler{

    testAdd(test:Test, textE:string, textV:string, toasts:any[]) : string{
      var error : string = '';
      let t = test
      let output = ">Expected : "

      try{
        let got = this.getInstance(textE)
        let verif = this.getInstance(textV)
  
        let start = new Date()
        let rps = got.test(eval(t.input+''))
        let end = new Date()
        let time = end.getTime() - start.getTime()
  
        output += t.output + "\n"
        output += "Got : " + rps + "\n \n"
        output += "Time left ~ " + time
        error = output
  
        let good = verif.test(eval(t.output+''), rps)
        if(!good)error += '\n Try again'
        if(good)error += '\n Good job'
      }catch(e){
        error = e + ''
      }
      return error
    }
    
    test(id:number, test_i:any[], puzz:Puzzle, editor:any, toasts:any[]):string{
        var error : string
        test_i[id] = 1
        let t = puzz.test[id]
        let output = "Expected : "

        try{
          let got = this.getInstance(editor.aceEditor.getValue())
          let verif = this.getInstance(puzz.code_very.toString())
    
          let start = new Date()
          let rps = got.test(eval(t.input+''))
          let end = new Date()
          let time = end.getTime() - start.getTime()
    
          output += t.output + "\n"
          output += "Got : " + rps + "\n \n"
          output += "Time left ~ " + time
          error = output
          
          console.log('okkghjhkj')
          let good = verif.test(eval(t.output+''), rps)
          console.log('okkghjhkj')
    
          if(good)test_i[id] = 2
          else test_i[id] = 3
          toasts.push([t.name, true, good])
        }catch(e){
          error = e + ''
          test_i[id] = 3
        }
        return error
    }

    getInstance(plaintext :string){
        return new (eval('(' + plaintext + ')'))
    }


    verify(text :string){
      var error : string | unknown = ""
      try{
        eval(text)
        error = 'The code is OK.'
      }catch(e){
        error = e
      }
      return error
    }
}