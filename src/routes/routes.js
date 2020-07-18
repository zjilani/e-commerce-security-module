const controllers = require('../controllers/controller')
const validators = require('../validators/validators')
const fastify = require('fastify')

// Import Swagger documentation
const documentation = require('./documentation/documentServicesApis')

const routes = [
    {
        method: "POST",
        url: "/loginVerification",
        handler: controllers.loginVerification,
        schema: documentation.loginVerification,
        preValidation: validators.validateLoginVerification
    },
    {
        method: "POST",
        url: "/otpVerification",
        handler: controllers.otpVerification,
        schema: documentation.otpVerification,
        preValidation: validators.validateOtpVerification
    },
    {
        method: "POST",
        url: "/updateCustomer",
        handler: controllers.updateCustomer,
        schema: documentation.updateCustomer,
        preValidation: validators.validateUpdateCustomerRequest
    },
    
]


module.exports = routes