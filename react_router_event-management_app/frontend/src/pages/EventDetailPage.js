import React, { Suspense } from "react";
import {
  Await,
  Link,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import { EventItem, EventsList } from "../components";
import { getToken } from "../utilities/auth";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p>Loading event....</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Link to=".." relative="path">
        Go back
      </Link>
      <Suspense fallback={<p>Loading events....</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch event" }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch event" },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

const loadEvent = async (id) => {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok)
    throw json(
      { message: "could not fetch details of selected event" },
      { status: 500 }
    );
  else {
    const resData = await response.json();
    return resData.event;
  }
};

export const eventItemDelete = async ({ request, params }) => {
  const token = getToken();

  const id = params.eventID;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
    headers: { Authorization: "Bearer " + token },
  });
  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  }
  return redirect("/events");
};

export const eventItemLoader = async ({ request, params }) => {
  const id = params.eventID;

  return defer({
    events: await loadEvents(),
    event: await loadEvent(id),
  });
};
