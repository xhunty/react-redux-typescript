import {AppState,Tip} from '../models'
import { AppAction } from '../actions';


const initialState:AppState ={
    status:"OnLoad",
    tips:[]
}

export function AppReducer(state:AppState = initialState,action:AppAction){
    console.log('---dispatch-->',action.type)

    switch(action.type){
        case "FETCH":{
            return state
        }
        case "SUCCESS":{
            return {
                ...state,
                tips:action.tips
            }
        }
        case "ERROR":{
            return state
        }
        default:{
            return state
        }
    }
}