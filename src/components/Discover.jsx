import React from 'react';
import styled from 'styled-components';
import animal from '../assets/images/grenouille.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledDiscover = styled.div `
    width: 100vw;
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .discover__img {
        width: 525px;
        height: 525px;
    }

    .discover__text {
        width: 525px;
        height: 525px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--l-sizing);
    }

    .discover__text-title {
        font-family: 'Krona', sans-serif;
    }

    .discover__text-para {
        font-family: 'Playfair', sans-serif;
    }

    .separation {
        width: 100%;
        height: 4px;
        color: white;
        background-color: white;
        display: none;
    }

    @media (max-width: 1100px) {
    .discover__img {
        width: 400px;
        height: 400px;
    }
    .discover__text {
        width: 400px;
        height: 400px;
    }
}

@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: auto;
    gap: var(--m-sizing);
    padding: var(--default-sizing);

    .separation {
        display : inline-block;
    }
}
`
;

function Discover () {
    return (
        <StyledDiscover>
            <hr className='separation'></hr>
            <div className='discover__text' data-aos="fade-right">
                <h4 className='discover__text-title'>Decouvrez une magnifique faune sauvage</h4>
                <p className='discover__text-para'> Explorez les charmes du camping, où chaque jour est une invitation à l'aventure au cœur de la nature. Réveillez-vous au son mélodieux des oiseaux, arpentez des sentiers pittoresques, plongez dans des lacs d'une clarté exceptionnelle, et concluez vos journées sous un ciel étoilé, confortablement installés autour d'un feu de camp accueillant. C'est l'occasion rêvée pour vous détendre, vous déconnecter de la routine quotidienne, et vous émerveiller devant la faune et la flore environnantes. Rejoignez-nous pour une expérience de camping unique qui tissera des souvenirs impérissables.</p>
            </div>
            <img className='discover__img'src={animal} data-aos="fade-left"></img>
        </StyledDiscover>
    )
}

export default Discover;