"use strict";
exports.__esModule = true;
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
var CouponBook = function () {
    var connection = wallet_adapter_react_1.useConnection().connection;
    return (React.createElement("div", null, "CouponBook"));
};
exports["default"] = CouponBook;
