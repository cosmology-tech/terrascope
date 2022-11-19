import { IdentifiedPacketFees, IdentifiedPacketFeesSDKType } from "./fee";
import { PacketId, PacketIdSDKType } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisState {
    /** list of identified packet fees */
    identifiedFees: IdentifiedPacketFees[];
    /** list of fee enabled channels */
    feeEnabledChannels: FeeEnabledChannel[];
    /** list of registered relayer addresses */
    registeredRelayers: RegisteredRelayerAddress[];
    /** list of forward relayer addresses */
    forwardRelayers: ForwardRelayerAddress[];
}
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisStateSDKType {
    /** list of identified packet fees */
    identified_fees: IdentifiedPacketFeesSDKType[];
    /** list of fee enabled channels */
    fee_enabled_channels: FeeEnabledChannelSDKType[];
    /** list of registered relayer addresses */
    registered_relayers: RegisteredRelayerAddressSDKType[];
    /** list of forward relayer addresses */
    forward_relayers: ForwardRelayerAddressSDKType[];
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannel {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannelSDKType {
    /** unique port identifier */
    port_id: string;
    /** unique channel identifier */
    channel_id: string;
}
/** RegisteredRelayerAddress contains the address and counterparty address for a specific relayer (for distributing fees) */
export interface RegisteredRelayerAddress {
    /** the relayer address */
    address: string;
    /** the counterparty relayer address */
    counterpartyAddress: string;
    /** unique channel identifier */
    channelId: string;
}
/** RegisteredRelayerAddress contains the address and counterparty address for a specific relayer (for distributing fees) */
export interface RegisteredRelayerAddressSDKType {
    /** the relayer address */
    address: string;
    /** the counterparty relayer address */
    counterparty_address: string;
    /** unique channel identifier */
    channel_id: string;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddress {
    /** the forward relayer address */
    address: string;
    /** unique packet identifer comprised of the channel ID, port ID and sequence */
    packetId?: PacketId;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddressSDKType {
    /** the forward relayer address */
    address: string;
    /** unique packet identifer comprised of the channel ID, port ID and sequence */
    packet_id?: PacketIdSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const FeeEnabledChannel: {
    encode(message: FeeEnabledChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeEnabledChannel;
    fromPartial(object: DeepPartial<FeeEnabledChannel>): FeeEnabledChannel;
};
export declare const RegisteredRelayerAddress: {
    encode(message: RegisteredRelayerAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredRelayerAddress;
    fromPartial(object: DeepPartial<RegisteredRelayerAddress>): RegisteredRelayerAddress;
};
export declare const ForwardRelayerAddress: {
    encode(message: ForwardRelayerAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ForwardRelayerAddress;
    fromPartial(object: DeepPartial<ForwardRelayerAddress>): ForwardRelayerAddress;
};
