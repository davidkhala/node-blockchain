import {Ankr} from "../index.js";

describe('', function () {
    this.timeout(0)
    const endpoint = 'https://rpc.ankr.com/multichain/6baba288f54665a3a9c18addc2ef2db7608cc2b1d46e3f1f7f8378ffb1c879e2'
    const ankr = new Ankr(endpoint)
    it('stats', async () => {
        const status = await ankr.stats()
        console.debug(status)
    })
    it('logs', async () => {
        const ankr = new Ankr(endpoint, 'eth')
        const address = '0x3589d05a1ec4af9f65b0e5554e645707775ee43c';
        const topics = [
            [],
            ['0x000000000000000000000000feb92d30bf01ff9a1901666c5573532bfa07eeec'],
        ]
        const r= await ankr.logs(1181739, 1181739, topics, address)
        console.debug(r)
    })
})