import React, { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import "./reserve.css";

const DateAndTimeSelector = ({ fieldId }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [selectedEndTime, setSelectedEndTime] = useState("");
  const { user } = useContext(AuthContext);
  const [isBooked, setIsBooked] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [error, setError] = useState(null);
  
  const { data } = useFetch("/bookings/");

  useEffect(() => {
    if (data) {
      setBookings(data);
    }
  }, [data]);

  const isSlotBooked = (startTime, endTime) => {
    const bookingsOnSelectedDate = bookings.filter((booking) => {
      return (
        booking.date.split("T")[0] === selectedDate.toISOString().split("T")[0]
      );
    });
    return bookingsOnSelectedDate.some((booking) => {
      return (
        booking.startTime === startTime &&
        booking.endTime === endTime &&
        booking.fieldId === fieldId
      );
    });
  };

  const handleTimeSelect = (startTime, endTime, index) => {
    setSelectedStartTime(startTime);
    setSelectedEndTime(endTime);
    setSelectedSlot(index);
    setIsBooked(false); // Сбрасываем статус бронирования
    setError(null); // Сбрасываем ошибку
  };

  const handleBooking = () => {
    if (selectedStartTime !== "" && selectedEndTime !== "") {
      const bookingData = {
        userId: user._id,
        fieldId: fieldId,
        date: selectedDate.toISOString().split("T")[0],
        startTime: selectedStartTime,
        endTime: selectedEndTime,
      };
      fetch("/bookings/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Брондау жасалмады");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Брондау жасалды:", data);
          setIsBooked(true);
          setSelectedStartTime("");
          setSelectedEndTime("");
          setSelectedSlot(null);
          // Обновляем данные о бронированиях только после успешного бронирования
          fetch("/bookings/")
            .then((response) => response.json())
            .then((data) => {
              setBookings(data);
            })
            .catch((error) => {
              console.error("Брондауларды алу қатесі:", error);
            });
        })
        .catch((error) => {
          console.error("Брондау жасау қатесі:", error);
          setError("Брондау жасалмады. Қайталап көріңіз.");
        });
    } else {
      setError("Уақыт аралығын таңдаңыз");
    }
  };

  const isTimePassed = (startTime) => {
    const currentDate = new Date();
    const [hours, minutes] = startTime.split(":");
    const timeslotDate = new Date(selectedDate);
    timeslotDate.setHours(hours, minutes, 0, 0);
    return currentDate > timeslotDate;
  };

  const times = [
    { startTime: "07:00", endTime: "08:00" },
    { startTime: "08:00", endTime: "09:00" },
    { startTime: "09:00", endTime: "10:00" },
    { startTime: "10:00", endTime: "11:00" },
    { startTime: "11:00", endTime: "12:00" },
    { startTime: "12:00", endTime: "13:00" },
    { startTime: "13:00", endTime: "14:00" },
    { startTime: "14:00", endTime: "15:00" },
    { startTime: "15:00", endTime: "16:00" },
    { startTime: "16:00", endTime: "17:00" },
    { startTime: "17:00", endTime: "18:00" },
    { startTime: "18:00", endTime: "19:00" },
    { startTime: "19:00", endTime: "20:00" },
    { startTime: "20:00", endTime: "21:00" },
    { startTime: "21:00", endTime: "22:00" },
    { startTime: "22:00", endTime: "23:00" },
    { startTime: "23:00", endTime: "00:00" },
  ];

  return (
    <div className="data">
      <div className="date-time-selector">
        <div className="calendar">
          <h2>Күнді таңдаңыз:</h2>
          <DatePicker
            inline
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
            }}
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select date"
          />
        </div>
        {selectedDate && (
          <div>
            <h2>Уақытты таңдаңыз:</h2>
            <div className="timeslots">
              {times.map((time, index) => (
                <button
                  className={`time-slot ${selectedSlot === index ? "selected" : ""}`}
                  key={index}
                  onClick={() => handleTimeSelect(time.startTime, time.endTime, index)}
                  disabled={isSlotBooked(time.startTime, time.endTime) || isTimePassed(time.startTime)}
                >
                  {time.startTime} - {time.endTime}
                  {isSlotBooked(time.startTime, time.endTime) && <span>Брондалған</span>}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        {error && <p className="error-message">{error}</p>}
        <button className="button_booking" onClick={handleBooking} disabled={isBooked}>
          {isBooked ? "Брондалды" : "Брондау"}
        </button>
      </div>
    </div>
  );
};

export default DateAndTimeSelector;
