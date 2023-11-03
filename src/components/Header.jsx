import React from 'react';
import styled from 'styled-components';

const  StyledHeader = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: var(--default-sizing);
    font-family: 'Krona', sans-serif;

    .header__link {
        display: flex;
        gap: var(--m-sizing);
    }

@media (max-width: 650px) {
    .header__link {
        display: none;
    }
}
`;

function Header(){
    return(
        <StyledHeader>
            <a href='/'>Camping Adventure</a>
            <div className='header__link'>
                <a href='/'>A propos</a>
                <a href='/'>Evenement</a>
                <a href='/'>Connexion</a>
            </div>
        </StyledHeader>
    )
}

export default Header;