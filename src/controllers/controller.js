const services = require('../services/services')
const HttpError = require('../models/errors/httpError')

exports.loginVerification= async (req, res) => {
    try {
        let response = await services.loginVerification(req.fastify, req.body)
        if(response.response  === "Not Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Check Credentials")
        }
        if(response.response  === "OTP NOT VERIFIED"){
            res.code(400)
            throw new HttpError('failiure', 22005, "OTP Verification Needed")
        }

        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        // console.log(e)
        throw new HttpError('failiure', 2001, "Login Verification Failed", e.message)
    }
}
exports.otpVerification = async (req, res) => {
    try {
        let response = await services.otpVerification(req.fastify, req.query)
        if(response.response  === "Not Found"){
            // console.log(response)
            res.code(400)
            throw new HttpError('failure', 22005, "Check CustomerId")
        }
        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "OTP Verification failed", e.message)
    }
}
exports.updateCustomer = async (req, res) => {
    try {
        let response = await services.updateCustomer(req.fastify, req.body,req.query)
        if(response.response  === "Not Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Check CustomerId")
        }

        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Update Customer Failed", e.message)
    }
}
