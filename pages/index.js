import Navbar from '../components/Navbar'
import Hero from '../components/HomePage/Hero'
import About from '../components/HomePage/About'
import Services from '../components/HomePage/Services'
import Skills from '../components/HomePage/Skills'
import Certificates from '../components/HomePage/Certificates'
import Portfolio from '../components/HomePage/Portfolio/index'
import Blog from '../components/HomePage/Blog'
import Contact from '../components/HomePage/Contact'
import Menu from '../components/HomePage/Menu'
import ThemeMenu from '../components/ThemeMenu'
import Warning from '../components/HomePage/Warning/index'
import Head_JSX from '../components/HomePage/Head'
import { GraphQLClient, gql } from "graphql-request";
import CertificatesOverlay from '../components/HomePage/CertificatesOverlay'
import { useEffect, useState } from 'react'


const graphcms = new GraphQLClient("https://api-sa-east-1.hygraph.com/v2/cl9yvfs8y2bdh01uk61941hvs/master")

const QUERY = gql`
  {
    posts{
      id
      title
      datePublished
      slug
      content{
        html
      }
      author{
        name
        avatar{
          url
        }
      }
      coverPhoto{
        url
      }
    }
  }
`

export async function getStaticProps() {
    const { posts } = await graphcms.request(QUERY)

    return {
        props: {
            posts
        },
        revalidate: 10,
    }
}

export default function Home({posts}) {

  return (
    <div>
      <noscript>
        <iframe height="0" src="https://www.googletagmanager.com/ns.html?id=GTM-PGZLDCW"
          style={{display:"none", visibility:"hidden"}} width="0">
        </iframe>
      </noscript>
      <Head_JSX />
      <Warning />
      <Menu />
      <ThemeMenu />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Skills />
      <Certificates />
      <CertificatesOverlay />
      <Blog posts={posts} />
      <Contact />
    </div>
  )
}
