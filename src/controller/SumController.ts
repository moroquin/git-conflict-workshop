import { OperationController } from "../interfaces/controller/OperationController";
import { OperationData } from "../interfaces/model/OperationData";
import { OperationType } from "../interfaces/model/OperationType";
import { Payload } from "../interfaces/model/Payload";
import { ResultData } from "../interfaces/model/ResultData";

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
            result
        }
    }

    sumController.addOperationToHistoryCorrectly = (resultData: ResultData) => {
        console.log(resultData);
        return true;
    };

    return sumController;
}