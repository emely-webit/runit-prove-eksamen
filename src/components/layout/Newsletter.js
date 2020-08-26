import React, { useState } from "react";
import Envelope from "../../image/newsletter.png";
// import {useHistory} from 'react-router-dom';

const Newsletter = () => {
  const [nyhedsBrev, setNyhedsBrev] = useState({});
  // const history = useHistory();

  const tilmeldNyhed = (e) => {
    e.preventDefault();

    let url = "http://localhost:5021/nyhedsbrevtilmelding/";
    fetch(url,{
      credentials: "include",
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nyhedsBrev),
    })
    .then(data => {
      console.log(data);
      alert('Du er nu tilmeldt nyhedsbrevet');
      // takForTilmelding();
      window.location.reload(true);

    })
    .catch(err => {
      alert('Noget gik galt da du prøvede at tilmelde dig ' + err);
    })

  };

  // function takForTilmelding(){
  //   return (
  //     <div>
  //       <p className="h3 font-weight-bold text-white">Tak for din tilmelding til nyhedsbrevet</p>
  //     </div>
  //   )
  // }

  return (
    <article className="bg-dark text-white text-center pt-3 pb-4">
      <img
        className="img-fluid"
        src={Envelope}
        alt="brev hvor der står nyhedsbrev på"
      />
      <form className="pt-2" onSubmit={tilmeldNyhed}>
        <input
          className="bg-transparent text-white border-white w-50 mx-auto d-block"
          type="email"
          name="nyhed"
          id="nyhed"
          onChange={(e) => setNyhedsBrev({...nyhedsBrev, email: e.target.value})}
          placeholder="Din Email"
        />
        <input
          className="bg-transparent text-white border-white border-top-0 w-50 mx-auto d-block"
          type="submit"
          value="Tilmeld"
        />
      </form>
    </article>
  );
};

export default Newsletter;
