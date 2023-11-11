import Link from 'next/link'
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiTwitterXLine,
  RiGithubLine,
} from 'react-icons/ri'

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://m.facebook.com/profile.php/?id=100039650572620'} className='hover:text-accent transition-all duration-300'>
      <RiFacebookLine />
    </Link>
    
    <Link href={'https://www.youytube.om'} className='hover:text-accent transition-all duration-300'>
      <RiYoutubeLine />
    </Link>

    <Link href={'https://instagram.com/sylvtias?utm_source=qr&igshid=OGIxMTE0OTdkZA=='} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>

    <Link href={'https://x.com/STiassou?t=0F--346lX0UdHE8wfNIF2Q&s=35'} className='hover:text-accent transition-all duration-300'>
      <RiTwitterXLine />
    </Link>

    <Link href={'https://www.linkedin.com/in/sylvain-tiassou-444b9b26a/'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link>
    <Link href={'https://github.com/sylvainTIASSOU'} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine />
    </Link>
    
  </div>
};

export default Socials;
