// import React, { useState, useEffect, useContext } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './reserve.css';
// import Error from '../Error';
// import { AuthContext } from '../../context/AuthContext';

// const Calendar = ({ setOpen, fieldId }) => {
//   const [selectedDate, setSelectedDate] = useState(new Date()); 
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
//   const [isBooked, setIsBooked] = useState(false);

//   const { user } = useContext(AuthContext);



  

//   useEffect(() => {
//     if (isBooked && selectedTimeSlot) {
//       // Формируем данные для отправки на сервер
//       const bookingData = {
//         userId: user._id,
//         fieldId: fieldId,
//         date: selectedTimeSlot.startTime.toISOString().split('T')[0],
//         startTime: selectedTimeSlot.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//         endTime: selectedTimeSlot.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
    

//       // selectedPlauground = data.playground.
//       // console.log(data[0]._id);

//       console.log(bookingData);


      
//       // fetch(`/playgrounds/${data[0]._id}

//       fetch('/bookings/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingData),
//       })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to create booking');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Обработка успешного ответа от сервера
//         console.log('Booking created:', data);
//         setIsBooked(true); // Устанавливаем состояние бронирования в true
//       })
//       .catch((error) => {
//         // Обработка ошибок
//         console.error('Error creating booking:', error);
//       });
      
     
//       }
//   }, );



//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//     setSelectedTimeSlot(null);
//   };

//   const handleTimeSlotSelect = (timeSlot) => {
//     setSelectedTimeSlot(timeSlot);
//     console.log('Selected time slot:', timeSlot);
//   };

//   const generateSlots = (startHour, endHour) => {
//     const timeSlots = [];
//     const currentDate = new Date();

//     for (let hour = startHour; hour < endHour; hour++) {
//       const startTimeSlot = new Date(selectedDate);
//       startTimeSlot.setHours(hour);
//       startTimeSlot.setMinutes(0);

//       const endTimeSlot = new Date(selectedDate);
//       endTimeSlot.setHours(hour + 1);
//       endTimeSlot.setMinutes(0);

//       if (startTimeSlot > currentDate) {
//         timeSlots.push({ startTime: startTimeSlot, endTime: endTimeSlot });
//       } else {
//         timeSlots.push({ startTime: startTimeSlot, endTime: endTimeSlot, disabled: true });
//       }
//     }

//     return timeSlots;
//   };

//   const handleBooking = () => {
//     setIsBooked(true); // Устанавливаем состояние бронирования в true
//     alert('Бронирование подтверждено!');

//   };

//   return (
//     <div className="calendar-container">
//       <div className="date-picker-container">
//         <h3>Выберите дату</h3>
//         <DatePicker
//           inline
//           selected={selectedDate}
//           onChange={handleDateSelect}
//           dateFormat="yyyy-MM-dd"
//           placeholderText="Select date"
//         />
//       </div>

//       {selectedDate && (
//         <div>
//           <h3 className="time_title">Выбрать время</h3>
//           <div className="time-slots">
//             <div className="time-group">
//               <h4>Утро</h4>
//               {generateSlots(7, 12, 'Morning').map((timeSlot, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleTimeSlotSelect(timeSlot)}
//                   className={`time-slot ${
//                     timeSlot.disabled ? 'disabled' : ''
//                   } ${
//                     selectedTimeSlot &&
//                     selectedTimeSlot.startTime.getTime() === timeSlot.startTime.getTime() &&
//                     selectedTimeSlot.endTime.getTime() === timeSlot.endTime.getTime()
//                       ? 'selected'
//                       : ''
//                   }`}
//                   disabled={timeSlot.disabled} // Disable the button if time slot is disabled
//                 >
//                   {`${timeSlot.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}-${
//                     timeSlot.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//                   }`}
//                 </button>
//               ))}
//             </div>

//             <div className="time-group">
//               <h4>День</h4>
//               {generateSlots(12, 17, 'Afternoon').map((timeSlot, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleTimeSlotSelect(timeSlot)}
//                   className={`time-slot ${
//                     timeSlot.disabled ? 'disabled' : ''
//                   } ${
//                     selectedTimeSlot &&
//                     selectedTimeSlot.startTime.getTime() === timeSlot.startTime.getTime() &&
//                     selectedTimeSlot.endTime.getTime() === timeSlot.endTime.getTime()
//                       ? 'selected'
//                       : ''
//                   }`}
//                   disabled={timeSlot.disabled} // Disable the button if time slot is disabled
//                 >
//                   {`${timeSlot.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}-${
//                     timeSlot.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//                   }`}
//                 </button>
//               ))}
//             </div>

//             <div className="time-group">
//               <h4>Вечер</h4>
//               {generateSlots(17, 24, 'Evening').map((timeSlot, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleTimeSlotSelect(timeSlot)}
//                   className={`time-slot ${
//                     timeSlot.disabled ? 'disabled' : ''
//                   } ${
//                     selectedTimeSlot &&
//                     selectedTimeSlot.startTime.getTime() === timeSlot.startTime.getTime() &&
//                     selectedTimeSlot.endTime.getTime() === timeSlot.endTime.getTime()
//                       ? 'selected'
//                       : ''
//                   }`}
//                   disabled={timeSlot.disabled} // Disable the button if time slot is disabled
//                 >
//                   {`${timeSlot.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}-${
//                     timeSlot.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//                   }`}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//       {!isBooked  && (
//         <button onClick={handleBooking} className="booking-button">
//           Забронировать
//         </button>
//       )}
//       {/* Сообщение об успешном бронировании */}
//       {isBooked && <p>Бронирование подтверждено!</p>}
//     </div>
//   );
// };

// export default Calendar;

