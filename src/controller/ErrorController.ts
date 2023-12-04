import { OperationController } from "../interfaces/controller/OperationController";
import { OperationData } from "../interfaces/model/OperationData";
import { OperationType } from "../interfaces/model/OperationType";
import { Payload } from "../interfaces/model/Payload";
import { ResultData } from "../interfaces/model/ResultData";
import { pushResultData } from "../model/OperationHistory";

export function ErrorController(): OperationController {
    let errorController: OperationController;

    errorController.getOperationData = (payload: Payload): OperationData => {
        console.log(payload);
        return {
            number1: null,
            number2: null,
            operationType: OperationType.ERROR,
            hasError: true
        };
    }

    errorController.executeOperation = (operationData: OperationData): ResultData => {
        console.log(operationData);
        return {
            number1: null,
            number2: null,
            operationType: OperationType.ERROR,
            hasError: true,
            result: null,
            resultMessage: "ERROR"
        };
    }

    errorController.addOperationToHistoryCorrectly = (resultData: ResultData) => {
        return pushResultData(resultData);
    };

    return errorController;
}