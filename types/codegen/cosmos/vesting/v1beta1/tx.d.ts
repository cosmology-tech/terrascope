import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
    endTime: Long;
    delayed: boolean;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountSDKType {
    from_address: string;
    to_address: string;
    amount: CoinSDKType[];
    end_time: Long;
    delayed: boolean;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseSDKType {
}
/**
 * MsgCreatePeriodicVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccount {
    fromAddress: string;
    toAddress: string;
    startTime: Long;
    vestingPeriods: Period[];
}
/**
 * MsgCreatePeriodicVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccountSDKType {
    from_address: string;
    to_address: string;
    start_time: Long;
    vesting_periods: PeriodSDKType[];
}
/**
 * MsgCreatePeriodicVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponse {
}
/**
 * MsgCreatePeriodicVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponseSDKType {
}
/**
 * MsgDonateAllVestingTokens defines a message that enables donating all vesting
 * token to community pool.
 */
export interface MsgDonateAllVestingTokens {
    fromAddress: string;
}
/**
 * MsgDonateAllVestingTokens defines a message that enables donating all vesting
 * token to community pool.
 */
export interface MsgDonateAllVestingTokensSDKType {
    from_address: string;
}
/**
 * MsgDonateAllVestingTokensResponse defines the Msg/MsgDonateAllVestingTokens
 * response type.
 */
export interface MsgDonateAllVestingTokensResponse {
}
/**
 * MsgDonateAllVestingTokensResponse defines the Msg/MsgDonateAllVestingTokens
 * response type.
 */
export interface MsgDonateAllVestingTokensResponseSDKType {
}
export declare const MsgCreateVestingAccount: {
    encode(message: MsgCreateVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccount;
    fromPartial(object: DeepPartial<MsgCreateVestingAccount>): MsgCreateVestingAccount;
};
export declare const MsgCreateVestingAccountResponse: {
    encode(_: MsgCreateVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccountResponse;
    fromPartial(_: DeepPartial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse;
};
export declare const MsgCreatePeriodicVestingAccount: {
    encode(message: MsgCreatePeriodicVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccount;
    fromPartial(object: DeepPartial<MsgCreatePeriodicVestingAccount>): MsgCreatePeriodicVestingAccount;
};
export declare const MsgCreatePeriodicVestingAccountResponse: {
    encode(_: MsgCreatePeriodicVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccountResponse;
    fromPartial(_: DeepPartial<MsgCreatePeriodicVestingAccountResponse>): MsgCreatePeriodicVestingAccountResponse;
};
export declare const MsgDonateAllVestingTokens: {
    encode(message: MsgDonateAllVestingTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDonateAllVestingTokens;
    fromPartial(object: DeepPartial<MsgDonateAllVestingTokens>): MsgDonateAllVestingTokens;
};
export declare const MsgDonateAllVestingTokensResponse: {
    encode(_: MsgDonateAllVestingTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDonateAllVestingTokensResponse;
    fromPartial(_: DeepPartial<MsgDonateAllVestingTokensResponse>): MsgDonateAllVestingTokensResponse;
};
