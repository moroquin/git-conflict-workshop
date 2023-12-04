import { OperationData } from "./OperationData";

export interface ResultData extends OperationData{
    result: number, 
    resultMessage: string
}