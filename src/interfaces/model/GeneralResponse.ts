import { HistoryOperation } from "./HistoryOperation";

export interface GeneralResponse{
    httpStatus: number, 
    error: boolean, 
    message: string
}

export interface GenaralResponseAllOperations extends GeneralResponse{
    data: HistoryOperation[]
}