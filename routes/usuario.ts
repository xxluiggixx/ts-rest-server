import { Router } from "express";
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from "../controllers/usuario";


const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);

export default router;

