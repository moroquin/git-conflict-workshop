import { OperationType } from "./OperationType";

export interface HistoryData{
    operationType: OperationType, 
    error: boolean, 
    resultMessage: string
}