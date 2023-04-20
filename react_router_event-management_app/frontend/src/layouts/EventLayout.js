import React from "react";
import { EventsNavigation } from "../components";
import { Outlet } from "react-router-dom";

const EventLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventLayout;
