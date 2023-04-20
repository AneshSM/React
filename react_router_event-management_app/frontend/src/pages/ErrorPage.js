import React from "react";
import { MainNavigation, PageContent } from "../components";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  let title = "An error occured";
  let message = "Something went wrong";
  if (error.status === 404) message = "Could not find the page or resource";
  message = error.status === 500 ? error.data.message : error.statusText;

  return (
    <>
      <PageContent title={title}>
        <p>{` ERROR ${error.status}: ${message}`}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
