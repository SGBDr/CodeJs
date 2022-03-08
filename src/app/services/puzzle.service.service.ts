import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Puzzle } from '../interface/puzzle.interface';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService{

  

  puzzles : Puzzle[] = [
    {
      id : 0,
      name : "Max Min",
      preview : 'the purpose of this first mission is to recover the gold in the safe, to do this you',
      desc : ('the purpose of this first mission is to recover the gold in the safe, to do this you need the key,' +
      'unfortunately for us *Kerk* has encoded the key :( .' +
      'It is the average of the min and the max of the sequence of numbers that make up the string given in input.'),
      test : [
        {
          id : 0,
          name : 'Simple',
          input : "'1 2 3 4 5 6 7 8 9'",
          output : '5'
        },
        {
          id : 1,
          name : 'Oupss 2',
          input : "''",
          output : "'Oupss'"
        },
        {
          id : 2,
          name : "Time Out",
          input : "'0 1 2 3 5 4 7 85 96 332 14 788 2 326 78 66 878 41 65 7 85 47 88 5 2 3 455 232 47 8 32 6 8 7 65 74 2 5 8 7 9 6 3 2 4 7 5 8 1 0 2 3 6 8 7 2 -1'",
          output : "438.5"
        }
      ],
      code_min : 'class MinMax {\n\n'+
                 '    getKey(input) {\n' +
                 '        //write your code there and return the key as it\'s explain in the infos popup\n' + 
                 '        return 2\n' +
                 '    }\n\n'+
                 '    test(input) {\n' +
                 '        //please don\'t update this function\n' + 
                 '        return this.getKey(input);\n'+
                 '    }\n\n'+
                 '}\n\n',
      code_very : 'class Test {'+
                  'test(exp, got) {'+
                  'console.log(exp, got);'+
                  'console.log(exp === got);'+
                  'if(exp === "Oupss" && got === exp)return true;'+
                  'if(exp === "Oupss" && got != exp)return false;'+
                  'if(parseFloat(exp) === parseFloat(got))return true;'+
                  'else return false;'+
                  '}'+
                  '}',
      code_solve : '',
      lan : 'JS',
      diff : 'easy',
      kind : "Algorithmic",
      note : "If input is empty you have to print out *Oupss*",
      contrains : [
        "0 < length(input) < 400",
        "Max time of execution 2s"
      ],
      tips : [
        'When you tidy up you move on'
      ]
    }
  ]

  coffP = {
    minP :'\nclass CodeJs {\n'+
          '//You can write anaother function as tools for the coder\n\n'+
          '\tstart(input) {\n'+
          '\t\t//write your minumun code there\n\n'+
          '\t\treturn 0;\n'+
          '\t}\n\n'+
          '\ttest(input) {\n'+
          '\t\t//please only update the name of the fcuntion which is return\n\n'+
          '\t\treturn this.start(input);\n'+
          '\t}\n\n'+
          '}',
    minV :'\nclass CodeJs {\n'+
          '//You can write anaother function as tools for the coder\n\n'+
          '\ttest(exp, got) {\n'+
          '\t\t//write how you want to make comparaison between your output<<exp>>\n\n'+
          '\t\t//and the output of the coder<<got>>\n'+
          '\t\t// true for good answers\n'+
          '\t\t// false for bad answers\n'+
          '\t\treturn false\n'+
          '\t}\n\n'+
          '}'
  }

  puzzSubject = new Subject<Puzzle[]>()

  constructor() {
    this.emit()
  }

  addP(p : Puzzle){
    this.puzzles.push(p)
    this.emit()
    console.log(this.puzzles)
  }

  emit(){
    this.puzzSubject.next(this.puzzles)
  }
}
