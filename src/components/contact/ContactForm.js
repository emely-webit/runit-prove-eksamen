import React from "react";

const ContactForm = () => {
  return (
    <article className="col-5">
      <h1 className="font-weight-bold">Kontakt os</h1>
      <p>Vi bestræber os for at give svar tilbage inden for 48 timer</p>
      <form>
        <div className="form-group mb-0 mt-2">
          <label htmlFor="dit-navn">Dit navn</label>
          <br />
          <input
            type="text"
            name="dit-navn"
            id="dit-navn"
            className="form-control w-50 rounded-0"
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
          />
        </div>
        <input type="submit" value="Send besked" className="btn mt-1" />
      </form>
    </article>
  );
};

export default ContactForm;
