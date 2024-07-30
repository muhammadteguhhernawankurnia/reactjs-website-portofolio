import profilePicture from '../assets/IMG_20230226_161008_235.jpg';
import '../styles/Header.css';
import { FaLinkedin } from 'react-icons/fa6';
import { FaSquareGithub } from 'react-icons/fa6';
import { FaSquareWhatsapp } from 'react-icons/fa6';

function Header() {
  return (
    <header>
      <div className='header-jumbotron'>
        <img src={profilePicture} />
        <h3>Moch. Teguh Hernawan Kurnia</h3>
        <p>moch.teguhhernawankurnia@gmail.com</p>
        <p>Web Developer</p>
        <div className='socialMedia'>
          <a
            href='https://www.linkedin.com/in/mochteguhhernawankurnia/'
            target='_blank'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://github.com/muhammadteguhhernawankurnia'
            target='_blank'
          >
            <FaSquareGithub />
          </a>
          <a
            href='https://api.whatsapp.com/send/?phone=6281213562259&text&type=phone_number&app_absent=0'
            target='_blank'
          >
            <FaSquareWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
