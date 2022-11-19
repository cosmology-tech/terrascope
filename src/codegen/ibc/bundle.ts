import * as _85 from "./applications/fee/v1/ack";
import * as _86 from "./applications/fee/v1/fee";
import * as _87 from "./applications/fee/v1/genesis";
import * as _88 from "./applications/fee/v1/metadata";
import * as _89 from "./applications/fee/v1/query";
import * as _90 from "./applications/fee/v1/tx";
import * as _91 from "./applications/interchain_accounts/controller/v1/controller";
import * as _92 from "./applications/interchain_accounts/controller/v1/query";
import * as _93 from "./applications/interchain_accounts/host/v1/host";
import * as _94 from "./applications/interchain_accounts/host/v1/query";
import * as _95 from "./applications/interchain_accounts/v1/account";
import * as _96 from "./applications/interchain_accounts/v1/genesis";
import * as _97 from "./applications/interchain_accounts/v1/metadata";
import * as _98 from "./applications/interchain_accounts/v1/packet";
import * as _99 from "./applications/transfer/v1/genesis";
import * as _100 from "./applications/transfer/v1/query";
import * as _101 from "./applications/transfer/v1/transfer";
import * as _102 from "./applications/transfer/v1/tx";
import * as _103 from "./applications/transfer/v2/packet";
import * as _104 from "./core/channel/v1/channel";
import * as _105 from "./core/channel/v1/genesis";
import * as _106 from "./core/channel/v1/query";
import * as _107 from "./core/channel/v1/tx";
import * as _108 from "./core/client/v1/client";
import * as _109 from "./core/client/v1/genesis";
import * as _110 from "./core/client/v1/query";
import * as _111 from "./core/client/v1/tx";
import * as _112 from "./core/commitment/v1/commitment";
import * as _113 from "./core/connection/v1/connection";
import * as _114 from "./core/connection/v1/genesis";
import * as _115 from "./core/connection/v1/query";
import * as _116 from "./core/connection/v1/tx";
import * as _117 from "./core/types/v1/genesis";
import * as _118 from "./lightclients/localhost/v1/localhost";
import * as _119 from "./lightclients/solomachine/v1/solomachine";
import * as _120 from "./lightclients/solomachine/v2/solomachine";
import * as _121 from "./lightclients/tendermint/v1/tendermint";
import * as _196 from "./applications/fee/v1/tx.amino";
import * as _197 from "./applications/transfer/v1/tx.amino";
import * as _198 from "./core/channel/v1/tx.amino";
import * as _199 from "./core/client/v1/tx.amino";
import * as _200 from "./core/connection/v1/tx.amino";
import * as _201 from "./applications/fee/v1/tx.registry";
import * as _202 from "./applications/transfer/v1/tx.registry";
import * as _203 from "./core/channel/v1/tx.registry";
import * as _204 from "./core/client/v1/tx.registry";
import * as _205 from "./core/connection/v1/tx.registry";
import * as _206 from "./applications/fee/v1/query.lcd";
import * as _207 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _208 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _209 from "./applications/transfer/v1/query.lcd";
import * as _210 from "./core/channel/v1/query.lcd";
import * as _211 from "./core/client/v1/query.lcd";
import * as _212 from "./core/connection/v1/query.lcd";
import * as _213 from "./applications/fee/v1/query.rpc.Query";
import * as _214 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _215 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _216 from "./applications/transfer/v1/query.rpc.Query";
import * as _217 from "./core/channel/v1/query.rpc.Query";
import * as _218 from "./core/client/v1/query.rpc.Query";
import * as _219 from "./core/connection/v1/query.rpc.Query";
import * as _220 from "./applications/fee/v1/tx.rpc.msg";
import * as _221 from "./applications/transfer/v1/tx.rpc.msg";
import * as _222 from "./core/channel/v1/tx.rpc.msg";
import * as _223 from "./core/client/v1/tx.rpc.msg";
import * as _224 from "./core/connection/v1/tx.rpc.msg";
import * as _231 from "./lcd";
import * as _232 from "./rpc.query";
import * as _233 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = { ..._85,
        ..._86,
        ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._196,
        ..._201,
        ..._206,
        ..._213,
        ..._220
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._91,
          ..._92,
          ..._207,
          ..._214
        };
      }
      export namespace host {
        export const v1 = { ..._93,
          ..._94,
          ..._208,
          ..._215
        };
      }
      export const v1 = { ..._95,
        ..._96,
        ..._97,
        ..._98
      };
    }
    export namespace transfer {
      export const v1 = { ..._99,
        ..._100,
        ..._101,
        ..._102,
        ..._197,
        ..._202,
        ..._209,
        ..._216,
        ..._221
      };
      export const v2 = { ..._103
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._104,
        ..._105,
        ..._106,
        ..._107,
        ..._198,
        ..._203,
        ..._210,
        ..._217,
        ..._222
      };
    }
    export namespace client {
      export const v1 = { ..._108,
        ..._109,
        ..._110,
        ..._111,
        ..._199,
        ..._204,
        ..._211,
        ..._218,
        ..._223
      };
    }
    export namespace commitment {
      export const v1 = { ..._112
      };
    }
    export namespace connection {
      export const v1 = { ..._113,
        ..._114,
        ..._115,
        ..._116,
        ..._200,
        ..._205,
        ..._212,
        ..._219,
        ..._224
      };
    }
    export namespace types {
      export const v1 = { ..._117
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._118
      };
    }
    export namespace solomachine {
      export const v1 = { ..._119
      };
      export const v2 = { ..._120
      };
    }
    export namespace tendermint {
      export const v1 = { ..._121
      };
    }
  }
  export const ClientFactory = { ..._231,
    ..._232,
    ..._233
  };
}