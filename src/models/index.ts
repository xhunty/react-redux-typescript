export interface Tip{
    id:number,
    title:string,
    isActive:boolean
}
export interface AppState{
    status:"OnLoad"|"Successful"|"Error",
    tips:Tip[]
}
