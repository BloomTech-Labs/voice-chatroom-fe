import React, { useState } from "react";

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return <div className="calendar-container" data-test="calendar"></div>;
}

export default CalendarPage;
