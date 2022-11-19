import { Rpc } from "../../../../helpers";
import { MsgRegisterCounterpartyAddress, MsgRegisterCounterpartyAddressResponse, MsgPayPacketFee, MsgPayPacketFeeResponse, MsgPayPacketFeeAsync, MsgPayPacketFeeAsyncResponse } from "./tx";
/** Msg defines the ICS29 Msg service. */
export interface Msg {
    /**
     * RegisterCounterpartyAddress defines a rpc handler method for MsgRegisterCounterpartyAddress
     * RegisterCounterpartyAddress is called by the relayer on each channelEnd and allows them to specify their
     * counterparty address before relaying. This ensures they will be properly compensated for forward relaying since
     * destination chain must send back relayer's source address (counterparty address) in acknowledgement. This function
     * may be called more than once by a relayer, in which case, latest counterparty address is always used.
     */
    registerCounterpartyAddress(request: MsgRegisterCounterpartyAddress): Promise<MsgRegisterCounterpartyAddressResponse>;
    /**
     * PayPacketFee defines a rpc handler method for MsgPayPacketFee
     * PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
     * incentivize the relaying of the packet at the next sequence
     * NOTE: This method is intended to be used within a multi msg transaction, where the subsequent msg that follows
     * initiates the lifecycle of the incentivized packet
     */
    payPacketFee(request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse>;
    /**
     * PayPacketFeeAsync defines a rpc handler method for MsgPayPacketFeeAsync
     * PayPacketFeeAsync is an open callback that may be called by any module/user that wishes to escrow funds in order to
     * incentivize the relaying of a known packet (i.e. at a particular sequence)
     */
    payPacketFeeAsync(request: MsgPayPacketFeeAsync): Promise<MsgPayPacketFeeAsyncResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerCounterpartyAddress(request: MsgRegisterCounterpartyAddress): Promise<MsgRegisterCounterpartyAddressResponse>;
    payPacketFee(request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse>;
    payPacketFeeAsync(request: MsgPayPacketFeeAsync): Promise<MsgPayPacketFeeAsyncResponse>;
}
