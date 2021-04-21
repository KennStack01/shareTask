import React from "react"
import Layout from "../Components/Layout"
import Starter from "../Components/Starter"
import { Link } from 'gatsby'


const Home = () => {
  return (
    <Layout>
      <Starter/>
      {/* <p>Need a Developer ? <Link to="/contact">Contact me.</Link> </p> */}
    </Layout>
  )
}

export default Home
