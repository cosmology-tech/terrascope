import { Rpc } from "../../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryCounterpartyAddressRequest, QueryCounterpartyAddressResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
/** Query defines the ICS29 gRPC querier service. */
export interface Query {
    /** IncentivizedPackets returns all incentivized packets and their associated fees */
    incentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
    /** IncentivizedPacket returns all packet fees for a packet given its identifier */
    incentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
    /** Gets all incentivized packets for a specific channel */
    incentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse>;
    /** TotalRecvFees returns the total receive fees for a packet given its identifier */
    totalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
    /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
    totalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
    /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
    totalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
    /** CounterpartyAddress returns the registered counterparty address for forward relaying */
    counterpartyAddress(request: QueryCounterpartyAddressRequest): Promise<QueryCounterpartyAddressResponse>;
    /** FeeEnabledChannels returns a list of all fee enabled channels */
    feeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
    /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
    feeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    incentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
    incentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
    incentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse>;
    totalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
    totalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
    totalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
    counterpartyAddress(request: QueryCounterpartyAddressRequest): Promise<QueryCounterpartyAddressResponse>;
    feeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
    feeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    incentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
    incentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
    incentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse>;
    totalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
    totalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
    totalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
    counterpartyAddress(request: QueryCounterpartyAddressRequest): Promise<QueryCounterpartyAddressResponse>;
    feeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
    feeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
};
