import { HistoryData } from "../interfaces/model/HistoryData";
import { ResultData } from "../interfaces/model/ResultData";

const historyData:HistoryData[] = [];

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

export function getOperations():HistoryData[]{
    return [...historyData];
}