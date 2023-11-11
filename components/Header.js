
import Link from "next/link"
import Socials from '../components/Socials'
const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-5 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-2 py-4'>
          <Link href='/'>
            <span className='text-[27px] font-thin text-center'>Sylvain</span>   <span className='font-bold text-[28px]'>TIASSOU</span> <span  className='text-accent font-bold text-[30px]'>.</span>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
