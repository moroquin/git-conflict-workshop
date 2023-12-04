import { OperationType } from "./OperationType";

export interface HistoryOperation{
    operationType: OperationType, 
    error: boolean, 
    resultMessage: string
}