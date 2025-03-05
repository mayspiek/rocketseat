import rocketLogo from '../assets/rocket.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="" />
      <h1 className={styles.headerTitle}>
        <span>
          to
        </span>
        do
      </h1>
    </header>
  )
}
