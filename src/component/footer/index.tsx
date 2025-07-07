import React from 'react';
import arrowImg from '../../assets/img/upright.png';
import styles from './style.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>Lets Connect there</h2>
          <a href="#hire" className={styles.hireButton}>
            Hire me
            <img src={arrowImg} alt="Arrow Icon" className={styles.arrowIcon} />
          </a>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Navigation Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Navigation</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#home" className={styles.link}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className={styles.link}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className={styles.link}>
                  My Services
                </a>
              </li>
              <li>
                <a href="#experience" className={styles.link}>
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Section 2 */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Navigation</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#portfolio" className={styles.link}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#tools" className={styles.link}>
                  Tools
                </a>
              </li>
              <li>
                <a href="#feedback" className={styles.link}>
                  Feedback
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.link}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact</h3>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>+20 11 43 63 73 41</p>
              <p className={styles.contactItem}>asuhail1712@gmail.com</p>
              <p className={styles.contactItem}>www.suhailahamedhk.com</p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Get the latest information</h3>
            <div className={styles.newsletterSection}>
              <form className={styles.newsletterForm}>
                <input type="email" placeholder="Email Address" className={styles.emailInput} />
                <button type="submit" className={styles.subscribeButton}>
                  →
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}></div>
            <h4 className={styles.logoText}>SUHAIL</h4>
          </div>
          <p className={styles.copyright}>© 2024 Suhail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
