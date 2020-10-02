import React, {
  useEffect,
  useState
} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Home from "../components/home"
import SEO from "../components/seo"
import About from "../components/about"
import WhenAndWhere from "../components/when_and_where"
import Gallery from "../components/gallery"
import Modal from "../components/modal"
// import "../components/functions";

import "../components/index.scss";

const IndexPage = () => {
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    })
  }, [])
  
  return (
  <Layout>
    <SEO title="Home" />
    
    {/* <h1
      style={{ fontFamily: 'scriptina'}}>Arie weds Mickey</h1> */}
    <Home/>
    <About/>
    <WhenAndWhere/>
    <Gallery/>
  </Layout>
)
    }

export default IndexPage
