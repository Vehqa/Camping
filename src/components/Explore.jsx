import React from 'react';
import styled from 'styled-components';
import map from '../assets/images/road.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledExplore = styled.div `
    width: 100vw;
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .explore__img {
        width: 525px;
        height: 525px;
    }

    .explore__text {
        width: 525px;
        height: 525px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--l-sizing);
    }

    .explore__text-title {
        font-family: 'Krona', sans-serif;
    }

    .explore__text-para {
        font-family: 'Playfair', sans-serif;
    }

    @media (max-width: 1100px) {
    .explore__img {
        width: 400px;
        height: 400px;
    }
    .explore__text {
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
    padding: var(--default-sizing);
}

@media (max-width: 550px) {
    .explore__img {
        width: 350px;
        height: 350px;
    }
    .explore__text-title {
        font-size: 18px;
    }

    .explore__text {
        width: 350px;
        height: 350px;
    }

    .explore__text-para{
        font-size:12px;
    }
}
`
;

function Explore(){
    AOS.init({
        duration: 1500,
        });
    return (
        <StyledExplore>
            <img className='explore__img'src={map} alt='carte' data-aos="fade-right"></img>
            <div className='explore__text' data-aos="fade-left">
                <h4 className='explore__text-title'>Explorer des emplacements de camping uniques.</h4>
                <p className='explore__text-para'>
Explorez la magie du camping, où chaque jour est une aventure en pleine nature qui vous attend. Réveillez-vous au doux chant des oiseaux, parcourez des sentiers pittoresques, baignez-vous dans des lacs cristallins et passez des soirées mémorables sous les étoiles autour d'un feu de camp chaleureux. C'est l'occasion parfaite de vous détendre, de vous déconnecter du quotidien et de créer des souvenirs inoubliables en plein air. Rejoignez-nous pour une expérience de camping tout à fait unique qui vous laissera des souvenirs durables.
                </p>
            </div>
        </StyledExplore>
    )
}

export default Explore;