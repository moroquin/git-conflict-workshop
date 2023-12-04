import { OperationData } from "../model/OperationData";
import { Payload } from "../model/Payload";
import { ResultData } from "../model/ResultData";

export interface OperationController{
    ():void;
    getOperationData(payload: Payload): OperationData;
    executeOperation(operationData: OperationData): ResultData;
    addOperationToHistoryCorrectly(resultData: ResultData):boolean;
}