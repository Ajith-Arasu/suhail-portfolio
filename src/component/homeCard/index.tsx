import buttonIcon from '../../assets/img/upright.png';
import styles from './style.module.css';

const HuutCard = ({ displayImg, title }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.headc}>{title}</div>
      <div className={styles.bodyc}>
        <div className={styles.firstImg}></div>
        <div className={styles.scndImg}></div>
        <div className={styles.thrdImg}>
          <img className={styles.cardImg} src={displayImg} alt="Card" />
        </div>
        <div className={styles.myBtn}>
          <button>
            <img src={buttonIcon} alt="Button Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HuutCard;
