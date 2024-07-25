import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { RiNextjsFill } from 'react-icons/ri';
import { RiVuejsFill } from 'react-icons/ri';

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
            date='2024 - present'
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<RiNextjsFill />}
          >
            <h3 className='vertical-timeline-element-title'>
              Frontend Developer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>Garut</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2024 - present'
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<RiVuejsFill />}
          >
            <h3 className='vertical-timeline-element-title'>
              Frontend Developer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>Tasikmalaya</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
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
