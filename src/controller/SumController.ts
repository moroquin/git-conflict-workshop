import { OperationController } from "../interfaces/controller/OperationController";
import { OperationData } from "../interfaces/model/OperationData";
import { OperationType } from "../interfaces/model/OperationType";
import { Payload } from "../interfaces/model/Payload";
import { ResultData } from "../interfaces/model/ResultData";
import { pushResultData } from "../model/OperationHistory";

export function SumController(): OperationController{
    const sumController:OperationController = {
        getOperationData: (payload: Payload):OperationData =>{
            return {
                number1: payload.number1,
                number2: payload.number2,
                operationType: OperationType.SUM,
                hasError: false
            };
        },
        executeOperation: (operationData: OperationData):ResultData=>{
            const result = operationData.number1 + operationData.number2;
            return{
                ...operationData,
                result,
                resultMessage: `SUM: ${operationData.number1}+${operationData.number2}=${result}`
            };
        },
        addOperationToHistoryCorrectly: (resultData: ResultData):boolean => {
            return pushResultData(resultData);
        }
    };

    return sumController;
}