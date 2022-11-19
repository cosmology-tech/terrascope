import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateVestingAccount, MsgCreatePeriodicVestingAccount, MsgDonateAllVestingTokens } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount], ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount", MsgCreatePeriodicVestingAccount], ["/cosmos.vesting.v1beta1.MsgDonateAllVestingTokens", MsgDonateAllVestingTokens]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createVestingAccount(value: MsgCreateVestingAccount) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.encode(value).finish()
      };
    },

    createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
        value: MsgCreatePeriodicVestingAccount.encode(value).finish()
      };
    },

    donateAllVestingTokens(value: MsgDonateAllVestingTokens) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgDonateAllVestingTokens",
        value: MsgDonateAllVestingTokens.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createVestingAccount(value: MsgCreateVestingAccount) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value
      };
    },

    createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
        value
      };
    },

    donateAllVestingTokens(value: MsgDonateAllVestingTokens) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgDonateAllVestingTokens",
        value
      };
    }

  },
  fromPartial: {
    createVestingAccount(value: MsgCreateVestingAccount) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.fromPartial(value)
      };
    },

    createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
        value: MsgCreatePeriodicVestingAccount.fromPartial(value)
      };
    },

    donateAllVestingTokens(value: MsgDonateAllVestingTokens) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgDonateAllVestingTokens",
        value: MsgDonateAllVestingTokens.fromPartial(value)
      };
    }

  }
};