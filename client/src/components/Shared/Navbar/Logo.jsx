import {Link} from 'react-router-dom';
import logoImg from '../../../assets/images/logo.png';

const Logo = () => {
    return <Link><img className='hidden md:block' width='100' height='100' src={logoImg} alt="logo" /></Link>
};

export default Logo;