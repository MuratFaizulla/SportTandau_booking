import React, { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
// import { Toaster, toast } from 'sonner'
import "./reserve.css";

const DateAndTimeSelector = ({ fieldId }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [selectedEndTime, setSelectedEndTime] = useState("");
  const { user } = useContext(AuthContext);
  const [isBooked, setIsBooked] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  
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



  useEffect(() => {
    if (isBooked && selectedDate && selectedStartTime && selectedEndTime) {
      const bookingData = {
        userId: user._id,
        fieldId: fieldId,
        date: selectedDate.toISOString().split("T")[0],
        startTime: selectedStartTime,
        endTime: selectedEndTime,
      };
      console.log(bookingData);
      fetch("/bookings/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to create booking");
          }
          return response.json();
        })
        .then((data) => {
          
          console.log("Booking created:", data);
          setIsBooked(true); 
        })
        .catch((error) => {
          console.error("Error creating booking:", error);
        });
    }
  }, [
    isBooked,
    selectedDate,
    selectedStartTime,
    selectedEndTime,
    user._id,
    fieldId,
  ]);

  const handleTimeSelect = (startTime, endTime, index) => {
    setSelectedStartTime(startTime);
    setSelectedEndTime(endTime);
    setSelectedSlot(index); // Устанавливаем выбранный слот

    
  };

  const handleBooking = () => {
    if (selectedStartTime !== "" && selectedEndTime !== "") {
      const dateOnly = selectedDate.toISOString().split("T")[0];
      console.log(`Вы забронировали ${dateOnly}`);
      setIsBooked(true);
    } else {
      console.log("Пожалуйста, выберите время");
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

  return (<div className="data">
    <div className="date-time-selector">

      <div className="calendar">
        <h2>Выберите дату:</h2>
        <DatePicker
          inline
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            const formattedDate = date.toISOString().split("T")[0];
            console.log(formattedDate);
          }}
          minDate={new Date()}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select date"
        />
      </div>

      {selectedDate && (
        <div>
          <h2>Выберите время:</h2>
          <div className="timeslots">
            {times.map((time, index) => (
              <button
              className={`time-slot ${selectedSlot === index ? "selected" : ""}`}
              key={index}
              onClick={() => handleTimeSelect(time.startTime, time.endTime, index)}
              disabled={isSlotBooked(time.startTime, time.endTime) || isTimePassed(time.startTime)}
            >
              {time.startTime} - {time.endTime}
              {isSlotBooked(time.startTime, time.endTime) && <span>Забронировано</span>}
            </button>
            ))}
          </div>
        </div>
      )}
     </div>
      <div>
        <button className="button_booking" onClick={handleBooking}>Забронировать</button>
        
      </div>
      </div>
  );
};

export default DateAndTimeSelector;


  // const isSlotBooked = (startTime, endTime) => {
  //   return bookings.some((booking) => {
  //     const formattedDate = booking.date.split('T')[0];
  // console.log(formattedDate)
  // console.log(selectedDate.toISOString().split('T')[0])
  //     return (
  //       booking.date.split('T')[0] ===selectedDate.toISOString().split('T')[0]&&
  //       booking.startTime === startTime &&
  //       booking.endTime === endTime &&
  //       booking.userId === user._id &&
  //       booking.fieldId === fieldId
  //     );
  //   });
  // }; 