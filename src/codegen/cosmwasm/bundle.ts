import * as _71 from "./wasm/v1/genesis";
import * as _72 from "./wasm/v1/ibc";
import * as _73 from "./wasm/v1/proposal";
import * as _74 from "./wasm/v1/query";
import * as _75 from "./wasm/v1/tx";
import * as _76 from "./wasm/v1/types";
import * as _191 from "./wasm/v1/tx.amino";
import * as _192 from "./wasm/v1/tx.registry";
import * as _193 from "./wasm/v1/query.lcd";
import * as _194 from "./wasm/v1/query.rpc.Query";
import * as _195 from "./wasm/v1/tx.rpc.msg";
import * as _228 from "./lcd";
import * as _229 from "./rpc.query";
import * as _230 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._191,
      ..._192,
      ..._193,
      ..._194,
      ..._195
    };
  }
  export const ClientFactory = { ..._228,
    ..._229,
    ..._230
  };
}