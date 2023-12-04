import { OperationType } from "./OperationType";

export interface OperationData{
    number1: number, 
    number2: number, 
    operationType: OperationType,
    hasError: boolean
}