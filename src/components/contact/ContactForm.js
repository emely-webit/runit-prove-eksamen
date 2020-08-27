import React, {useState} from "react";

const ContactForm = () => {
  const [kontakt, setKontakt] = useState({})

  const kontaktBesked = (e) => {
    e.preventDefault();
    let url = "http://localhost:5021/kontakt/";
    fetch(url, {
      credentials: "include",
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(kontakt),
    })
    .then(data => {
      console.log(data);
      alert("Din besked er sendt til os");
      window.location.reload(true);
    })
    .catch(err => {
      alert('Der gik noget galt med din besked ' + err);
    })
  };

  return (
    <article className="col-lg-5 col-12">
      <h1 className="font-weight-bold">Kontakt os</h1>
      <p>Vi bestræber os for at give svar tilbage inden for 48 timer</p>
      <form onSubmit={kontaktBesked}>
        <div className="form-group mb-0 mt-2">
          <label htmlFor="dit-navn">Dit navn</label>
          <br />
          <input
            type="text"
            name="dit-navn"
            id="dit-navn"
            className="form-control w-50 rounded-0"
            onChange={(e) => setKontakt({ ...kontakt, navn: e.target.value })}
            required
          />
        </div>
        <div className="form-group mb-0 mt-2">
          <label htmlFor="din-mail">Din Email</label>
          <br />
          <input
            type="email"
            name="din-mail"
            id="din-mail"
            className="form-control w-50 rounded-0"
            onChange={(e) => setKontakt({ ...kontakt, emailadresse: e.target.value})}
            required
          />
        </div>
        <div className="form-group mb-0 mt-2">
          <label htmlFor="emne">Emne (fx. løbs navn eller lign)</label>
          <br />
          <input
            type="text"
            name="emne"
            id="emne"
            className="form-control w-50 rounded-0"
            onChange={(e) => setKontakt({...kontakt, emne: e.target.value})}
            required
          />
        </div>
        <div className="form-group mb-0 mt-2">
          <label htmlFor="besked">Besked</label>
          <br />
          <textarea
            name="emne"
            id="emne"
            className="form-control rounded-0"
            required
            rows="3"
            onChange={(e) => setKontakt({...kontakt, besked: e.target.value})}
          />
        </div>
        <input type="submit" value="Send besked" className="btn mt-1" />
      </form>
    </article>
  );
};

export default ContactForm;
