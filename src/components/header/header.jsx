import Button from './Button';
import logoSrc from '/src/components/logo/image_1.svg';

function Header() {
  return (
  

      <div> 
        <img src={logoSrc} alt="React pizza" />
        <h1>React Pizza</h1>
        <p>Super pizza</p>
      <div>
        <Button onClick={() => alert('Нажата кнопка!')}>
        Замовити
      </Button>
  
      </div>
      </div>
  );
}

export default Header;