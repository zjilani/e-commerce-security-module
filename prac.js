const { default: fastify } = require("fastify")

// const jwt = require('fastify-jwt')

const bc = async(fastify)=>{
    const token = fastify.jwt.sign('Customer_4', {expiresIn: 864000})
    console.log(token)
}
bc()
