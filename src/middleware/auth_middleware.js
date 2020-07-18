const fastifyPlugin = require('fastify-plugin');

module.exports= fastifyPlugin(async (fastify)=>{
    fastify.decorate('jwtauthentication', async( req,res)=>{
        try {
            // const token = req.headers.authorization
            // console.log(token)
            const a = await req.jwtVerify()
            console.log(a)
        } catch (e) {
            res.status(401).send({error: 'Please authenticate.'});
        }
    })
})