import { Sora } from '@next/font/google';
import Nav from '../components/Nav';
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'
import Head from 'next/head'

// font settings
const sora = Sora({
  subset: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  preload: false,
});



const Layout = ({children}) => {
  return ( 
  <><Head>
      <title> Portfolio Sylvain TIASSOU </title>
      <meta name='description' content='portfolio de sylvain tiassou' />
      <link rel='icon' href='/tkms1-removebg-preview.png' type='image/x-icon' />
    </Head>
    <div className={` ${sora.variable} page bg-site text-white bg-cover bg-no-repeat font-sora relative`}>
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </div></>
  );
};

export default Layout;
