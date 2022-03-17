import { BigInt } from "@graphprotocol/graph-ts"
import {
  PolygonME,
  Approval,
  ApprovalForAll,
  Transfer,
  Approval1,
  ApprovalForAll1,
  Transfer1,
  Approval2,
  ApprovalForAll2,
  Transfer2,
  OwnershipTransferred,
  Approval3,
  ApprovalForAll3,
  OwnershipTransferred1,
  Transfer3
} from "../generated/PolygonME/PolygonME"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.approved = event.params.approved

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.supportsInterface(...)
  // - contract.supportsInterface(...)
  // - contract.balanceOf(...)
  // - contract.ownerOf(...)
  // - contract.name(...)
  // - contract.symbol(...)
  // - contract.tokenURI(...)
  // - contract.getApproved(...)
  // - contract.isApprovedForAll(...)
  // - contract.supportsInterface(...)
  // - contract.supportsInterface(...)
  // - contract.balanceOf(...)
  // - contract.ownerOf(...)
  // - contract.getApproved(...)
  // - contract.isApprovedForAll(...)
  // - contract.balanceOf(...)
  // - contract.getApproved(...)
  // - contract.isApprovedForAll(...)
  // - contract.ownerOf(...)
  // - contract.supportsInterface(...)
  // - contract.name(...)
  // - contract.symbol(...)
  // - contract.tokenURI(...)
  // - contract.onERC721Received(...)
  // - contract.last_completed_migration(...)
  // - contract.owner(...)
  // - contract.owner(...)
  // - contract._nameToTokenId(...)
  // - contract._tlds(...)
  // - contract.balanceOf(...)
  // - contract.getApproved(...)
  // - contract.isApprovedForAll(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.totalSupply(...)
  // - contract.contractURI(...)
  // - contract.tokensOfOwner(...)
  // - contract.returnNameID(...)
  // - contract.getAddressByName(...)
  // - contract.getAddressById(...)
  // - contract.tokenURI(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleTransfer(event: Transfer): void {}

export function handleApproval1(event: Approval1): void {}

export function handleApprovalForAll1(event: ApprovalForAll1): void {}

export function handleTransfer1(event: Transfer1): void {}

export function handleApproval2(event: Approval2): void {}

export function handleApprovalForAll2(event: ApprovalForAll2): void {}

export function handleTransfer2(event: Transfer2): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleApproval3(event: Approval3): void {}

export function handleApprovalForAll3(event: ApprovalForAll3): void {}

export function handleOwnershipTransferred1(
  event: OwnershipTransferred1
): void {}

export function handleTransfer3(event: Transfer3): void {}
