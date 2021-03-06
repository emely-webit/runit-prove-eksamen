import React from 'react'
import ContactForm from './ContactForm'
import Management from './Management'

const Contact = () => {
    return (
      <section className="ml-lg-3 mx-0 mt-4 py-4 bg-white w-85 row">
       
        <ContactForm />
        <Management />
      </section>
    );
}

export default Contact
