import { AppProps } from 'next/app'
import '../styles/balloon.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return <AnyComponent {...pageProps} />
}

