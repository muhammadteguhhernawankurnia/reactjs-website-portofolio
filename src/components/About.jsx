import '../styles/About.css';
import { FaHtml5 } from 'react-icons/fa6';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';

function About() {
  return (
    <section id='about'>
      <div className='wrapper'>
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
          facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
          facilis?
        </p>
        <h4>Programming Languge & Tools</h4>
        <div className='skills'>
          <FaHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
        </div>
      </div>
    </section>
  );
}
export default About;
