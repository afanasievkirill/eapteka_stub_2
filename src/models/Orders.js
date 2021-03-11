const mongoose = require('mongoose')

OrdersSchema = new mongoose.Schema({
    orders: [
        {
            order_id: {
                type: String
            },
            billdate: {
                type: Date
            },
            number: {
                type: String
            },
            BRANCH_ID: {
                type: Date
            },
            date: {
                type: Date
            },
            datepay: {
                type: Date
            },
            billnumber: {
                type: String
            },
            deliverypoint: {
                type: Date
            },
            id: {
                type: String
            },
            packages: {
                shortnumber: {
                    type: String
                },
                number: {
                    type: String
                }
            },
            pack_quantity: {
                type: Number
            },
            positions: {
                type: [
                    {
                        price_manufacturer: {
                            type: Number
                        },
                        price: {
                            type: Number
                        },
                        quantity: {
                            type: Number
                        },
                        product_code: {
                            type: Date
                        },
                        manufacturer_name: {
                            type: String
                        },
                        NDS: {
                            type: Number
                        },
                        product_name: {
                            type: String
                        },
                        country: {
                            type: String
                        },
                        datemade: {
                            type: Date
                        },
                        shelf_life: {
                            type: Date
                        },
                        GTD_number: {
                            type: String
                        },
                        purchase_price: {
                            type: Number
                        },
                        price_reg: {
                            type: Number
                        },
                        series: {
                            type: String
                        },
                        sum_10: {
                            type: Number
                        },
                        datecertificate: {
                            type: Date
                        },
                        certificate: {
                            type: String
                        },
                        certificate_org: {
                            type: String
                        },
                        sum_0: {
                            type: Number
                        },
                        UID: {
                            type: String
                        },
                        sum_20: {
                            type: Number
                        },
                        sum_nds10: {
                            type: Number
                        },
                        sum_nds20: {
                            type: Number
                        },
                        sum: {
                            type: Number
                        },
                        date_time: {
                            type: Date
                        },
                        vital: {
                            type: Number
                        },
                        recipe: {
                            type: Number
                        },
                        iphone: {
                            type: String
                        },
                        MDLP: {
                            type: Number
                        },
                        product_id: {
                            type: String
                        },
                        barcode: {
                            type: String
                        },
                        GTIN: {
                            type: String
                        },
                        price_without: {
                            type: Number
                        },
                        SGTIN: {
                            type: Array
                        },
                        numberz_sms: {
                            type: String
                        }
                    }
                ]
            }
        }
    ]
})

module.exports = Orders =mongoose.model('orders', OrdersSchema)