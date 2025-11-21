import Button from '../Button/Button';
import logoSrc from '/src/components/logo/image_1.svg';
import './Header.scss';

function Header() {
  return (
      <header className="header">
      <div className="header_logo">
        <img src={logoSrc} alt="React pizza" />
        <div className="header_text">
          <h1>React Pizza</h1>
          <p>Super pizza</p>
        </div>
      </div>
      <div className="header_actions">
        <Button onClick={() => alert('Нажата кнопка!')}>
          Замовити
        </Button>
      </div>
    </header>
  );
}

export default Header;