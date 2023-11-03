import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import trip from '../assets/images/van.png'

const StyledTrip = styled.div`
    padding-top: var(--xl-sizing);
    width: 100%;
    padding-left: var(--xl-sizing);
    color: black;
    background-color: white;

    .trip {
        padding-top: var(--l-sizing);
        display: flex;
        justify-content:center;
        align-items:center;
        gap: 100px;
    }

    .trip__img {
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
    .trip {
        display: flex;
        flex-direction: column;
    }

    .activities {
        width: auto;
    }
}
`
;

function Trip () {
    AOS.init({
        duration: 1600,
        });
    return (
        <StyledTrip>
            <div className='trip' data-aos="flip-up">
            <img  className='trip__img' src={trip}></img>
                <div className='activities'>
                    <h6 className='activities__title'>Trip en van</h6>
                    <p className='activities__para'>Partez pour une aventure inoubliable en van,
                    que ce soit en amoureux ou entre amis, au cœur d'un camping niché au sein de la nature.
                    Explorez des paysages spectaculaires, laissez-vous bercer par le chant des oiseaux au réveil,
                    découvrez des sentiers cachés et des trésors naturels, le tout sous le ciel étoilé.
                    Vivez une expérience de camping unique, où la liberté de la route se marie parfaitement avec la 
                    beauté de la nature, créant des souvenirs durables et des moments de connexion avec vos proches
                    </p >
                    <p className='activities__stats'> 2,1k Views · 986 Likes</p>
                    <a href='/' className='activities__button'> Details </a>
                </div>
            </div>
        </StyledTrip>
    )
}

export default Trip;