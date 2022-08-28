import styles from './Header.module.css';

import igniteLogo from '../assets/ignite_logo.svg';

export function Header(params) {
  return (
    <>
      <header className={styles.header}>
        <img src={igniteLogo} alt='Logotipo Ignite' />
      </header>
    </>
  );
}
