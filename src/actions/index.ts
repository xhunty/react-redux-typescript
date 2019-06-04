import { Tip } from "../models";
import { Action, Dispatch, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export interface FetchAction extends Action{
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

export function _GetData(){
    return async (dispatch:Dispatch) => {
        dispatch(FetchActionCreator());
        try{
            const data = await fetchData();
            dispatch(SuccessActionCreator(data));
        }
        catch (ex){
            dispatch(ErrorActionCreator(ex))
        }
    };
}

export const GetData = ():ThunkAction<Promise<void>,{},{},AnyAction> => {
    return async (dispatch: ThunkDispatch<{},{},AnyAction>): Promise<void> =>{
        dispatch(FetchActionCreator())
        try{
            const data = await fetchData()
            dispatch(SuccessActionCreator(data))
        }
        catch(ex){
            dispatch(ErrorActionCreator(ex))
        }

    }
}

function fetchData(): Promise<Tip[]>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random() > 0.5)
                resolve([{id:1,title:'Title 1',isActive:true},{id:2,title:'Title 2',isActive:false}]);
            else
                reject("Error fetch data");
        },1000);
    });
}
