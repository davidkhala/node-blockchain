import solanaWeb3 from "@solana/web3.js";

describe('', function () {
    it('', async () => {
        const apikey = process.env.Alchemy_API_Key

        const rpc = `https://solana-mainnet.g.alchemy.com/v2/${apikey}`; // RPC URL for connecting with a Solana node
        const connection = new solanaWeb3.Connection(rpc, "confirmed"); // confirming the connection

        let slot = await connection.getSlot(); // getting the most recent slot number
        console.log("The latest slot number is", slot); // logging the most recent slot number
    })
})