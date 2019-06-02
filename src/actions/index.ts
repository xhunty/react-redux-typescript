import { Tip } from "../models";

export interface FetchAction{
    type: "FETCH"
}
export interface SuccessAction{
    type:"SUCCESS",
    tips:Tip[]
}
export interface ErrorAction{
    type:"ERROR",
    error:Error
}
export type AppAction = FetchAction | SuccessAction | ErrorAction

export function FetchActionCreator():FetchAction{
    return{
        type:"FETCH"
    }
}
export function SuccessActionCreator(tips:Tip[]):SuccessAction{
    return{
        type:"SUCCESS",
        tips:tips
    }
}
export function ErrorActionCreator(error:Error):ErrorAction{
    return{
        type:"ERROR",
        error:error
    }
}
