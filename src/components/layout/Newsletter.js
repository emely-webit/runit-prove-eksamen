import React from 'react'
import Envelope from '../../image/newsletter.png';


const Newsletter = () => {
    return (
      <article className="bg-dark text-white text-center pt-3 pb-4">
       <img className="img-fluid" src={Envelope} alt="brev hvor der står nyhedsbrev på" />
        <form className="pt-2">
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
