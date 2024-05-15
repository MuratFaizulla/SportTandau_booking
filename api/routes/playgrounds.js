import express from "express";
const router = express.Router();
import {
  createReservation,
  getAllReservations,
  getReservationById,
  updateReservationById,
  deleteReservationById,
  getReservationsByUserId,
  getReservationsByFieldId,
  
} from '../controllers/playground.js';

// Создание бронирования
router.post('/', createReservation);

// Получение списка бронирований
router.get('/', getAllReservations);

// Получение информации о бронировании по ID
router.get('/v1/:id', getReservationById);

// Обновление информации о бронировании по ID
router.patch('/:id', updateReservationById);

// Удаление бронирования по ID
router.delete('/:id', deleteReservationById);

router.get('/user/:userId', getReservationsByUserId);
// localhost:8800/api/bookings/user/660453e67b34aa74b5b1873b


router.get('/fieldId/:fieldId', getReservationsByFieldId);

export default router;