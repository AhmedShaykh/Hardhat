const hre = require("hardhat");

async function main() {

  const ERC20Token = await hre.ethers.getContractFactory("ERC20Token");

  const token = await ERC20Token.deploy("Contract Deploy With Hardhat On Seploia Testnet!");

  await token.deployed();

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });