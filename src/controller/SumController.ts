import { OperationController } from "../interfaces/controller/OperationController";
import { OperationData } from "../interfaces/model/OperationData";
import { OperationType } from "../interfaces/model/OperationType";
import { Payload } from "../interfaces/model/Payload";
import { ResultData } from "../interfaces/model/ResultData";
import { pushResultData } from "../model/OperationHistory";

export function SumController(): OperationController{
    let sumController:OperationController;

    sumController.getOperationData = (payload: Payload):OperationData =>{
        return {
            number1: payload.number1,
            number2: payload.number2,
            operationType: OperationType.SUM,
            hasError: false
        };
    }

    sumController.executeOperation = (operationData: OperationData):ResultData=>{
        const result = operationData.number1 + operationData.number2;
        return{
            ...operationData,
            result,
            resultMessage: `SUM: ${operationData.number1}+${operationData.number2}=${result}`
        }
    }

    sumController.addOperationToHistoryCorrectly = (resultData: ResultData):boolean => {
        return pushResultData(resultData);
    };

    return sumController;
}