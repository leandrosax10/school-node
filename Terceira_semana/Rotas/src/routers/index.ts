import Router from "express";
import productsRouter from "./products.router";
import user from "./user.router";

const router = Router();

router.use('/products', productsRouter);
router.use('/users', user);

export default router;