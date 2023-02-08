import React from "react";
import { useRouteError } from "react-router-dom";
import '../assets/scss/pages/ErrorPage.scss';
export default function ErrorPage() {
  /** @type {import('../utils/Errors.js').RouterError} */
  // @ts-ignore
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="bg-dark text-light full-page">
      <h1 className="display-3">Oops! {error.status}</h1>
      <p className="lead">Sorry, an unexpected error has occurred.</p>
      <p className="small">
        <i>
          {error.statusText} | {error.data || error.message}</i>
      </p>
    </div>
  );
}