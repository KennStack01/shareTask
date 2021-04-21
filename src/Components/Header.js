import React from 'react'
import { Link } from 'gatsby'

const styles = {
    div: 'flex flex-row justify-between mt-5 mx-3 shadow-sm p-2',
    h1: 'text-xl font-bold',
    icon: 'text-xl',
    btnSignUp: 'ml-3 bg-blue-600 hover:bg-blue-700 px-2 text-white rounded outline-none font-normal',
    btnLogIn: 'border-b-2 hover:border-blue-600 outline-none',

}
const Header = () => {
    return (
        <div className={styles.div}>
            <h1 className={styles.h1}> <Link to="/" >#ShareTask💡</Link> </h1>
            <div className="text-md">
                <button className={styles.btnLogIn}>Log in</button>
                <button className={styles.btnSignUp}>Sign up</button>
            </div>
        </div>
    )
}

export default Header
