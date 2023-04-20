import React from "react";
import { EventForm } from "../components";
import { Await, useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {
  const { event } = useRouteLoaderData("event-detail");
  return (
    <Await resolve={event}>
      {(loadedEvent) => <EventForm event={loadedEvent} method={"PATCH"} />}
    </Await>
  );
};

export default EditEventPage;
