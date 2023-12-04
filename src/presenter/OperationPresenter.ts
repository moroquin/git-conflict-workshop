import { OperationControllerFactory } from "../controller/OperationControllerFactory";
import { OperationController } from "../interfaces/controller/OperationController";
import { OperationData } from "../interfaces/model/OperationData";
import { OperationType } from "../interfaces/model/OperationType";
import { Payload } from "../interfaces/model/Payload";
import { ResultData } from "../interfaces/model/ResultData";


export function ExecuteOperation(payload: Payload){
    const operationController:OperationController = OperationControllerFactory(payload,getOperationType(payload));
    const operationData:OperationData = operationController.getOperationData(payload);
    const operationResult: ResultData = operationController.executeOperation(operationData);

    if (!operationController.addOperationToHistoryCorrectly(operationResult)){
        //manage error 
    }


    //return ok


}


function getOperationType(payload: Payload):OperationType{
    if (!payload.operation){
        return OperationType.ERROR;
    }
    switch (payload.operation) {
        case "+":
            return OperationType.SUM;
        default:
            return OperationType.ERROR;
    }
}

