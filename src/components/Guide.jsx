import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import guide from '../assets/images/guide.jpg'

const StyledGuide = styled.div `
    display: flex;
    justify-content: center;
    background: linear-gradient(to bottom, #0B0E16 50%, white 50%);

    .guide__img {
        width: 450px;
        height: 355px;
    }

    .guide__card {
        width: 450px;
        height: 355px;
        background-color : var(--primaryColor);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        gap: 30px;
        .guide__card-p{
            padding: var(--s-sizing);
            font-family: 'Playfair', sans-serif;
            font-size: 16px;
        }
    }

    .guide__name {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-left : var(--s-sizing);
        padding-right : var(--s-sizing);
        padding-bottom: var(--m-sizing);
    }

    .guide__name-author {
        font-family: 'Krona', sans-serif;
        color: white;
    }

    .guide__name-guide {
        font-family: 'Krona', sans-serif;
        color: lightblue;
    }


@media (max-width: 950px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(to bottom, #0B0E16 70%, white 30%);
}

@media (max-width: 600px) {
    .guide__img {
        width: 400px;
        height: 300px;
    }

    .guide__card {
        width: 400px;
        height: 300px;
    }
}

@media (max-width: 550px) {
    .guide__img {
        width: 350px;
        height: 250px;
    }

    .guide__card {
        width: 400px;
        height: auto;
        &-p {
            font-size: 12px;
        padding: 0;
        }
    }
}
`
;

function Guide () {
    AOS.init({
        duration: 1200,
        });
    return (
        <StyledGuide>
            <img src={guide} className='guide__img' alt='Guide touristique' data-aos="slide-up"></img>
            <div className='guide__card' data-aos="slide-up">
                <p className='guide__card-p'>" Rejoignez-nous dans une aventure exceptionnelle qui vous garantit une immersion totale 
                    dans un cadre idyllique. Cette expérience unique vous laissera imprégné d'inspiration,
                    vous encourageant à embrasser de nouvelles ambitions et à enrichir votre vie de découvertes
                    inoubliables. "</p>
                <div className='guide__name'>
                    <p className='guide__name-author'> Sophie Hammeau</p>
                    <p className='guide__name-guide'> GUIDE </p>
                </div>
            </div>
        </StyledGuide>
    )
}

export default Guide;