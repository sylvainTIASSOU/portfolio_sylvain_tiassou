
import Nav from '../components/Nav';
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'
import Head from 'next/head'

// font settings




const Layout = ({children}) => {
  return ( 
  <>
  <Head>
      <title> Portfolio Sylvain TIASSOU </title>
      <meta name='description' content='portfolio de sylvain tiassou' />
      <link rel='icon' href='/tkms1-removebg-preview.png' type='image/x-icon' />
    </Head>
    <div className={` page bg-site text-white bg-cover bg-no-repeat font-sora relative`}>
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </div></>
  );
};

export default Layout;
