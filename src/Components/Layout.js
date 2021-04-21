import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const styles = {
    layoutContent: 'text-center flex flex-col h-screen ',
    children: 'flex-grow',
}

const Layout = ({ children }) => {
    return (
        <div className={styles.layoutContent}>
            <Header/>
            <div className={styles.children}>
                { children }
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
