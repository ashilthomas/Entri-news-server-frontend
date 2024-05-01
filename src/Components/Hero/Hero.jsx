import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
import heroImg from "../../assets/images/image-web-3-desktop.jpg"

function Hero() {
  return (
    <div>
    <main className="hero">
      <section className="hero_description">
        <img
          src={heroImg}
          alt="Entri news hero image"
        />
        <div className="hero_text">
          <h1> The Bright Future of Web 3.0?</h1>
          <div className="call_out">
            <p>
              {" "}
              We dive into the next evolution of the web that claims to put
              the power of the platforms back into the hands of the people.
              But is it really fulfilling its promise?
            </p>
            <Link href="#" className="button">
              {" "}
              Read more
            </Link>
          </div>
        </div>
      </section>
      <aside className="new_articles">
        <h1 className="heading">New</h1>
        <article className="article">
          <Link href="#"> Hydrogen VS Electric Cars</Link>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </article>
        <article className="article">
          <Link href="#">The Downsides of AI Artistry</Link>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </article>
        <article className="article">
          <Link href="#">Is VC Funding Drying Up?</Link>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at
            what that means.{" "}
          </p>
        </article>
      </aside>
    </main>
  </div>
  
  )
}

export default Hero