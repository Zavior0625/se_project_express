const router = require("express").Router();

const usersRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");

const { createUser, login } = require("../controllers/users");
const { getItems } = require("../controllers/clothingItems");

const auth = require("../middlewares/auth");

router.post("/signup", createUser);
router.post("/signin", login);

router.get("/items", getItems);

router.use(auth);

router.use("/users", usersRouter);
router.use("/items", clothingItemsRouter);

module.exports = router;
