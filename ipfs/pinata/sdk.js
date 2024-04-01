import fs from 'fs';
import pinataSDK from '@pinata/sdk';
import * as assert from "assert";

export default class SDK {
    constructor({id, secret, jwt}) {
        const opts = jwt?{
            pinataJWTKey: jwt
        }:{pinataApiKey: id, pinataSecretApiKey: secret}
        this.client = new pinataSDK(opts);
    }

    async connect() {
        const result = await this.client.testAuthentication()
        assert.ok(result.authenticated)
    }

    async upload(filePath) {
        const stream = fs.createReadStream(filePath);
        const res = await pinata.pinFileToIPFS(stream)
        console.debug(res)
        return res
    }
    async diskUsage(){
        const {pin_count,pin_size_total,  pin_size_with_replications_total} = await this.client.userPinnedDataTotal()
        return {count: pin_count, size: pin_size_total, replication: pin_size_with_replications_total}
    }
}



