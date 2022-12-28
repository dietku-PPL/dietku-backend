const express = require('express');
const router = express.Router()

const userRouter = require('./user.router');
const authRouter = require("./auth.router")
const foodRouter = require("./dataMakanan.router")
const dietRouter = require("./dataDiet.router")

router.use("/users", userRouter)
router.use("/auth", authRouter)
router.use("/foods", foodRouter)
router.use("/diets", dietRouter)

module.exports = router
