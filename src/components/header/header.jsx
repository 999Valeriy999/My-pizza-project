import {logo} from '../header/logo/image_1.svg';

function Header() {
return(
 <div className='Header_logo'> 
   <img width="36" src='logo' alt='image_1' />
     <h1>React Pizza</h1> 
    {logo}
 </div>
 );
}
export default Header;