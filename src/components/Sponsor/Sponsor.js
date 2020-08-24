import React from 'react'
import GoldSpons from './GoldSpons'
import SilverSpons from './SilverSpons'
import NormalSpons from './NormalSpons'

const Sponsor = () => {
    return (
        <div>
            Gold sponsore
            <GoldSpons/>
            sølv sponsore
            <SilverSpons/>
            Almindelige partnere
            <NormalSpons/>
        </div>
    )
}

export default Sponsor
