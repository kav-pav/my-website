import type React from 'react';
import type { ScriptProps } from 'next/script';
import { useTheme } from 'next-themes';

import ThemeBtn from '../themeButton/themeButton';
import LogoIcon from '../logo/logoIcon';

import styles from './Navbar.module.scss';

const Navbar: React.FC<ScriptProps> = () => {
  const { theme } = useTheme();

  return (
    <div className={styles.nav__container}>
      <div className={styles.logo_container}>
        <LogoIcon theme={theme} />
      </div>

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
