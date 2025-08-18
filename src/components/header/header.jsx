import React from 'react';
import logo from './logo/image_1.svg';

function Header() {
  return (
  
    <div className="header-container">
      <div className="Header_logo"> 
        <img width="36" src={logo} alt="Логотип пиццы" /> {/* alt текст описываемый */}
        <button>Заказать</button> {/* текст для кнопки */}
        <h1>React Pizza</h1>
        <p>Super pizza</p>
      </div>

      <div className="header_card">
        {/*
          <Link> из react-router-dom для навигации вместо <a>, т.к. используется react-router-dom.
          <a class="button_card" href='./card'>
        */}
        <Link className="button_card" href='./card'>
          <span>0 грн.</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;