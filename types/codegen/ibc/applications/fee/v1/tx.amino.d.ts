import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/ibc.applications.fee.v1.MsgRegisterCounterpartyAddress": {
        aminoType: string;
        toAmino: ({ address, counterpartyAddress, channelId }: MsgRegisterCounterpartyAddress) => AminoMsgRegisterCounterpartyAddress["value"];
        fromAmino: ({ address, counterparty_address, channel_id }: AminoMsgRegisterCounterpartyAddress["value"]) => MsgRegisterCounterpartyAddress;
    };
    "/ibc.applications.fee.v1.MsgPayPacketFee": {
        aminoType: string;
        toAmino: ({ fee, sourcePortId, sourceChannelId, signer, relayers }: MsgPayPacketFee) => AminoMsgPayPacketFee["value"];
        fromAmino: ({ fee, source_port_id, source_channel_id, signer, relayers }: AminoMsgPayPacketFee["value"]) => MsgPayPacketFee;
    };
    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
        aminoType: string;
        toAmino: ({ packetId, packetFee }: MsgPayPacketFeeAsync) => AminoMsgPayPacketFeeAsync["value"];
        fromAmino: ({ packet_id, packet_fee }: AminoMsgPayPacketFeeAsync["value"]) => MsgPayPacketFeeAsync;
    };
};
