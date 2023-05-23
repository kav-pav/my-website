import type React from 'react';
import type { ScriptProps } from 'next/script';

import ThemeBtn from '../themeButton/themeButton';

import styles from './Navbar.module.scss';

const Navbar: React.FC<ScriptProps> = (props) => {
  return (
    <div className={styles.nav__container}>
      <div>Logo</div>

      <ul className={styles.list__container}>
        <li>Home</li>
        <li>Work</li>
        <li>About</li>
        <li>
          <ThemeBtn />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
