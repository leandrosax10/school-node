import { Request, Response, Router } from "express";
import productsService from "../services/products.service";

const router = Router();

//Lista dos produtos
router.get("/", (req: Request, res: Response) => {
  const products = productsService.getAll();
  res.send(products);
});

//Adciona um item no array
router.post("/", (req: Request, res: Response) => {
  productsService.create(req.body);
  res.status(201).send({ message: "Produto registrado com sucesso!" });
});

//Deleta um item por id
router.delete("/remove/:id", (req: Request, res: Response) => {
  try {
    productsService.remove(req.params.id);
    res.status(200).send({ message: "Produto removido com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

//Altera um produto
router.put("/:id", (req: Request, res: Response) => {
  try {
    productsService.update(req.params.id, req.body);
    res.status(200).send({ message: "Produto alterado com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

export default router;
