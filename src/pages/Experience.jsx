import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiPhp } from 'react-icons/si';
import { DiHtml5 } from 'react-icons/di';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function Experience() {
  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2023 - present'
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<SiPhp />}
          >
            <h3 className='vertical-timeline-element-title'>Staff IT</h3>
            <h4 className='vertical-timeline-element-subtitle'>Bandung</h4>
            <p>
              - Designing, developing, and maintaining software or computer
              applications known as SysProd for monitoring the progress of
              clothing article production processes using PHP Native, while also
              managing the companys website using React.JS.
            </p>
            <p>
              - Managing and overseeing applications purchased by the company,
              such as Accurate, Jubelio, and Hadirr, responsible for managing
              and maintaining the organizations information technology
              infrastructure.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2023 - 2024'
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<DiHtml5 />}
          >
            <h3 className='vertical-timeline-element-title'>
              Guru Mata Pelajaran <br />
              Rekayasa Perangkat Lunak
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>Sumedang</h4>
            <p>
              - Planning and Developing Curriculum for Software Engineering
              Subjects.
            </p>
            <p>
              - Delivering Effective Instruction to Students, Whether in
              Lectures, Laboratories, or Tutorials.
            </p>
            <p>
              - Developing Learning Materials, Resources, and Up-to-Date
              Content.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
