import Image from 'next/image'

const Avatar = () => {
  return (
    <div className='flex xl:flex xl:max-w-none'>
      <Image 
        src={'/avatar3.png'}
        width={537}
        height={578}
        quality={100}
        alt=''
        className='translate-z-0 w-full h-full'
      />
    </div>
  );
}

export default Avatar;
