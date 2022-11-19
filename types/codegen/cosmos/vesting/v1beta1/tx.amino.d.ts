import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateVestingAccount, MsgCreatePeriodicVestingAccount, MsgDonateAllVestingTokens } from "./tx";
export interface AminoMsgCreateVestingAccount extends AminoMsg {
    type: "cosmos-sdk/MsgCreateVestingAccount";
    value: {
        from_address: string;
        to_address: string;
        amount: {
            denom: string;
            amount: string;
        }[];
        end_time: string;
        delayed: boolean;
    };
}
export interface AminoMsgCreatePeriodicVestingAccount extends AminoMsg {
    type: "cosmos-sdk/MsgCreatePeriodicVestingAccount";
    value: {
        from_address: string;
        to_address: string;
        start_time: string;
        vesting_periods: {
            length: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }[];
    };
}
export interface AminoMsgDonateAllVestingTokens extends AminoMsg {
    type: "cosmos-sdk/MsgDonateAllVestingTokens";
    value: {
        from_address: string;
    };
}
export declare const AminoConverter: {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: MsgCreateVestingAccount) => AminoMsgCreateVestingAccount["value"];
        fromAmino: ({ from_address, to_address, amount, end_time, delayed }: AminoMsgCreateVestingAccount["value"]) => MsgCreateVestingAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: MsgCreatePeriodicVestingAccount) => AminoMsgCreatePeriodicVestingAccount["value"];
        fromAmino: ({ from_address, to_address, start_time, vesting_periods }: AminoMsgCreatePeriodicVestingAccount["value"]) => MsgCreatePeriodicVestingAccount;
    };
    "/cosmos.vesting.v1beta1.MsgDonateAllVestingTokens": {
        aminoType: string;
        toAmino: ({ fromAddress }: MsgDonateAllVestingTokens) => AminoMsgDonateAllVestingTokens["value"];
        fromAmino: ({ from_address }: AminoMsgDonateAllVestingTokens["value"]) => MsgDonateAllVestingTokens;
    };
};
