import { Rpc } from "../../../helpers";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountResponse, MsgDonateAllVestingTokens, MsgDonateAllVestingTokensResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
    /**
     * CreateVestingAccount defines a method that enables creating a vesting
     * account.
     */
    createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
    /**
     * CreatePeriodicVestingAccount defines a method that enables creating a
     * periodic vesting account.
     */
    createPeriodicVestingAccount(request: MsgCreatePeriodicVestingAccount): Promise<MsgCreatePeriodicVestingAccountResponse>;
    /**
     * DonateAllVestingTokens defines a method that enables donating all vesting
     * tokens to community pool
     */
    donateAllVestingTokens(request: MsgDonateAllVestingTokens): Promise<MsgDonateAllVestingTokensResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
    createPeriodicVestingAccount(request: MsgCreatePeriodicVestingAccount): Promise<MsgCreatePeriodicVestingAccountResponse>;
    donateAllVestingTokens(request: MsgDonateAllVestingTokens): Promise<MsgDonateAllVestingTokensResponse>;
}
