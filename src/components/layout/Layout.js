import React from 'react'
import Header from './header/Header'
import NextRun from './NextRun'
import Newsletter from './Newsletter'
import RandomSpons from './RandomSpons'

const Layout = (props) => {
    return (
        <div className="row m-0">
            <section className="col-9 p-0">
                <Header/>
                <main>
                    {props.children}
                </main>
            </section>
            <section className="col-3 p-0">
                <NextRun/>
                <Newsletter/>
                <RandomSpons/>
            </section>
            
        </div>
    )
}

export default Layout
