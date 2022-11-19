import { Fee, FeeSDKType, PacketFee, PacketFeeSDKType } from "./fee";
import { PacketId, PacketIdSDKType } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** MsgRegisterCounterpartyAddress defines the request type for the RegisterCounterpartyAddress rpc */
export interface MsgRegisterCounterpartyAddress {
    /** the relayer address */
    address: string;
    /** the counterparty relayer address */
    counterpartyAddress: string;
    /** unique channel identifier */
    channelId: string;
}
/** MsgRegisterCounterpartyAddress defines the request type for the RegisterCounterpartyAddress rpc */
export interface MsgRegisterCounterpartyAddressSDKType {
    /** the relayer address */
    address: string;
    /** the counterparty relayer address */
    counterparty_address: string;
    /** unique channel identifier */
    channel_id: string;
}
/** MsgRegisterCounterpartyAddressResponse defines the response type for the RegisterCounterpartyAddress rpc */
export interface MsgRegisterCounterpartyAddressResponse {
}
/** MsgRegisterCounterpartyAddressResponse defines the response type for the RegisterCounterpartyAddress rpc */
export interface MsgRegisterCounterpartyAddressResponseSDKType {
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFee {
    /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
    fee?: Fee;
    /** the source port unique identifier */
    sourcePortId: string;
    /** the source channel unique identifer */
    sourceChannelId: string;
    /** account address to refund fee if necessary */
    signer: string;
    /** optional list of relayers permitted to the receive packet fees */
    relayers: string[];
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFeeSDKType {
    /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
    fee?: FeeSDKType;
    /** the source port unique identifier */
    source_port_id: string;
    /** the source channel unique identifer */
    source_channel_id: string;
    /** account address to refund fee if necessary */
    signer: string;
    /** optional list of relayers permitted to the receive packet fees */
    relayers: string[];
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponse {
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponseSDKType {
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsync {
    /** unique packet identifier comprised of the channel ID, port ID and sequence */
    packetId?: PacketId;
    /** the packet fee associated with a particular IBC packet */
    packetFee?: PacketFee;
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsyncSDKType {
    /** unique packet identifier comprised of the channel ID, port ID and sequence */
    packet_id?: PacketIdSDKType;
    /** the packet fee associated with a particular IBC packet */
    packet_fee?: PacketFeeSDKType;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponse {
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponseSDKType {
}
export declare const MsgRegisterCounterpartyAddress: {
    encode(message: MsgRegisterCounterpartyAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterCounterpartyAddress;
    fromPartial(object: DeepPartial<MsgRegisterCounterpartyAddress>): MsgRegisterCounterpartyAddress;
};
export declare const MsgRegisterCounterpartyAddressResponse: {
    encode(_: MsgRegisterCounterpartyAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterCounterpartyAddressResponse;
    fromPartial(_: DeepPartial<MsgRegisterCounterpartyAddressResponse>): MsgRegisterCounterpartyAddressResponse;
};
export declare const MsgPayPacketFee: {
    encode(message: MsgPayPacketFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFee;
    fromPartial(object: DeepPartial<MsgPayPacketFee>): MsgPayPacketFee;
};
export declare const MsgPayPacketFeeResponse: {
    encode(_: MsgPayPacketFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeResponse;
    fromPartial(_: DeepPartial<MsgPayPacketFeeResponse>): MsgPayPacketFeeResponse;
};
export declare const MsgPayPacketFeeAsync: {
    encode(message: MsgPayPacketFeeAsync, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeAsync;
    fromPartial(object: DeepPartial<MsgPayPacketFeeAsync>): MsgPayPacketFeeAsync;
};
export declare const MsgPayPacketFeeAsyncResponse: {
    encode(_: MsgPayPacketFeeAsyncResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeAsyncResponse;
    fromPartial(_: DeepPartial<MsgPayPacketFeeAsyncResponse>): MsgPayPacketFeeAsyncResponse;
};
