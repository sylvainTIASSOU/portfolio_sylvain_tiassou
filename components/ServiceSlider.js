import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper'


// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Développement web',
    description: 'Création de sites web dynamiques, applications web, ou plateformes e-commerce.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Développement d\'applications mobiles',
    description: 'Conception et programmation d\'applications pour iOS et Android.',
  },
  {
    icon: <RxDesktop />,
    title: 'Développement back-end',
    description: 'Mise en place de serveurs, gestion de bases de données, et développement de la logique serveur.',
  },
  {
    icon: <RxReader />,
    title: 'Développement front-end',
    description: 'Création d\'interfaces utilisateur attrayantes et réactives.'
  },
  {
    icon: <RxRocket />,
    title: 'Développement d\'API',
    description: 'Conception et mise en place d\'interfaces de programmation d\'applications.',
  },

  {
    icon: <RxRocket />,
    title: 'Intégration de technologies',
    description: 'Utilisation de technologies émergentes comme l\'intelligence artificielle, la réalité virtuelle, ou l\'internet des objets.',
  },

  {
    icon: <RxRocket />,
    title: 'Optimisation des performances',
    description: 'Amélioration des performances des applications et des sites web.',
  },

  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }}

    freeMode = {true}
    pagination = {{
      clickable: true,
    }}

    modules={[FreeMode, Pagination]}
    className='h-[340px] sm:h-[340px]'
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-[400px] rounded-lg px-6 py-8 flex sm:flex-col 
              gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65, 169,0.15)] 
              transition-all duration-300'>
                {/**icons */}
                <div className='text-4xl text-accent mb-4'> {item.icon} </div>

                {/**title & desc */}
                <div className='mb-2 '>
                  <div className='mb-2 text-[15px]'> {item.title} </div>
                  <p className='max-w-[350px] leading-normal'> {item.description} </p>
                </div>

                {/** arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
    
    </Swiper>
  ) ;
};

export default ServiceSlider;
