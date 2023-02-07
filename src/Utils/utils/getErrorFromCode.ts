export const getErrorFromCode = (errorcode: string) => {
  const error = {
    O1: "Option creation is not allowed currently",
    O2: "The option's price is too low",
    O3: "The Fee Transfer didn't go through",
    O4: "Option has not expired yet",
    O5: "Option is not active",
    O6: "Current price is too low",
    O7: "Current price is too high",
    O8: "Pool Error: The pool is empty",
    O9: "only owner",
    O10: "ERC721: operator query for nonexistent token",
    O11: "Block number not permitted",
    O12: "msg.sender is not eligible to exercise the option",
    O13: "Option has expired",
    O14: "Wrong state",
    O15: "Options contract doesn't has enough TokenX",
    O16: "Option still active",
    O17: "Expiration price is too low",
    O18: "Expiration price is too high",
    O19: "Expiration period is not over yet",
    O20: "RoundID not found",
    O21: "Period too small",
    O22: "Strike should be equal to 0 for ATM options",
    O23: "Amount greater than option amount size per block",
    O24: "Difference between bet amount and total fee is too large",
    O25: "Period too large",
    O26: "Total fee should be greater than the premium",
    O27: "_assetCategoryBaseDiscount lesser than the lower bound",
    O28: "_assetCategoryBaseDiscount greater than the higher bound",
    O29: "Partial fill disabled",
    O30: "Creation isn't allowed in this time window",
    O31: "Utilization too high",
    O33: "Market is closed",
    O34: "Wrong slippage",
    O35: "Fee too low",
    N1: "Empty splitUnits",
    N2: "NFT: not owner nor approved",
    N3: "new token already exists",
    N4: "Empty optionIDs",
    N5: "NFT: not owner nor approved",
    N6: "self merge not allowed",
    N7: "slot mismatch",
    N8: "not same owner",
    N9: "source token owner mismatch",
    N10: "transfer to the zero address",
    N11: "target token owner mismatch",
    N12: "target token not exists",
    N13: "to non NFTReceiver implementer",
    N14: "slot already existed",
    C1: "ChainLinkPricer: roundId not first after expiry",
    C2: "ChainLinkPricer: invalid price",
    C3: "ChainLinkPricer: Invalid previousRoundId",
    C4: "ChainLinkPricer: previousRoundId not last before expiry",
  };
  return error[errorcode] || errorcode;
};