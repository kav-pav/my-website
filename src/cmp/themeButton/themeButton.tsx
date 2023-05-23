import { useTheme } from 'next-themes';

import Icon from './themeButtonIcon';
import styles from './themeButton.module.scss';

function ThemeBtn() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={styles.btn_theme}
      type="button"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      <Icon theme={theme} />
    </button>
  );
}

export default ThemeBtn;
