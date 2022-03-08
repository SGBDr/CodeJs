import { Test } from "./test.interface";

export interface Puzzle{
    id : number
    name : string
    preview : String
    desc : string
    test : Test[]
    code_min : String
    code_very : String
    code_solve : String
    lan : String
    diff : String
    kind : String
    note : String
    contrains : String[]
    tips : String[]
    display : boolean
} 