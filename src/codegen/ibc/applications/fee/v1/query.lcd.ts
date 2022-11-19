import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponseSDKType, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponseSDKType, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponseSDKType, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponseSDKType, QueryTotalAckFeesRequest, QueryTotalAckFeesResponseSDKType, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponseSDKType, QueryCounterpartyAddressRequest, QueryCounterpartyAddressResponseSDKType, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponseSDKType, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.incentivizedPackets = this.incentivizedPackets.bind(this);
    this.incentivizedPacket = this.incentivizedPacket.bind(this);
    this.incentivizedPacketsForChannel = this.incentivizedPacketsForChannel.bind(this);
    this.totalRecvFees = this.totalRecvFees.bind(this);
    this.totalAckFees = this.totalAckFees.bind(this);
    this.totalTimeoutFees = this.totalTimeoutFees.bind(this);
    this.counterpartyAddress = this.counterpartyAddress.bind(this);
    this.feeEnabledChannels = this.feeEnabledChannels.bind(this);
    this.feeEnabledChannel = this.feeEnabledChannel.bind(this);
  }
  /* IncentivizedPackets returns all incentivized packets and their associated fees */


  async incentivizedPackets(params: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    if (typeof params?.queryHeight !== "undefined") {
      options.params.query_height = params.queryHeight;
    }

    const endpoint = `ibc/apps/fee/v1/incentivized_packets`;
    return await this.req.get<QueryIncentivizedPacketsResponseSDKType>(endpoint, options);
  }
  /* IncentivizedPacket returns all packet fees for a packet given its identifier */


  async incentivizedPacket(params: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.packetId !== "undefined") {
      options.params.packet_id = params.packetId;
    }

    if (typeof params?.queryHeight !== "undefined") {
      options.params.query_height = params.queryHeight;
    }

    const endpoint = `ibc/apps/fee/v1/incentivized_packet/port/${params.packet_id.port_id}/channel/${params.packet_id.channel_id}sequence/${params.packet_id.sequence}`;
    return await this.req.get<QueryIncentivizedPacketResponseSDKType>(endpoint, options);
  }
  /* Gets all incentivized packets for a specific channel */


  async incentivizedPacketsForChannel(params: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    if (typeof params?.queryHeight !== "undefined") {
      options.params.query_height = params.queryHeight;
    }

    const endpoint = `ibc/apps/fee/v1/incentivized_packets/${params.portId}/${params.channelId}`;
    return await this.req.get<QueryIncentivizedPacketsForChannelResponseSDKType>(endpoint, options);
  }
  /* TotalRecvFees returns the total receive fees for a packet given its identifier */


  async totalRecvFees(params: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.packetId !== "undefined") {
      options.params.packet_id = params.packetId;
    }

    const endpoint = `ibc/apps/fee/v1/total_recv_fees/port/${params.packet_id.port_id}/channel/${params.packet_id.channel_id}sequence/${params.packet_id.sequence}`;
    return await this.req.get<QueryTotalRecvFeesResponseSDKType>(endpoint, options);
  }
  /* TotalAckFees returns the total acknowledgement fees for a packet given its identifier */


  async totalAckFees(params: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.packetId !== "undefined") {
      options.params.packet_id = params.packetId;
    }

    const endpoint = `ibc/apps/fee/v1/total_ack_fees/port/${params.packet_id.port_id}/channel/${params.packet_id.channel_id}sequence/${params.packet_id.sequence}`;
    return await this.req.get<QueryTotalAckFeesResponseSDKType>(endpoint, options);
  }
  /* TotalTimeoutFees returns the total timeout fees for a packet given its identifier */


  async totalTimeoutFees(params: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.packetId !== "undefined") {
      options.params.packet_id = params.packetId;
    }

    const endpoint = `ibc/apps/fee/v1/total_timeout_fees/port/${params.packet_id.port_id}/channel/${params.packet_id.channel_id}sequence/${params.packet_id.sequence}`;
    return await this.req.get<QueryTotalTimeoutFeesResponseSDKType>(endpoint, options);
  }
  /* CounterpartyAddress returns the registered counterparty address for forward relaying */


  async counterpartyAddress(params: QueryCounterpartyAddressRequest): Promise<QueryCounterpartyAddressResponseSDKType> {
    const endpoint = `ibc/apps/fee/v1/counterparty_address/${params.relayerAddress}channel/${params.channelId}`;
    return await this.req.get<QueryCounterpartyAddressResponseSDKType>(endpoint);
  }
  /* FeeEnabledChannels returns a list of all fee enabled channels */


  async feeEnabledChannels(params: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    if (typeof params?.queryHeight !== "undefined") {
      options.params.query_height = params.queryHeight;
    }

    const endpoint = `ibc/apps/fee/v1/fee_enabled`;
    return await this.req.get<QueryFeeEnabledChannelsResponseSDKType>(endpoint, options);
  }
  /* FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */


  async feeEnabledChannel(params: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponseSDKType> {
    const endpoint = `ibc/apps/fee/v1/fee_enabled/port/${params.portId}channel/${params.channelId}`;
    return await this.req.get<QueryFeeEnabledChannelResponseSDKType>(endpoint);
  }

}