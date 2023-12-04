import { OperationController } from "../interfaces/controller/OperationController";
import { OperationType } from "../interfaces/model/OperationType";
import { Payload } from "../interfaces/model/Payload";
import { ErrorController } from "./ErrorController";
import { SumController } from "./SumController";

export function OperationControllerFactory(payload:Payload, operationType:OperationType):OperationController {
    switch (operationType) {
        case OperationType.SUM:
            return SumController()
        default:
            return ErrorController();
    }
}