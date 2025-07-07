import HuutCard from '../../component/homeCard';
import styles from './style.module.css';
import suhailImg from '../../assets/img/suhailName.png';

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <nav className={styles.navbar}>
        <img src={suhailImg}></img>
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>About Me</li>
          <li>My Services</li>
          <li>Experience</li>
          <li>Portfolio</li>
          <li>Tools</li>
          <li>Feedbacks</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className={styles.heroContent}>
        <div className={styles.heroContentData}>
          <h1 className={styles.helloText}>
            Hello, I am <span>Suhail</span>,
          </h1>
          <h1 className={styles.helloText}>UX/UI Designer</h1>
          <button className={styles.ctaButton}>GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
