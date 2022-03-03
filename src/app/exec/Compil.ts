import { Puzzle } from "../interface/puzzle.interface"

export class Compiler{
    
    test(id:number, test_i:any[], puzz:Puzzle, editor:any, toasts:any[]){
        var error;
        test_i[id] = 1
        let t = puzz.test[id]
        let output = "Expected : "

        try{

          let got = this.getInstance(editor.content)
          let verif = this.getInstance(puzz.code_very.toString())
    
          let start = new Date()
          let rps = got.test(t.input)
          let end = new Date()
          let time = end.getTime() - start.getTime()
    
          output += t.output + "\n"
          output += "Got : " + rps + "\n \n"
          output += "Time left ~ " + time
          error = output
    
          let good = verif.test(t.output, rps)
    
          if(good)test_i[id] = 2
          else test_i[id] = 3
          toasts.push([t.name, true, good])
        }catch(e){
          error = e
          test_i[id] = 3
        }
        return error
    }

    getInstance(plaintext :string){
        return new (eval('(' + plaintext + ')'))
    }
}