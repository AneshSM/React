import { Await, defer, json, useLoaderData } from "react-router-dom";
import { EventsList } from "../components";
import { Suspense } from "react";

function EventsPage() {
  const data = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data.events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

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

export const eventLoader = () => {
  return defer({
    events: loadEvents(),
  });
};
// browser execution and supports default browser features
