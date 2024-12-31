const hre = require("hardhat");

async function main() {
    // Compile the contract
    await hre.run("compile");

    // Deploy the contract
    const SimpleStorage = await hre.ethers.getContractFactory("SampContract");
    const simpleStorage = await SimpleStorage.deploy();

    await simpleStorage.deployed();

    console.log("SimpleStorage deployed to:", simpleStorage.address);
}

// Handle errors and call main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
