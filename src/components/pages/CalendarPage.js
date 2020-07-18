import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800, width: 1000 }}
      />
    </div>
  );
}

export default CalendarPage;
