import SDK from '../sdk.js'
describe('', function () {
    this.timeout(0)
    const sdk = new SDK({jwt: process.env.jwt} )
    it('auth', async ()=>{
        await sdk.connect()
        const result = await sdk.diskUsage()
        console.debug(result)
    })
})
