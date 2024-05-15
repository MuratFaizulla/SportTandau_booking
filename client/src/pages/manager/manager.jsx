import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import './manager.css'; // Импортируем CSS файл для стилей компонента

const Manager = () => {
  const [reservations, setReservations] = useState([]);
  const [filteredReservations, setFilteredReservations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); 
  };

  const handleDeleteReservation = async (reservationId) => {
    try {
      await axios.delete(`/bookings/${reservationId}`);
      setReservations(reservations.filter(reservation => reservation._id !== reservationId));
      setFilteredReservations(filteredReservations.filter(reservation => reservation._id !== reservationId));
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/bookings/fieldId/${user.manager.fieldId}`);
        setReservations(response.data);
        setFilteredReservations(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.error);
        setLoading(false);
      }
    };

    fetchReservations();
  }, [user.manager.fieldId]);

  useEffect(() => {
    const filtered = reservations.filter(reservation => 
      reservation.userId.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReservations(filtered);
  }, [searchTerm, reservations]);

  // Функция для группировки бронирований по дате
  const groupReservationsByDate = (reservations) => {
    return reservations.reduce((grouped, reservation) => {
      const date = new Date(reservation.date).toLocaleDateString();
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(reservation);
      return grouped;
    }, {});
  };

  const groupedReservations = groupReservationsByDate(filteredReservations);

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">Ошибка: {error}</div>;

  return (
    <div className="manager-container">
            <button onClick={handleLogout} className="logout-button">Выйти из системы</button>

      <h2 className='field_title'>{user.username} алаңына арналған брондар</h2>
      <input
        type="text"
        placeholder="Поиск по пользователю"
        value={searchTerm}
        onChange={handleSearch}
      />
      {Object.keys(groupedReservations).map(date => (
        <div key={date} className="date-block">
          <h3>{date}</h3>
          <table className="reservation-table">
            <thead>
              <tr>
                <th>Пользователь</th>
                <th>Email</th>
                <th>Дата</th>
                <th>Время</th>
                <th>Телефон</th>
                <th>Отменить</th>
              </tr>
            </thead>
            <tbody>
            {groupedReservations[date].sort((a, b) => {
            return a.startTime.localeCompare(b.startTime);
            }).map(reservation => (
            <tr key={reservation._id}>
            <td>{reservation.userId.username}</td>
            <td>{reservation.userId.email}</td>
            <td>{new Date(reservation.date).toLocaleDateString()}</td>
            <td>{reservation.startTime} - {reservation.endTime}</td>
            <td>{} </td>
            <td><button onClick={() => handleDeleteReservation(reservation._id)} className="cancel-button">Отменить</button></td>
             </tr>
              ))}

            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Manager;
