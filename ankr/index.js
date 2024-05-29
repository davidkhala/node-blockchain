import lib, {AnkrProvider} from '@ankr.com/ankr.js';
import assert from "node:assert";

export class Ankr {
    /**
     *
     * @param {string} endpoint Get endpoint from https://www.ankr.com/rpc/advanced-api
     * @param {string|lib.Blockchain} [blockchain]
     */
    constructor(endpoint, blockchain) {
        this.provider = new AnkrProvider(endpoint);
        this.blockchain = blockchain;
    }

    async getBlocks(from, to) {
        const {blockchain} = this;
        await this.provider.getBlocks({
            blockchain, fromBlock: from, toBlock: to,
        })
    }

    async logs(from, to, topics, address) {
        const {logs, syncStatus} = await this.provider.getLogs({
            blockchain: this.blockchain,
            fromBlock: from,
            toBlock: to,
            topics,
            address,
            decodeLogs: false,
        });
        assert.ok(syncStatus === null);
        return logs
    };

    async stats() {
        const {stats, syncStatus} = await this.provider.getBlockchainStats({});
        assert.ok(syncStatus === null);
        return stats
    }
}
