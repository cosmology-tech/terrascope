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

function createBaseGenesisState(): GenesisState {
  return {
    identifiedFees: [],
    feeEnabledChannels: [],
    registeredRelayers: [],
    forwardRelayers: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.identifiedFees) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.registeredRelayers) {
      RegisteredRelayerAddress.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.forwardRelayers) {
      ForwardRelayerAddress.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.identifiedFees.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;

        case 2:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          break;

        case 3:
          message.registeredRelayers.push(RegisteredRelayerAddress.decode(reader, reader.uint32()));
          break;

        case 4:
          message.forwardRelayers.push(ForwardRelayerAddress.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.identifiedFees = object.identifiedFees?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
    message.feeEnabledChannels = object.feeEnabledChannels?.map(e => FeeEnabledChannel.fromPartial(e)) || [];
    message.registeredRelayers = object.registeredRelayers?.map(e => RegisteredRelayerAddress.fromPartial(e)) || [];
    message.forwardRelayers = object.forwardRelayers?.map(e => ForwardRelayerAddress.fromPartial(e)) || [];
    return message;
  }

};

function createBaseFeeEnabledChannel(): FeeEnabledChannel {
  return {
    portId: "",
    channelId: ""
  };
}

export const FeeEnabledChannel = {
  encode(message: FeeEnabledChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeEnabledChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeEnabledChannel();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeeEnabledChannel>): FeeEnabledChannel {
    const message = createBaseFeeEnabledChannel();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  }

};

function createBaseRegisteredRelayerAddress(): RegisteredRelayerAddress {
  return {
    address: "",
    counterpartyAddress: "",
    channelId: ""
  };
}

export const RegisteredRelayerAddress = {
  encode(message: RegisteredRelayerAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.counterpartyAddress !== "") {
      writer.uint32(18).string(message.counterpartyAddress);
    }

    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredRelayerAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredRelayerAddress();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.counterpartyAddress = reader.string();
          break;

        case 3:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RegisteredRelayerAddress>): RegisteredRelayerAddress {
    const message = createBaseRegisteredRelayerAddress();
    message.address = object.address ?? "";
    message.counterpartyAddress = object.counterpartyAddress ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  }

};

function createBaseForwardRelayerAddress(): ForwardRelayerAddress {
  return {
    address: "",
    packetId: undefined
  };
}

export const ForwardRelayerAddress = {
  encode(message: ForwardRelayerAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForwardRelayerAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardRelayerAddress();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ForwardRelayerAddress>): ForwardRelayerAddress {
    const message = createBaseForwardRelayerAddress();
    message.address = object.address ?? "";
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    return message;
  }

};