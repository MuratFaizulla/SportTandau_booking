import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import './Mybookings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';

export default function Mybookings() {
    const [reservations, setReservations] = useState([]);
  const [sortByAsc, setSortByAsc] = useState(true); 
  const [message, setMessage] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        if (user) { // Проверяем, что user не null или undefined
          const response = await axios.get(`/bookings/user/${user._id}`);
          let sortedReservations = response.data;
          sortedReservations.sort((a, b) => {
            if (sortByAsc) {
              return new Date(a.date) - new Date(b.date) || parseInt(a.startTime) - parseInt(b.startTime);
            } else {
              return new Date(b.date) - new Date(a.date) || parseInt(b.startTime) - parseInt(a.startTime);
            }
          });
          setReservations(sortedReservations);
        }
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };
  
    fetchReservations();
  }, [user, sortByAsc]);
  

  const handleSortToggle = () => {
    setSortByAsc(!sortByAsc);
  };

  const handleDeleteReservation = async (reservationId) => {
    try {
      await axios.delete(`/bookings/${reservationId}`);
      const updatedReservations = reservations.filter(reservation => reservation._id !== reservationId);
      setReservations(updatedReservations);
      setMessage('Брондау сәтті жойылды');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } catch (error) {
      console.error('Error deleting reservation:', error);
      setMessage('Бронды жою кезіндегі қате орын алды');
    }
  };

  return (
    <div className="about-container">
      <h1 className="about-title">Менің брондарым</h1>
      <div className="sort-button">
        <button onClick={handleSortToggle}>
          {sortByAsc ? (
            <>
              Өсу бойынша сұрыптау&nbsp;
              <FontAwesomeIcon icon={faSortAmountDown} />
            </>
          ) : (
            <>
              Кему бойынша сұрыптау&nbsp;
              <FontAwesomeIcon icon={faSortAmountUp} />
            </>
          )}
        </button>
      </div>
      {reservations.length === 0 ? (
        <p className="empty-message">Әзірге брондар жоқ</p>
      ) : (
        <ul className="reservation-list">
          {reservations.map(reservation => (
            <li key={reservation._id} className="reservation-item">
              <p>Ойын алаңы атауы: {reservation.fieldId.name}</p>
              <p>Мекенжайы: {reservation.fieldId.address}</p>
              <p>Бағасы: {reservation.fieldId.price} тг</p>
              <p className="reservation-details">Күні: {new Date(reservation.date).toLocaleDateString()}</p>
              <p className="reservation-details">Уақыты: {reservation.startTime} - {reservation.endTime}</p>
              <button onClick={() => handleDeleteReservation(reservation._id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
      {message && <div className="message">{message}</div>}
    </div>
  );
};
