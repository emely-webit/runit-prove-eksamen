import React from 'react'
import Header from './header/Header'
import NextRun from './NextRun'
import Newsletter from './Newsletter'
import RandomSpons from './RandomSpons'

const Layout = () => {
    return (
        <div>
            <section>
                <Header/>
            </section>
            <section>
                <NextRun/>
                <Newsletter/>
                <RandomSpons/>
            </section>
            
        </div>
    )
}

export default Layout
