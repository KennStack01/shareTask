import React from 'react'
import { Link } from 'gatsby'

const styles = {
    h1: 'text-2xl font-bold',
    button: 'm-3 bg-blue-600 hover:bg-blue-700 p-2 text-white rounded outline-none font-medium',
    welcome: 'mb-2',
    logo: 'text-md font-bold'
}

const Starter = () => {
    return (
        <div className="mx-5 mt-20 mb-5">
            <h1 className={styles.h1}> Organize, Manage and Share with Others 😍</h1>
            <button className={styles.button}> <Link to="/">Get Started!</Link></button>
        </div>
    )
}

export default Starter
