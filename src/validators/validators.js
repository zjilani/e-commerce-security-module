const HttpError = require('../models/errors/httpError')
const axios = require('axios')

exports.validateLoginVerification = function (req, res, done) {
    if (!req.body.password) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'password is missing'))
    }
    else if (!(req.body.email || req.body.mobileNo)) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'email or mobileNo is missing'))
    }
    else {
        done()
    }
}
exports.validateOtpVerification = function (req, res, done) {

    if (!req.body.customerId) {
        res.code(400)
        done(new HttpError('faliure', 20002, 'customerId is missing'))
    }
    else if (!req.body.otp) {
        res.code(400)
        done(new HttpError('faliure', 20002, 'otp is missing'))
    }
    else {
        done()
    }
}
exports.validateUpdateCustomerRequest = async function (req, res, done) {
    try {
        const customerId = await req.jwtVerify()
        const check = await axios.get('https://jilani-e-commerce-customer.herokuapp.com/getCustomer?customerId='+customerId)
        if(!check){
            res.code(400)
            done(new HttpError('faliure', 20001, 'Unathorised User !!!'))
        }else if(check.data.data.customerId != req.query.customerId){
            res.code(400)
            done(new HttpError('faliure', 20001, 'Unathorised User !!!'))
        }

    } catch (e) {
        res.status(401).send({error: 'Please authenticate.'});
    }
    if (!req.query.customerId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'customerId is missing'))
    }
    else {
        done()
    }
}