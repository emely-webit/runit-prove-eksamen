import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Newsletter = () => {
    return (
      <article className="bg-dark text-white text-center pt-3 pb-4">
        <FontAwesomeIcon className="display-2" icon={faEnvelope} />
        <form>
          <label htmlFor="nyhed" className="h4 font-weight-bold d-block">
            Nyhedsbrev
          </label>
          <input
            className="bg-transparent text-white border-white w-50 mx-auto d-block"
            type="email"
            name="nyhed"
            id="nyhed"
            placeholder="Din Email"
          />
          <input className="bg-transparent text-white border-white border-top-0 w-50 mx-auto d-block" type="submit" value="Tilmeld" />
        </form>
      </article>
    );
}

export default Newsletter
