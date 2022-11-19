import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createVestingAccount = this.createVestingAccount.bind(this);
    this.createPeriodicVestingAccount = this.createPeriodicVestingAccount.bind(this);
    this.donateAllVestingTokens = this.donateAllVestingTokens.bind(this);
  }

  createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse> {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
    return promise.then(data => MsgCreateVestingAccountResponse.decode(new _m0.Reader(data)));
  }

  createPeriodicVestingAccount(request: MsgCreatePeriodicVestingAccount): Promise<MsgCreatePeriodicVestingAccountResponse> {
    const data = MsgCreatePeriodicVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePeriodicVestingAccount", data);
    return promise.then(data => MsgCreatePeriodicVestingAccountResponse.decode(new _m0.Reader(data)));
  }

  donateAllVestingTokens(request: MsgDonateAllVestingTokens): Promise<MsgDonateAllVestingTokensResponse> {
    const data = MsgDonateAllVestingTokens.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "DonateAllVestingTokens", data);
    return promise.then(data => MsgDonateAllVestingTokensResponse.decode(new _m0.Reader(data)));
  }

}