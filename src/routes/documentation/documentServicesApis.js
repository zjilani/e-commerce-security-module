        exports.loginVerification = {
            description: 'Login of a Customer in Customer Service',
            tags: ["Auth"],
            summary: 'Login Verfication',
            body: {
                "type": "object",
                "properties": {
                    "mobileNo": {
                        "type": "number"
                    },
                    "email":{
                        "type":"string",
                    },
                    "password":{
                        "type":"string",
                    }
                },
                "required": [
                    
                ]
            },
            response: {
                201: {
                    description: 'Successful response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string",
                            "enum": ['failure', 'success'],
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "object",
                            "properties": {
                                "customerId":{
                                    "type": "string",
                                },
                                "userName": {
                                    "type": "string"
                                },
                                "mobileNo": {
                                    "type": "number"
                                },
                                "email":{
                                    "type":"string",
                                },
                                "password": {
                                    "type": "string"
                                },
                                "markForDelete":{
                                    "type":"boolean",
                                },
                                "otpVerified": {
                                    "type": "boolean",
                                    "default":"false",
                                },
                                "otp": {
                                    "type":"string"
                                }
                            },
                            "required": [
                                "customerId",
                                "userName",
                                "mobileNo",
                                "email",
                                "password",
                                "markForDelete",
                                "otpVerified",
                                "otp"
                            ]
                        },
                    },
                            "required": [
                                    "status",
                                    "data"
                                    ]
                }, 400: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code"
                    ]
                },
                500: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code",
                        "errorCause"
                    ]
                }
            }
        }

            exports.otpVerification = {
                description: 'Input OTP for verification',
                tags: ["Auth"],
                summary: 'Otp Verification',
                query: {
                    "type": "object",
                    "properties": {
                        "customerId": {
                            "type": "string"
                        },
                        "otp": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "customerId",
                        "otp"
                    ]
                },
                response: {
                    201: {
                        description: 'Successful response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string",
                                "enum": ['failure', 'success'],
                            },
                            "message": {
                                "type": "string"
                            }
                            // "data": {
                            //     "type": "object",
                            //     "properties": {
                            //         "customerId":{
                            //             "type": "string",
                            //         },
                            //         "userName": {
                            //             "type": "string"
                            //         },
                            //         "mobileNo": {
                            //             "type": "number"
                            //         },
                            //         "email":{
                            //             "type":"string",
                            //         },
                            //         "password": {
                            //             "type": "string"
                            //         },
                            //         "markForDelete":{
                            //             "type":"boolean",
                            //         }
                            //     },
                            //     "required": [
                            //         "customerId",
                            //         "userName",
                            //         "mobileNo",
                            //         "email",
                            //         "password",
                            //         "markForDelete"
                            //     ]
                            // },
                        },
                                "required": [
                                        "status"
                                        // "data"
                                        ]
                    }, 400: {
                        "description": 'Error response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string"
                            },
                            "code": {
                                "type": "integer"
                            },
                            "errorCause": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "status",
                            "message",
                            "code"
                        ]
                    },
                    500: {
                        "description": 'Error response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string"
                            },
                            "code": {
                                "type": "integer"
                            },
                            "errorCause": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "status",
                            "message",
                            "code",
                            "errorCause"
                        ]
                    }
                }
                }
                exports.updateCustomer = {
                    description: 'Updating Customer Info in Customer Service',
                    tags: ["Customers"],
                    summary: 'Updating Customer Info',
                    query: {
                        "type": "object",
                        "properties": {
                            "customerId":{
                                "type": "string",
                            }
                        },
                            "required": [
                                "customerId"
                            ]
                    },
                    body: {
                        "type": "object",
                        "properties": {
                            "userName": {
                                "type": "string"
                            },
                            "mobileNo": {
                                "type": "number"
                            },
                            "email":{
                                "type":"string",
                            },
                            "password":{
                                "type":"string",
                            },
                            "markForDelete":{
                                "type":"boolean",
                                "default":"false",
                                
                            },
                            "otpVerified": {
                                "type": "boolean",
                                "default":"false",
                            },
                            "otp": {
                                "type":"string"
                            },
                            // "tokens":{
                            //     "type":"array",
                            //     "properties": {
                            //         "token":{
                            //             "type":"string"
                            //         }
                            //     }
                            // }
                        },
                        "required": [
                            
                        ]
                    },
                    response: {
                        201: {
                            description: 'Successful response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string",
                                    "enum": ['failure', 'success'],
                                },
                                "message": {
                                    "type": "string"
                                },
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "customerId":{
                                            "type": "string",
                                        },
                                        "userName": {
                                            "type": "string"
                                        },
                                        "mobileNo": {
                                            "type": "number"
                                        },
                                        "email":{
                                            "type":"string",
                                        },
                                        "password": {
                                            "type": "string"
                                        },
                                        "markForDelete":{
                                            "type":"boolean",
                                        },
                                        "otpVerified": {
                                            "type": "boolean",
                                            "default":"false",
                                        },
                                        "otp": {
                                            "type":"string"
                                        },
                                        "tokens":{
                                            "type":"array",
                                            "properties": {
                                                "token":{
                                                    "type":"string"
                                                }
                                            }
                                        }
                                    },
                                    "required": [
                                        "customerId",
                                        "userName",
                                        "mobileNo",
                                        "email",
                                        "password",
                                        "markForDelete",
                                        "otpVerified",
                                        "otp"
                                    ]
                                },
                            },
                                    "required": [
                                            "status",
                                            "data"
                                            ]
                        }, 400: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code"
                            ]
                        },
                        500: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code",
                                "errorCause"
                            ]
                        }
                    }
                }