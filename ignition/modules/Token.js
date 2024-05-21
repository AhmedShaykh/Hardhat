const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("TokenMod", (val) => {

    const myContract = val.contract("Token");

    return { myContract };
});

module.exports = TokenModule;