import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import DefaultPage from "../components/DefaultPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Resources = () => {
    const data = useStaticQuery(graphql`
    query {
        markdownRemark(frontmatter: {title: { eq: "Resources" }}) {
        frontmatter {
            title
        }
        html
        }
    }
  `)

  const { frontmatter, html } = data.markdownRemark;
  const { title } = frontmatter;

  return (
    <div>
        <Header/>
        <DefaultPage title={title} content={html}/>
        <Footer/>
    </div>
  );
};

export default Resources;