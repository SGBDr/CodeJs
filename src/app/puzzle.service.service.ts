import { Injectable } from '@angular/core';
import { Puzzle } from './interface/puzzle.interface';

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
          input : "1 2 3 4 5 6 7 8 9",
          output : '5'
        },
        {
          id : 1,
          name : 'Oupss 2',
          input : "",
          output : "Oupss"
        },
        {
          id : 2,
          name : "Time Out",
          input : '0 1 2 3 5 4 7 85 96 332 14 788 2 326 78 66 878 41 65 7 85 47 88 5 2 3 455 232 47 8 32 6 8 7 65 74 2 5 8 7 9 6 3 2 4 7 5 8 1 0 2 3 6 8 7 2 -1',
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
                 '        return this.getKey();\n'+
                 '    }\n\n'+
                 '}\n\n',
      code_very : 'class Test {'+
                  'test(exp, got) {'+
                  'if(parseInt(exp) === got)return true;'+
                  'else return false;'+
                  '}'+
                  '}',
      lan : 'JS',
      diff : 'Easy',
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

  constructor() {}
}
