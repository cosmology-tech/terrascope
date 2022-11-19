import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreateVestingAccount",
    toAmino: ({
      fromAddress,
      toAddress,
      amount,
      endTime,
      delayed
    }: MsgCreateVestingAccount): AminoMsgCreateVestingAccount["value"] => {
      return {
        from_address: fromAddress,
        to_address: toAddress,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        end_time: endTime.toString(),
        delayed
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      amount,
      end_time,
      delayed
    }: AminoMsgCreateVestingAccount["value"]): MsgCreateVestingAccount => {
      return {
        fromAddress: from_address,
        toAddress: to_address,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        endTime: Long.fromString(end_time),
        delayed
      };
    }
  },
  "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
    toAmino: ({
      fromAddress,
      toAddress,
      startTime,
      vestingPeriods
    }: MsgCreatePeriodicVestingAccount): AminoMsgCreatePeriodicVestingAccount["value"] => {
      return {
        from_address: fromAddress,
        to_address: toAddress,
        start_time: startTime.toString(),
        vesting_periods: vestingPeriods.map(el0 => ({
          length: el0.length.toString(),
          amount: el0.amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }))
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      start_time,
      vesting_periods
    }: AminoMsgCreatePeriodicVestingAccount["value"]): MsgCreatePeriodicVestingAccount => {
      return {
        fromAddress: from_address,
        toAddress: to_address,
        startTime: Long.fromString(start_time),
        vestingPeriods: vesting_periods.map(el0 => ({
          length: Long.fromString(el0.length),
          amount: el0.amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }))
      };
    }
  },
  "/cosmos.vesting.v1beta1.MsgDonateAllVestingTokens": {
    aminoType: "cosmos-sdk/MsgDonateAllVestingTokens",
    toAmino: ({
      fromAddress
    }: MsgDonateAllVestingTokens): AminoMsgDonateAllVestingTokens["value"] => {
      return {
        from_address: fromAddress
      };
    },
    fromAmino: ({
      from_address
    }: AminoMsgDonateAllVestingTokens["value"]): MsgDonateAllVestingTokens => {
      return {
        fromAddress: from_address
      };
    }
  }
};