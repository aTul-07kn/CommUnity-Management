import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import SideNavbar from "../SideNavbar";
import TopNavbar from "../TopNavbar";
import Card from "../Card";
import "./index.css";

const formatDateTime = (dateTime) => {
  const date = new Date(dateTime);

  // Extract date components
  const formattedDate = date.toLocaleDateString(); // e.g., "9/3/2024"

  // Extract time components
  const formattedTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }); // e.g., "10:00 AM"

  return { date: formattedDate, time: formattedTime };
};

const getRandomImage = () => {
  const randomId = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
  return `https://picsum.photos/200?random=${randomId}`; // Random image URL
};

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("Upcoming");
  const filters = ["Upcoming", "Earlier"];
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Meeting with Bob",
      details: "Discuss project requirements and timelines.",
      description:
        "A meeting to discuss the upcoming project details with Bob, including requirements, deadlines, and key milestones.",
      date: "2024-09-03T10:00:00",
      date1: formatDateTime("2024-09-03T10:00:00").date,
      time: formatDateTime("2024-09-03T10:00:00").time,
      image: getRandomImage(),
    },
    {
      id: 2,
      title: "Team Meeting",
      details: "Weekly team sync-up.",
      description:
        "A weekly sync-up with the team to review progress, address issues, and plan for the upcoming week.",
      date: "2024-09-03T11:00:00",
      date1: formatDateTime("2024-09-03T11:00:00").date,
      time: formatDateTime("2024-09-03T11:00:00").time,
      image: getRandomImage(),
    },
    {
      id: 3,
      title: "Client Presentation",
      details: "Presentation for the new client proposal.",
      description:
        "A presentation to showcase the new client proposal, including key features, benefits, and pricing.",
      date: "2024-09-04T14:00:00",
      date1: formatDateTime("2024-09-04T14:00:00").date,
      time: formatDateTime("2024-09-04T14:00:00").time,
      image: getRandomImage(),
    },
    {
      id: 4,
      title: "Code Review",
      details: "Review the codebase with the team.",
      description:
        "A code review session to go through the codebase, identify potential issues, and ensure code quality and consistency.",
      date: "2024-09-05T09:00:00",
      date1: formatDateTime("2024-09-05T09:00:00").date,
      time: formatDateTime("2024-09-05T09:00:00").time,
      image: getRandomImage(),
    },
    {
      id: 5,
      title: "Project Deadline",
      details: "Final submission of the project.",
      description:
        "The deadline for the project submission. Ensure all deliverables are completed and submitted on time.",
      date: "2024-09-07",
      date1: formatDateTime("2024-09-07").date,
      time: "", // No specific time
      image: getRandomImage(),
    },
    {
      id: 6,
      title: "Team Outing",
      details: "A fun outing with the team.",
      description:
        "A team outing to foster team bonding and relaxation outside of the work environment.",
      date: "2024-09-10T18:00:00",
      date1: formatDateTime("2024-09-10T18:00:00").date,
      time: formatDateTime("2024-09-10T18:00:00").time,
      image: getRandomImage(),
    },
    {
      id: 7,
      title: "Conference",
      details: "Attend the annual tech conference.",
      description:
        "An annual tech conference where industry leaders present the latest trends, technologies, and innovations.",
      date: "2024-09-15",
      date1: formatDateTime("2024-09-15").date,
      time: "", // No specific time
      end: "2024-09-17",
      image: getRandomImage(),
    },
    {
      id: 8,
      title: "Birthday Party",
      details: "Celebrate Jane's birthday.",
      description:
        "A party to celebrate Jane's birthday with friends, family, and colleagues.",
      date: "2024-09-20T19:00:00",
      date1: formatDateTime("2024-09-20T19:00:00").date,
      time: formatDateTime("2024-09-20T19:00:00").time,
      image: getRandomImage(),
    },
  ]);

  const calendarComponentRef = useRef(null);

  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  const handleSelectedDates = (info) => {
    const title = prompt("What's the name of the title?");
    if (title != null) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  };
  const filterEvents = () => {
    const today = new Date();
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      if (activeFilter === "Upcoming") {
        return eventDate >= today;
      } else if (activeFilter === "Earlier") {
        return eventDate < today;
      }
      return true;
    });
  };

  return (
    <div className="apartment-container">
      <SideNavbar />
      <div className="apartment-right-sec">
        <TopNavbar heading="Events" full={false} />
        <div className="apartment-right-main-sec">
          <div className="event-sec">
            <FullCalendar
              schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
              ref={calendarComponentRef}
              initialView="dayGridMonth"
              dateClick={handleDateClick}
              displayEventTime={true}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              selectable={true}
              plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
              events={events}
              select={handleSelectedDates}
              eventLimit={1} // Adjust this as needed
              dayMaxEvents={true} // Enable "more" link when too many events
            />
            <div className="event-main-sec">
              <div className="event-filter-container">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    className={`c-block-button ${
                      activeFilter === filter ? "active" : ""
                    }`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className="notice-list">
                {filterEvents().map((event) => (
                  <Card key={event.id} notice={event} type="notice" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
