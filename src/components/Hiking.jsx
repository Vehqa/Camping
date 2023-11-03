import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hiking from '../assets/images/hiking.png'
import icon from '../assets/images/hike-icon.png'

const StyledHiking = styled.div`
    padding-top: var(--xl-sizing);
    width: 100%;
    padding-left: var(--xl-sizing);
    color: black;
    background-color: white;

    .hiking {
        padding-top: var(--l-sizing);
        display: flex;
        justify-content:center;
        align-items:center;
        gap: 100px;
    }

    .hiking__icon {
        max-width: 110px;
        max-height: 200px;
        margin-bottom: var(--s-sizing);
    }

    .hiking__title {
        font-family: 'Krona', sans-serif;
        margin-bottom: var(--m-sizing);
    }

    .hiking__img {
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
    padding-left: 0;
    .hiking {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .activities {
        width: auto;
    }
}

@media (max-width: 550px) {
    .hiking__img {
        width: auto;
        height: auto;
    }

    .hiking__title {
        font-size: 18px;
    }
}
`
;

function Hiking () {
    AOS.init({
        duration: 1600,
        });
    return (
        <StyledHiking>
                <img className='hiking__icon' alt='icone randonneur' src={icon}></img>
                <h4 className='hiking__title'>Les différentes activités:</h4>
            <div className='hiking' data-aos="flip-up">
                <img  className='hiking__img' alt='randonneurs' src={hiking}></img>
                <div className='activities'>
                    <h6 className='activities__title'>Groupe de randonneur</h6>
                    <p className='activities__para'>Nos guides experts garantissent votre sécurité tout en partageant leur savoir avec vous.
                        Vous serez connecté à la nature tout au long de la randonnée, renforcerez les liens avec votre groupe,
                        et créerez des souvenirs
                        inoubliables au sein d'une randonnée conçue spécialement pour vous.
                    </p >
                    <p className='activities__stats'> 1,8k Views · 356 Likes</p>
                    <a href='/' className='activities__button'> Details </a>
                </div>
            </div>
        </StyledHiking>
    )
}

export default Hiking;