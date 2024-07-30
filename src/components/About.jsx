import '../styles/About.css';
import { FaHtml5 } from 'react-icons/fa6';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaNodeJs } from 'react-icons/fa6';
import { FaBootstrap } from 'react-icons/fa6';
import { SiTailwindcss } from 'react-icons/si';
import { FaReact } from 'react-icons/fa6';
import { RiNextjsFill } from 'react-icons/ri';
import { SiPhp } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiMysql } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

function About() {
  return (
    <section id='about'>
      <div className='wrapper'>
        <h3>About</h3>
        <p>
          I am a full-stack developer. Who constantly seek opportunities to
          improve my skills and knowledge. Having experience in creating and
          developing an online order coffee shop, hiring app, payment app web
          with mobile, and movie booking app. I use JavaScript and PHP asthe
          main language and use some framework and library like Express.JS and
          Node.JS, React.JS, Next.JS, and React Native. Familiar with Postman,
          git, GitHub, and Trello for projects. Using MySQL and PostgreSQL for
          the database.
        </p>
        <h4>Programming Languge & Tools</h4>
        <div className='skills'>
          <FaHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <FaNodeJs />
          <FaBootstrap />
          <SiTailwindcss />
          <FaReact />
          <RiNextjsFill />
          <SiPhp />
          <BiLogoPostgresql />
          <SiMysql />
          <FaGithub />
        </div>
      </div>
    </section>
  );
}
export default About;
