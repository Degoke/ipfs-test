const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env"});

async function main() {
  const metadataURL = "ipfs://QmSGPfqRXyC38mp2NnfTJAviP4G7Aa8gx9EMWgd3C9iEe5/";

  const lw3PunksContract = await ethers.getContractFactory("LW3Punks");

  const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);

  await deployedLW3PunksContract.deployed();

  console.log("LW3Pnks Contract Address:", deployedLW3PunksContract.address);
}

main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
});