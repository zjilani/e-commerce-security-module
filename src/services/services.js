const loginVerification = async (fastify,loginRequest) =>{

    let customer = null
    if(loginRequest.mobileNo){
        customer = await fastify.axios.post('https://jilani-e-commerce-customer.herokuapp.com/customerDetail',{mobileNo:loginRequest.mobileNo})
    }
    else if(loginRequest.email){
        customer = await fastify.axios.post('https://jilani-e-commerce-customer.herokuapp.com/customerDetail',{email:loginRequest.email})
    }

    if(!customer){
        return {response:"Not Found"}
    }
    
    if(customer.data.data[0].password === loginRequest.password){
        if(customer.data.data[0].otpVerified === true){
            const token = fastify.jwt.sign(customer.data.data[0].customerId)
            let update = await fastify.axios.post('https://jilani-e-commerce-customer.herokuapp.com/updateToken',{customerId:customer.data.data[0].customerId , token:token})
            return customer.data.data[0]
        }
        else{
            return {response: "OTP NOT VERIFIED"}
        }

    }
    else{
        return {response:"Not Found"}

    }
    
}
const otpVerification = async(fastify,otpRequest)=>{
    try {
        const customer = await fastify.axios.get('https://jilani-e-commerce-customer.herokuapp.com/getCustomer?'+'customerId='+otpRequest.customerId)
        const otpVerified = true
        
        if(customer.data.data.otp === otpRequest.otp){
        
            const updateCustomer= await fastify.axios.post("https://jilani-e-commerce-customer.herokuapp.com/updateCustomer?customerId="+otpRequest.customerId,{otpVerified:otpVerified})
            const token = fastify.jwt.sign(otpRequest.customerId)
            let update = await fastify.axios.post('https://jilani-e-commerce-customer.herokuapp.com/updateToken',{customerId:otpRequest.customerId, token:token})
        
        }
        return { response:"Done verification"}
        
    } catch (error) {
        return {
            response : "Not Found"
        }
    }
    
}
const updateCustomer  = async (fastify,updateCustomerBody,updateCustomerQuery) =>{
    try {
        const customer = await fastify.axios.post("https://jilani-e-commerce-customer.herokuapp.com/updateCustomer?customerId="+updateCustomerQuery.customerId,{...updateCustomerBody})
        return customer.data.data
        
    } catch (error) {
        return {response:"Not Found"}
    }
    
}

module.exports ={
    loginVerification,
    otpVerification,
    updateCustomer
}