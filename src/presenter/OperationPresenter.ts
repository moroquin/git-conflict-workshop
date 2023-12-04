import { OperationControllerFactory } from "../controller/OperationControllerFactory";
import { OperationController } from "../interfaces/controller/OperationController";
import { GeneralResponse, GenaralResponseAllOperations } from "../interfaces/model/GeneralResponse";
import { OperationData } from "../interfaces/model/OperationData";
import { OperationType } from "../interfaces/model/OperationType";
import { Payload } from "../interfaces/model/Payload";
import { ResultData } from "../interfaces/model/ResultData";
import { getOperations } from "../model/OperationHistory";


export function ExecuteOperation(payload: Payload):GeneralResponse{
    const operationType: OperationType = getOperationType(payload);
    if (operationType === OperationType.ERROR){
        return {
            httpStatus : 404,
            error: true,
            message: "Operation not found"
        };
    }
    const operationController:OperationController = OperationControllerFactory(payload,operationType);
    const operationData:OperationData = operationController.getOperationData(payload);
    if (operationData.hasError){
        return {
            httpStatus : 400,
            error: true,
            message: "Bad request"
        };
    }
    const operationResult: ResultData = operationController.executeOperation(operationData);

    if (operationResult.hasError){
        return {
            httpStatus : 400,
            error: true,
            message: operationResult.resultMessage
        };
    }

    if (!operationController.addOperationToHistoryCorrectly(operationResult)){
        return {
            httpStatus : 400,
            error: true,
            message: "Not being able to save the operation in the history."
        };
    }
    return {
        httpStatus : 200,
        error: false, 
        message: operationResult.resultMessage
    };
}

export function getAllOperations():GenaralResponseAllOperations{
    return {
        httpStatus: 200,
        error: false,
        message: "all operations",
        data: getOperations()
    };
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

