import { ThemeProvider } from 'next-themes';
import './globalStyles.scss';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
