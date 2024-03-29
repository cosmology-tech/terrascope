import { LCDClient } from "@cosmology/lcd";
import { QueryDenomTraceRequest, QueryDenomTraceResponseSDKType, QueryDenomTracesRequest, QueryDenomTracesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomHashRequest, QueryDenomHashResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    denomTrace(params: QueryDenomTraceRequest): Promise<QueryDenomTraceResponseSDKType>;
    denomTraces(params?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    denomHash(params: QueryDenomHashRequest): Promise<QueryDenomHashResponseSDKType>;
}
