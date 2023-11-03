import React from 'react';
import styled from 'styled-components';
import footer from '../assets/images/footer.png';
import discord from '../assets/images/icon-discord.png';
import facebook from '../assets/images/icon-fb.png';
import instagram from '../assets/images/icon-insta.png';
import twitter from '../assets/images/icon-twitter.png';
import AOS from 'aos';
import 'aos/dist/aos.css';



const StyledFooter = styled.div `
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: var(--xxxl-sizing);
color: black;
background-color: white;

.footer__title {
    font-family: 'Krona', sans-serif;
    font-size: 28px;
    padding-bottom: var(--s-sizing);
}

.footer__para {
    font-family: 'Playfair', sans-serif;
    font-weight: bolder;
    width: 450px;
    text-align: center;
    color: var(--grey)
}

.footer__separation {
    width: 600px;
    height: 3px;
    color: black;
    background-color: black;
    margin: var(--s-sizing);
}

.footer__quote {
    font-family: 'Playfair', sans-serif;
    font-weight: bolder;
    font-size: 16px;
    padding-bottom: var(--m-sizing);
}

.footer__img {
    width:100%
}

.footer__infos {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: var(--default-sizing);
    &-home{
        color: black;
        font-family: 'Krona', sans-serif;
    }
    &-list{
        display: flex;
        gap: var(--m-sizing);
    }
    &-link {
        font-family: 'Krona', sans-serif;
    }
}

.author {
    width: 100%;
    justify-content:center;
    display:flex;
}

@media (max-width: 1050px) {
    .footer__infos-list {
        display: flex;
        flex-direction: column; 
    }

    .footer__separation {
        width: 500px;
    }
}

@media (max-width: 650px) {
    .footer__title {
        font-size: 22px;
    }

    .footer__para {
        font-size: 10px;
    }

    .footer__quote {
        font-size: 12px;
    }

    .footer__separation {
        width: 200px;
    }

}

`
;

function Footer () {
    AOS.init({
        duration: 1400,
        });
    return (
        <StyledFooter>
            <h5 className='footer__title' data-aos="zoom-in"> Votre aventure commence ici ! </h5>
            <p className='footer__para' data-aos="zoom-in">Notre objectif est de vous initier aux plaisirs de la randonnée et du camping
            en pleine nature tout en veillant à la préservation de notre environnement.
            </p>
            <hr className='footer__separation' data-aos="zoom-in"></hr>
            <p className='footer__quote' data-aos="zoom-in">Embrassez l'appel de la nature et laissez le voyage se dérouler.</p>
            <img className='footer__img' src={footer} alt='montagne'></img>
            <div className='footer__infos'>
                <a href='/' className='footer__infos-home'>Camping Adventure</a>
                <ul className='footer__infos-list'>
                    <li className='footer__infos-link'>A Propos</li>
                    <li className='footer__infos-link'>Evenements</li>
                    <li className='footer__infos-link'>FAQ</li>
                    <li className='footer__infos-link'>L'Equipe</li>
                </ul>
                <ul className='footer__infos-list'>
                    <li><img src={facebook} alt='icon facebook'></img></li>
                    <li><img src={twitter} alt='icon twitter'></img></li>
                    <li><img src={instagram} alt='icon instagram'></img></li>
                    <li><img src={discord} alt='icon discord'></img></li>
                </ul>
            </div>
            <p className='author'>Made by Arthur Nectoux | Vehqa Camping ©️ 2023</p>
        </StyledFooter>
    )
}

export default Footer;