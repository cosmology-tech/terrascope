import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateVestingAccount, MsgCreatePeriodicVestingAccount, MsgDonateAllVestingTokens } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        donateAllVestingTokens(value: MsgDonateAllVestingTokens): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
            typeUrl: string;
            value: MsgCreatePeriodicVestingAccount;
        };
        donateAllVestingTokens(value: MsgDonateAllVestingTokens): {
            typeUrl: string;
            value: MsgDonateAllVestingTokens;
        };
    };
    fromPartial: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
            typeUrl: string;
            value: MsgCreatePeriodicVestingAccount;
        };
        donateAllVestingTokens(value: MsgDonateAllVestingTokens): {
            typeUrl: string;
            value: MsgDonateAllVestingTokens;
        };
    };
};
