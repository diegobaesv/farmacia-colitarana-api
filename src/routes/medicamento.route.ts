import { Router } from 'express';
import { actualizarMedicamento, darBajaMedicamento, insertarMedicamento, listarMedicamentos, obtenerMedicamento } from '../controllers/medicamento.controller';

const router: Router = Router();

router.post('/',insertarMedicamento);
router.get('/',listarMedicamentos);
router.get('/:idProveedor',obtenerMedicamento);
router.put('/:idProveedor',actualizarMedicamento);
router.delete('/:idProveedor',darBajaMedicamento);

export default router;