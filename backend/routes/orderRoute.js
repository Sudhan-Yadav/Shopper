import express from 'express'
import {updateStatus,userOders,verifyRazorpay,allOrders,placeOrder,placeOrderRazorpay,placeOrderStripe} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)


//Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//User Feature
orderRouter.post('/userorders',authUser,userOders)

//verify payment
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

export default orderRouter