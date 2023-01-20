import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./calendar.css";
import events from "./events";

export default class Calendar extends React.Component {
  render() {
    const filteredEvents = events.map((event) => {
      return {
        title: event.title,
        date: event.date,
      };
    });
    return (
      <div id="main">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={filteredEvents}
        />
      </div>
    );
  }
}
