import profilePicture from '../assets/IMG_20230226_161008_235.jpg';
import '../styles/Header.css';
import { FaLinkedin } from 'react-icons/fa6';
import { FaSquareGithub } from 'react-icons/fa6';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

function Header() {
  return (
    <header>
      <div className='header-jumbotron'>
        <img src={profilePicture} />
        <h3>Teguh Hernawan</h3>
        <p>Web Developer</p>
        <div className='socialMedia'>
          <a href=''>
            <FaLinkedin />
          </a>
          <a href=''>
            <FaSquareGithub />
          </a>
          <a href=''>
            <FaSquareWhatsapp />
          </a>
          <a href=''>
            <SiGmail />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
