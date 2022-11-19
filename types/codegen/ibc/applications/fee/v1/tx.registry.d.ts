import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterCounterpartyAddress, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerCounterpartyAddress(value: MsgRegisterCounterpartyAddress): {
            typeUrl: string;
            value: Uint8Array;
        };
        payPacketFee(value: MsgPayPacketFee): {
            typeUrl: string;
            value: Uint8Array;
        };
        payPacketFeeAsync(value: MsgPayPacketFeeAsync): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerCounterpartyAddress(value: MsgRegisterCounterpartyAddress): {
            typeUrl: string;
            value: MsgRegisterCounterpartyAddress;
        };
        payPacketFee(value: MsgPayPacketFee): {
            typeUrl: string;
            value: MsgPayPacketFee;
        };
        payPacketFeeAsync(value: MsgPayPacketFeeAsync): {
            typeUrl: string;
            value: MsgPayPacketFeeAsync;
        };
    };
    fromPartial: {
        registerCounterpartyAddress(value: MsgRegisterCounterpartyAddress): {
            typeUrl: string;
            value: MsgRegisterCounterpartyAddress;
        };
        payPacketFee(value: MsgPayPacketFee): {
            typeUrl: string;
            value: MsgPayPacketFee;
        };
        payPacketFeeAsync(value: MsgPayPacketFeeAsync): {
            typeUrl: string;
            value: MsgPayPacketFeeAsync;
        };
    };
};
