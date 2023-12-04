import { OperationController } from "../interfaces/controller/OperationController";
import { OperationData } from "../interfaces/model/OperationData";
import { OperationType } from "../interfaces/model/OperationType";
import { Payload } from "../interfaces/model/Payload";
import { ResultData } from "../interfaces/model/ResultData";

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
            result: null
        };
    }

    errorController.addOperationToHistoryCorrectly = (resultData: ResultData) => {
        console.log(resultData);
        return false;
    };

    return errorController;
}