import React from 'react'
import "./error.css"
import { ERROR_PAGE_URL } from '../Config'
function Error() {
  return (
    <div>
      <img id="resturant_body" className="error_img" src={ERROR_PAGE_URL} />
      <h1 id="resturant_body">Uh-Oh!</h1>
      <p id="resturant_body">
        Sorry! This should not have happened. Please retry.
      </p>
    </div>
  );
}

export default Error