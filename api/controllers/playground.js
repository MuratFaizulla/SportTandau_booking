import Reservation from "../models/Playground.js";

export const createReservation = async (req, res) => {
  try {
    const newReservationData = req.body;
    // Проверяем, существуют ли уже бронирования на это время
    const existingReservation = await Reservation.findOne({
      fieldId: newReservationData.fieldId,
      date: newReservationData.date,
      $or: [
        {
          startTime: { $lt: newReservationData.endTime },
          endTime: { $gt: newReservationData.startTime }
        }
      ]
    });
    // Если бронирование уже существует, возвращаем ошибку
    if (existingReservation) {
      return res.status(400).send("Бұл уақыт аралығы әлдеқашан брондалған.");
    }

    // Создаем новое бронирование
    const reservation = new Reservation(newReservationData);
    await reservation.save();
    res.status(201).send(reservation);
  } catch (error) {
    res.status(400).send(error);
  }
};


export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({});
    res.send(reservations);
  } catch (error) {
    res.status(500).send(error);4
  }
};
// Получение списка бронирований

export const getAllAdminReservations = async (req, res) => {
  try {
    // Получаем список бронирований, заполняя связанные объекты
    const reservations = await Reservation.find({})
      .populate({
        path: 'fieldId',
        select: 'name price',
      })
      .populate({
        path: 'userId',
        select: 'username email',
      });
    // Преобразуем каждое бронирование в формат, соответствующий структуре таблицы
    const formattedReservations = reservations.map(reservation => ({
      _id: reservation._id,
      username: reservation.userId.username,
      name: reservation.fieldId.name,
      price: reservation.fieldId.price,
      date: reservation.date,
      startTime: reservation.startTime,
      endTime: reservation.endTime,
    }));
    res.send(formattedReservations);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findById(id);

    if (!reservation) {
      return res.status(404).json({ error: 'Брондау табылмады' });
    }

    res.status(200).json(reservation);
  } catch (error) {
    console.error('Идентификатор бойынша брондау қатесі:', error);
    res.status(500).json({ error: 'Failed to get reservation' });
  }
};


// Обновление информации о бронировании по ID
export const updateReservationById = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['userId', 'venueId', 'date', 'startTime', 'endTime'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Жарамсыз жаңартулар!' });
  }

  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!reservation) {
      return res.status(404).send();
    }
    res.send(reservation);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Удаление бронирования по ID
export const deleteReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) {
      return res.status(404).send();
    }
    res.send(reservation);
  } catch (error) {
    res.status(500).send(error);
  }
};



export const getReservationsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const reservations = await Reservation.find({ userId }).populate('userId')
    .populate({
      path: 'fieldId',
      select: 'name price address',

    });

    if (!reservations || reservations.length === 0) {
      return res.status(404).json({ error: 'Бұл пайдаланушының брондары табылмады' });
    }

    res.status(200).json(reservations);
  } catch (error) {
    console.error('Error getting reservations by user ID:', error);
    res.status(500).json({ error: 'Failed to get reservations' });
  }
};



export const getReservationsByFieldId = async (req, res) => {
  try {
    const { fieldId } = req.params;
    
    const reservations = await Reservation.find( {fieldId} ).populate('fieldId').populate('userId')
    if (!reservations.length) {
      return res.status(404).json({ error: 'Бұл Ойың алаңының брондары табылмады' });
    }

    res.status(200).json(reservations);
  } catch (error) {
    console.error('Error getting reservations by user ID:', error);
    res.status(500).json({ error: 'Failed to get reservations' });
  }
};
