import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */

export interface IncentivizedAcknowledgement {
  /** the underlying app acknowledgement result bytes */
  result: Uint8Array;
  /** the relayer address which submits the recv packet message */

  forwardRelayerAddress: string;
  /** success flag of the base application callback */

  underlyingAppSuccess: boolean;
}
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */

export interface IncentivizedAcknowledgementSDKType {
  /** the underlying app acknowledgement result bytes */
  result: Uint8Array;
  /** the relayer address which submits the recv packet message */

  forward_relayer_address: string;
  /** success flag of the base application callback */

  underlying_app_success: boolean;
}

function createBaseIncentivizedAcknowledgement(): IncentivizedAcknowledgement {
  return {
    result: new Uint8Array(),
    forwardRelayerAddress: "",
    underlyingAppSuccess: false
  };
}

export const IncentivizedAcknowledgement = {
  encode(message: IncentivizedAcknowledgement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result.length !== 0) {
      writer.uint32(10).bytes(message.result);
    }

    if (message.forwardRelayerAddress !== "") {
      writer.uint32(18).string(message.forwardRelayerAddress);
    }

    if (message.underlyingAppSuccess === true) {
      writer.uint32(24).bool(message.underlyingAppSuccess);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncentivizedAcknowledgement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentivizedAcknowledgement();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.result = reader.bytes();
          break;

        case 2:
          message.forwardRelayerAddress = reader.string();
          break;

        case 3:
          message.underlyingAppSuccess = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<IncentivizedAcknowledgement>): IncentivizedAcknowledgement {
    const message = createBaseIncentivizedAcknowledgement();
    message.result = object.result ?? new Uint8Array();
    message.forwardRelayerAddress = object.forwardRelayerAddress ?? "";
    message.underlyingAppSuccess = object.underlyingAppSuccess ?? false;
    return message;
  }

};