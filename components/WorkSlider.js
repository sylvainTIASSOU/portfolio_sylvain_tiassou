import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper'
import Image from 'next/image';
import Link from 'next/link'
// data
import { BsArrowRight } from 'react-icons/bs'
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Nye Dowola',
          path: '/logo1.svg',
          url: 'https://nye-dowola.vercel.app/'
        },
        {
          title: 'SEBCOTOGO',
          path: '/SEBCO TOGO 3.png',
          url: 'https://sebcotogo-plum.vercel.app/'
        },
        {
          title: 'Salon de la relation client',
          path: '/Fichier 1lOGOF.png',
          url: 'https://salon-relation-client-lkxy.vercel.app/'
        },
      ],
    },

  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}

      modules={[Pagination]}
      className='h-[320px] sm:h-[510px]'
    >
      {
        workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div  >
                <div className='grid grid-cols-2 grid-rows-2 gap-2 cursor-pointer'>
                  {
                    slide.images.map((image, index) => {
                      return <Link href={image.url} key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                        <div className='flex items-center justify-center relative overflow-hidden group'>
                          {/**image */}
                          <Image src={image.path} width={200} height={200} quality={100} alt='' />

                          {/**overlay gradiant */}
                          <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 
                         group-hover:opacity-80 transition-all duration-700'></div>

                          {/**title */}
                          <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 groupe-hover:xl:-translate-y-20 
                         transition-all duration-300'>


                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em'>
                              {/** title part 1*/}
                              <div className='delay-100'>Projet</div>

                              {/** title part 2 */}
                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                                {image.title}
                                </div>

                              {/** icons */}
                              <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                <BsArrowRight />
                              </div>
                            </div>
                          </div>
                        </div>

                      </Link>
                    })
                  }
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }

    </Swiper>
  );
};

export default WorkSlider;
