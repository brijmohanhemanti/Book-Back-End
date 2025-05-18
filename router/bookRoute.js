const { getbook, addbook, singlegetbook, deletebook, editBooks } = require("../controller/bookControl")

const router = require("express").Router()
router.route("/").get(getbook).post(addbook)
router.route("/:id").get(singlegetbook).delete(deletebook).patch(editBooks)


module.exports=router