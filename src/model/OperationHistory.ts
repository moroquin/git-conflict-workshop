import { HistoryOperation } from "../interfaces/model/HistoryOperation";
import { ResultData } from "../interfaces/model/ResultData";

const historyData:HistoryOperation[] = [];

export function pushResultData(resultData:ResultData):boolean{
    if (!resultData){
        return false;
    }

    historyData.push({
        error: resultData.hasError,
        resultMessage: resultData.resultMessage,
        operationType: resultData.operationType
    });
    return true;
}

export function getOperations():HistoryOperation[]{
    return [...historyData];
}