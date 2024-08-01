import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiPhp } from 'react-icons/si';
import { DiHtml5 } from 'react-icons/di';
import { MdWarehouse } from 'react-icons/md';
import { SiLibreofficecalc } from 'react-icons/si';
import { MdOutlineRestaurant } from 'react-icons/md';

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
            <h3 className='vertical-timeline-element-title'>
              Staff IT - CV. Subur Jaya
            </h3>
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
              Rekayasa Perangkat Lunak - SMK Padjadjaran Jatinangor
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

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2021 - 2021'
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<MdWarehouse />}
          >
            <h3 className='vertical-timeline-element-title'>
              Warehouse Staff - PT. Utama Kosmetik Abadi
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>Bandung</h4>
            <p>
              - Manage the accounting function for petty cash ensuring the
              integrity and accuracy of internal controls.{' '}
            </p>
            <p>
              - Plays in a key role in monthly audits and reviews prepares
              detailed reports and recommends corrective actions.{' '}
            </p>
            <p>
              - Simplify the transaction processes to reduce the total time for
              bookkeeping.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2019 - 2020'
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<SiLibreofficecalc />}
          >
            <h3 className='vertical-timeline-element-title'>
              Administrator - PT. Grand Textile Industry
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>Bandung</h4>
            <p>
              - Develop and implement internal department reports to provide
              timely information to department heads, increase our profitability
              and reduce operating costs.
            </p>
            <p>
              - Perform all administrative functions related to the production
              process and employees.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2016 - 2016'
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<SiLibreofficecalc />}
          >
            <h3 className='vertical-timeline-element-title'>
              Internship Administrator - ATR/BPN Kantor Pertanahan Kota Bandung
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>Bandung</h4>
            <p>
              - Prepare and identify land certificates for Land Registration
              with the data of the newly expanded area.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2013 - 2015'
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<MdOutlineRestaurant />}
          >
            <h3 className='vertical-timeline-element-title'>
              Food and Beverages Service - Bali World Hotel
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>Bandung</h4>
            <p>
              - Manage all services related to food and beverages to customers,
              present and serve well, and ensure the comfort and satisfaction of
              consumers while enjoying the available offering.
            </p>
            <p>
              - Prepare financial reports on daily income from sales in
              restaurants and make a budget for restaurant shopping needs
              periodically.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2012 - 2012'
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<SiLibreofficecalc />}
          >
            <h3 className='vertical-timeline-element-title'>
              Internship Administrator - ATR/BPN Kantor Wilayah Provinsi Jawa
              Barat
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>Bandung</h4>
            <p>
              - Entry data into reports based on land transaction letters sent
              by Notary and PPAT in a monthly period.
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
