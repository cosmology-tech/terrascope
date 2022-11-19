import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../../helpers";
import { MsgRegisterCounterpartyAddress, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
export interface AminoMsgRegisterCounterpartyAddress extends AminoMsg {
  type: "cosmos-sdk/MsgRegisterCounterpartyAddress";
  value: {
    address: string;
    counterparty_address: string;
    channel_id: string;
  };
}
export interface AminoMsgPayPacketFee extends AminoMsg {
  type: "cosmos-sdk/MsgPayPacketFee";
  value: {
    fee: {
      recv_fee: {
        denom: string;
        amount: string;
      }[];
      ack_fee: {
        denom: string;
        amount: string;
      }[];
      timeout_fee: {
        denom: string;
        amount: string;
      }[];
    };
    source_port_id: string;
    source_channel_id: string;
    signer: string;
    relayers: string[];
  };
}
export interface AminoMsgPayPacketFeeAsync extends AminoMsg {
  type: "cosmos-sdk/MsgPayPacketFeeAsync";
  value: {
    packet_id: {
      port_id: string;
      channel_id: string;
      sequence: string;
    };
    packet_fee: {
      fee: {
        recv_fee: {
          denom: string;
          amount: string;
        }[];
        ack_fee: {
          denom: string;
          amount: string;
        }[];
        timeout_fee: {
          denom: string;
          amount: string;
        }[];
      };
      refund_address: string;
      relayers: string[];
    };
  };
}
export const AminoConverter = {
  "/ibc.applications.fee.v1.MsgRegisterCounterpartyAddress": {
    aminoType: "cosmos-sdk/MsgRegisterCounterpartyAddress",
    toAmino: ({
      address,
      counterpartyAddress,
      channelId
    }: MsgRegisterCounterpartyAddress): AminoMsgRegisterCounterpartyAddress["value"] => {
      return {
        address,
        counterparty_address: counterpartyAddress,
        channel_id: channelId
      };
    },
    fromAmino: ({
      address,
      counterparty_address,
      channel_id
    }: AminoMsgRegisterCounterpartyAddress["value"]): MsgRegisterCounterpartyAddress => {
      return {
        address,
        counterpartyAddress: counterparty_address,
        channelId: channel_id
      };
    }
  },
  "/ibc.applications.fee.v1.MsgPayPacketFee": {
    aminoType: "cosmos-sdk/MsgPayPacketFee",
    toAmino: ({
      fee,
      sourcePortId,
      sourceChannelId,
      signer,
      relayers
    }: MsgPayPacketFee): AminoMsgPayPacketFee["value"] => {
      return {
        fee: {
          recv_fee: fee.recvFee.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          ack_fee: fee.ackFee.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          timeout_fee: fee.timeoutFee.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          }))
        },
        source_port_id: sourcePortId,
        source_channel_id: sourceChannelId,
        signer,
        relayers
      };
    },
    fromAmino: ({
      fee,
      source_port_id,
      source_channel_id,
      signer,
      relayers
    }: AminoMsgPayPacketFee["value"]): MsgPayPacketFee => {
      return {
        fee: {
          recvFee: fee.recv_fee.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          ackFee: fee.ack_fee.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          timeoutFee: fee.timeout_fee.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        },
        sourcePortId: source_port_id,
        sourceChannelId: source_channel_id,
        signer,
        relayers
      };
    }
  },
  "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
    aminoType: "cosmos-sdk/MsgPayPacketFeeAsync",
    toAmino: ({
      packetId,
      packetFee
    }: MsgPayPacketFeeAsync): AminoMsgPayPacketFeeAsync["value"] => {
      return {
        packet_id: {
          port_id: packetId.portId,
          channel_id: packetId.channelId,
          sequence: packetId.sequence.toString()
        },
        packet_fee: {
          fee: {
            recv_fee: packetFee.fee.recvFee.map(el0 => ({
              denom: el0.denom,
              amount: el0.amount
            })),
            ack_fee: packetFee.fee.ackFee.map(el0 => ({
              denom: el0.denom,
              amount: el0.amount
            })),
            timeout_fee: packetFee.fee.timeoutFee.map(el0 => ({
              denom: el0.denom,
              amount: el0.amount
            }))
          },
          refund_address: packetFee.refundAddress,
          relayers: packetFee.relayers
        }
      };
    },
    fromAmino: ({
      packet_id,
      packet_fee
    }: AminoMsgPayPacketFeeAsync["value"]): MsgPayPacketFeeAsync => {
      return {
        packetId: {
          portId: packet_id.port_id,
          channelId: packet_id.channel_id,
          sequence: Long.fromString(packet_id.sequence)
        },
        packetFee: {
          fee: {
            recvFee: packet_fee.fee.recv_fee.map(el2 => ({
              denom: el2.denom,
              amount: el2.amount
            })),
            ackFee: packet_fee.fee.ack_fee.map(el2 => ({
              denom: el2.denom,
              amount: el2.amount
            })),
            timeoutFee: packet_fee.fee.timeout_fee.map(el2 => ({
              denom: el2.denom,
              amount: el2.amount
            }))
          },
          refundAddress: packet_fee.refund_address,
          relayers: packet_fee.relayers
        }
      };
    }
  }
};