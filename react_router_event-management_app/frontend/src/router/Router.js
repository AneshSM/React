import { createBrowserRouter } from "react-router-dom";
import {
  EditEventPage,
  ErrorPage,
  EventDetailPage,
  EventsPage,
  HomePage,
  NewEventPage,
  NewsletterPage,
  AuthenticationPage,
} from "../pages";
import { EventLayout, RootLayout } from "../layouts";
import { eventLoader } from "../pages/EventsPage";
import { eventItemDelete, eventItemLoader } from "../pages/EventDetailPage";
import { manipulateEventAction } from "../components/EventForm";
import { newsletterAction } from "../pages/NewsletterPage";
import { authAction } from "../pages/AuthenticationPage";
import { getAuth, logoutAction, tokenLoader } from "../utilities/auth";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    children: [
      {
        index: true,
        path: "auth",
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventLoader,
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader: getAuth,
          },
          {
            path: ":eventID",
            id: "event-detail",
            loader: eventItemLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventItemDelete,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader: getAuth,
              },
            ],
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);
