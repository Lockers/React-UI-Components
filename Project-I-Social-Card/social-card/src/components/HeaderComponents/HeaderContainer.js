import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import Image from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

// const header = <Header />

function HeaderContainer() {
    return (
       <div class='header-container'>
            <Image />
            <HeaderTitle />
            {/* <HeaderContent /> */}
       </div>
    )
}

export default HeaderContainer