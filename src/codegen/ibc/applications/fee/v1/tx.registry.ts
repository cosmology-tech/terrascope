import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterCounterpartyAddress, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ibc.applications.fee.v1.MsgRegisterCounterpartyAddress", MsgRegisterCounterpartyAddress], ["/ibc.applications.fee.v1.MsgPayPacketFee", MsgPayPacketFee], ["/ibc.applications.fee.v1.MsgPayPacketFeeAsync", MsgPayPacketFeeAsync]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerCounterpartyAddress(value: MsgRegisterCounterpartyAddress) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyAddress",
        value: MsgRegisterCounterpartyAddress.encode(value).finish()
      };
    },

    payPacketFee(value: MsgPayPacketFee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value: MsgPayPacketFee.encode(value).finish()
      };
    },

    payPacketFeeAsync(value: MsgPayPacketFeeAsync) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value: MsgPayPacketFeeAsync.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    registerCounterpartyAddress(value: MsgRegisterCounterpartyAddress) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyAddress",
        value
      };
    },

    payPacketFee(value: MsgPayPacketFee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value
      };
    },

    payPacketFeeAsync(value: MsgPayPacketFeeAsync) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value
      };
    }

  },
  fromPartial: {
    registerCounterpartyAddress(value: MsgRegisterCounterpartyAddress) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyAddress",
        value: MsgRegisterCounterpartyAddress.fromPartial(value)
      };
    },

    payPacketFee(value: MsgPayPacketFee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value: MsgPayPacketFee.fromPartial(value)
      };
    },

    payPacketFeeAsync(value: MsgPayPacketFeeAsync) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value: MsgPayPacketFeeAsync.fromPartial(value)
      };
    }

  }
};