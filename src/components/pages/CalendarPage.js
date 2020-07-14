import React, { useState } from "react";

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return <div class="calendar-container"></div>;
}

export default CalendarPage;
