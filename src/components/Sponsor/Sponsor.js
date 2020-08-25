import React from 'react'
import GoldSpons from './GoldSpons'
import SilverSpons from './SilverSpons'
import NormalSpons from './NormalSpons'

const Sponsor = () => {
    return (
      <section className="ml-lg-3 mt-4 py-4 bg-white w-85 sponsor_section">
        <p className="bg-primary p-1 text-uppercase text-white font-weight-bold w-25 mb-2">
          Gold sponsore
        </p>
        <GoldSpons />
        <p className="bg-primary p-1 text-uppercase text-white font-weight-bold w-25">
          Sølv sponsore
        </p>
        <SilverSpons />
        <p className="bg-primary p-1 text-uppercase text-white font-weight-bold w-25">
          Almindelige partnere
        </p>
        <NormalSpons />
      </section>
    );
}

export default Sponsor
