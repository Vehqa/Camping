import './styles/App.scss';
import styled from 'styled-components';
import background from './assets/images/hero.png'
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Explore from './components/Explore';
import Discover from './components/Discover';
import Guide from './components/Guide';
import Hiking from './components/Hiking';
import Kayak from './components/Kayak';
import Trip from './components/Trip';
import Footer from './components/Footer';


const StyledHome = styled.div`
  section.hero {
    width: 100%;
    min-height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: var(--s-sizing);

    .hero__title {
      font-size: 46px;
      font-family: 'Krona', sans-serif;
      text-align: center;
    }

    .hero__p{
      width: 600px;
      display: flex;
      text-align:center;
      font-family: 'Playfair', sans-serif;
      margin-top: var(--l-sizing);
      font-size: 18px;
    }

    .hero__button{
      width : 150px;
      height : 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      background-color: white;
      color: black;
      font-family: 'Krona', sans-serif;
    }
  }

  @media (max-width: 768px) {
  .hero__p {
    max-width: 400px;
    font-size: 12px;
    margin-top: var(--m-sizing)
  }
}

  .llol {
    height: 100vh;
  }

`;

function Home() {
  AOS.init({
    duration: 1000,
    });
  return (
    <StyledHome >
      <Header />
      <section className='hero' >
        <h1 className='hero__title' data-aos="zoom-in">Votre aventure commence ici</h1>
        <p className='hero__p' data-aos="zoom-in">Explorez les paysages magiques jamais encore vus par l'homme,
        connectez-vous à la nature dans sa forme la plus pure et éveillez vos sens à travers la beauté des sentiers,
        des forêts luxuriantes et des lacs.
        </p>
        <a className='hero__button' data-aos="zoom-in" href='/'>Réserver</a>
        <p className='hero__infos' data-aos="zoom-in">A partir de 199€ / Nuit</p>
      </section>
      <Explore />
      <Discover />
      <Guide />
      <Hiking />
      <Kayak />
      <Trip />
      <Footer />
    </StyledHome>
  );
}

export default Home;

