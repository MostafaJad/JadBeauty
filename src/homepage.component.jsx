import React from 'react';

import './homepage.styles.scss';


const HomePage = () => (
    <div className='homepage'>
        <h1>Welcome to JadBeauty</h1>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>MakeUp</div>
                    <span className='subtitle'>SHOP Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>Best Sallers</div>
                    <span className='subtitle'>SHOP Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>SkinCare</div>
                    <span className='subtitle'>SHOP Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>WOMENS</div>
                    <span className='subtitle'>SHOP Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>MENS</div>
                    <span className='subtitle'>SHOP Now</span>
                </div>
            </div>
            
        </div>
    </div>
)

export default HomePage;