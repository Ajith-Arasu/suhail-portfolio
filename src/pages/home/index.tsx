import Banner from '../../component/banner';
import Footer from '../../component/footer';
import HuutCard from '../../component/homeCard';
import HuutCardWithoutArrow from '../../component/homecardWithoutArrow';
import pm from '../../assets/img/pm.png';
import port1 from '../../assets/img/port1.png';
import port10 from '../../assets/img/port10.png';
import port11 from '../../assets/img/port11.png';
import port12 from '../../assets/img/port12.png';
import port2 from '../../assets/img/port2.png';
import port3 from '../../assets/img/port3.png';
import port4 from '../../assets/img/port4.png';
import port5 from '../../assets/img/port5.png';
import port6 from '../../assets/img/port6.png';
import port7 from '../../assets/img/port7.png';
import port8 from '../../assets/img/port8.png';
import port9 from '../../assets/img/port9.png';
import styles from './style.module.css';
import suhailPic from '../../assets/img/suhailPic.png';
import ui from '../../assets/img/ui.png';
import ux from '../../assets/img/ux.png';

const HomePage = () => {
  const MyDetails = () => {
    return (
      <div className={styles.myDetailsContainer}>
        <div className={styles.myDetailsImgContainer}>
          <img src={suhailPic} alt="Button Icon" />
        </div>
        <div className={styles.myDetailsTextContainer}>
          <div className={styles.myDetailsHeadContainer}>
            <p>Hello,</p>
          </div>
          <p className={styles.mydetailText}>
            Results-driven UX/UI Designer with four years of experience in designing intuitive, user-centric products
            across diverse domains. Skilled in product management, growth strategy, and user research, ensuring seamless
            functionality and aesthetic appeal. Passionate about driving innovation through Agile collaboration and
            delivering impactful digital experiences.
          </p>
        </div>
      </div>
    );
  };

  const MyService = () => {
    const service = [
      { img: ux, title: 'User Experience (UX)' },
      { img: ui, title: 'User Interface (UI)' },
      { img: pm, title: 'Product Management' }
    ];
    return (
      <>
        <h1 className={styles.serviceTitle}>
          My <span className={styles.workexp}>Services</span>
        </h1>
        <p className={styles.serviceText}>
          I specialize in UX/UI Design and Product Management, focusing on user-centric interfaces and optimizing
          experiences. I align design strategies with business goals, foster collaboration, and drive iterative
          development for high-quality product delivery.
        </p>
        <div className={styles.myserviceContainer}>
          {service.map((item) => (
            <HuutCardWithoutArrow displayImg={item.img} title={item.title} />
          ))}
        </div>
      </>
    );
  };

  const WorkExperience: React.FC = () => {
    const experiences: any[] = [
      {
        company: 'Amtex Software Solutions',
        duration: 'Apr 2020 - Sep 2022',
        position: 'QA Intern',
        description:
          'Tested software applications and executed comprehensive test cases to ensure software quality for a renowned car manufacturing company.'
      },
      {
        company: '',
        duration: 'Oct 2022 - Aug 2023',
        position: 'Associate UX/UI Designer',
        description:
          'Creating exceptional user experiences through user research, wireframing, and prototyping while conducting usability testing. Skilled in Figma and design systems to ensure consistency and efficiency.'
      },
      {
        company: '',
        duration: 'Sep 2023 - Present',
        position: 'Senior UX/UI Designer',
        description:
          'Driving UX strategy by identifying user needs, conducting research, and transforming insights into impactful designs. Experienced in design systems, prototyping, and delivering exceptional user experiences.',
        isPresent: true
      }
    ];

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            My <span className={styles.workexp}>Work Experience</span>
          </h1>

          <div className={styles.timelineContainer}>
            {/* Centered vertical line */}
            <div className={styles.timelineLine}></div>

            <div className={styles.timelineItems}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  {/* Timeline dot - centered */}
                  <div className={styles.timelineDot}></div>

                  {/* Content grid */}
                  <div className={styles.contentGrid}>
                    {/* Left side - Company and Duration */}
                    <div className={styles.leftContent}>
                      {exp.company && <h3 className={styles.companyName}>{exp.company}</h3>}
                      <p className={styles.duration}>{exp.duration}</p>
                    </div>

                    {/* Right side - Position and Description */}
                    <div className={styles.rightContent}>
                      <h4 className={styles.position}>{exp.position}</h4>
                      <p className={styles.description}>{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Profile = () => {
    const label = ['Landing Page', 'Product Design', 'Animation', 'Glassmorphism', 'Cards'];
    const projects = [
      {
        title: 'Huut (Mobile UX/UI)',
        img: port1
      },
       {
        title: 'Huut (Mobile UX/UI)',
        img: port2
      },
       {
        title: 'Huut (Mobile UX/UI)',
        img: port3
      },
       {
        title: 'Huut (Mobile UX/UI)',
        img: port4
      },
       {
        title: 'Huut (Mobile UX/UI)',
        img: port5
      },
       {
        title: 'Huut (Mobile UX/UI)',
        img: port6
      },
       {
        title: 'Huut (Mobile UX/UI)',
        img: port7
      },
       {
        title: 'Huut (Mobile UX/UI)',
        img: port8
      },
       {
        title: 'Huut (Mobile UX/UI)',
        img: port9
      },
       {
        title: 'Huut (Mobile UX/UI)',
        img: port10
      },
       {
        title: 'Huut (Mobile UX/UI)',
        img: port11
      },
       {
        title: 'Huut (Mobile UX/UI)',
        img: port12
      }
    ];
    return (
      <>
        <h1 className={styles.serviceTitle}>
          Lets Have A Look At My <span className={styles.workexp}>Portfolio</span>
        </h1>
        <div className={styles.lableContainer}>
          {label.map((item) => (
            <button>{item}</button>
          ))}
        </div>
        <div className={styles.portfoliocardContainer}>
          {projects.map((item) => (
            <HuutCard displayImg={item.img} title={item.title} />
          ))}
        </div>
      </>
    );
  };
  return (
    <>
      <Banner />
      <MyDetails />
      <MyService />
      <WorkExperience />
      <Profile />
      <Footer />
    </>
  );
};
export default HomePage;
