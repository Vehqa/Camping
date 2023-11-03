import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import kayak from '../assets/images/kayak.png'

const StyledKayak = styled.div`
    padding-top: var(--xl-sizing);
    width: 100%;
    padding-left: var(--xl-sizing);
    color: black;
    background-color: white;

    .kayak {
        padding-top: var(--l-sizing);
        display: flex;
        justify-content:center;
        align-items:center;
        gap: 100px;
    }

    .kayak__img {
        max-width: 425px;
        max-height: 425px;
    }

    .activities {
        width: 600px;
        display: flex;
        flex-direction: column;
        &__title {
            font-family: 'Krona', sans-serif;
            font-size: 28px;
            margin-bottom: var(--m-sizing);
        }
        &__para {
            font-family: 'Playfair', sans-serif;
            margin-bottom: var(--s-sizing);
            font-weight: bolder;
        }
        &__stats {
            font-family: 'Krona', sans-serif;
            color: grey;
            font-size: 12px;
            margin-bottom: var(--m-sizing);
        }
        &__button {
            width: 150px;
            height: 40px;
            border-radius: 20px;
            border: 1px solid black;
            background-color: white;
            color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Krona', sans-serif;
        }
    }

@media (max-width: 1050px) {
    .kayak {
        display: flex;
        flex-direction: column;
    }

    .activities {
        width: auto;
    }
}
`
;

function Kayak () {
    AOS.init({
        duration: 1600,
        });
    return (
        <StyledKayak>
            <div className='kayak' data-aos="flip-up">
                <div className='activities'>
                    <h6 className='activities__title'>Journée Kayak</h6>
                    <p className='activities__para'>Nos guides experts vous assurent une expérience en toute sécurité tout 
                    en partageant leur expertise en kayak. Vous serez en harmonie avec la nature tout au long de l'excursion, renforcerez les liens avec votre groupe et créerez des souvenirs
                    inoubliables au sein d'une aventure en kayak conçue spécialement pour vous.
                    </p >
                    <p className='activities__stats'> 6,8k Views · 2,1k Likes</p>
                    <a href='/' className='activities__button'> Details </a>
                </div>
                <img  className='kayak__img' alt='Kayak' src={kayak}></img>
            </div>
        </StyledKayak>
    )
}

export default Kayak;