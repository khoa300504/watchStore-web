import citizen from '~/assets/imgs/brands/citizen.jpg'
import casio from '~/assets/imgs/brands/casio.jpg'
import elio from '~/assets/imgs/brands/elio.jpg'
import titan from '~/assets/imgs/brands/titan.jpg'
import esprit from '~/assets/imgs/brands/esprit.jpg'
import mvw from '~/assets/imgs/brands/mvw.jpg'
import xiaomi from '~/assets/imgs/brands/xiaomi.jpg'
import huwei from '~/assets/imgs/brands/huwei.jpg'

function CarouselSlide() {
  return (
    <div className="overflow-hidden w-[85%] mb-16">
      <div className="flex animate-loopScroll">
        <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-none">
          <li className="brand-menu-item">
            <img src={citizen} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="citizen" />
          </li>
          <li className="brand-menu-item">
            <img src={casio} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="casio" />
          </li>
          <li className="brand-menu-item">
            <img src={elio} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="Elio" />
          </li>
          <li className="brand-menu-item">
            <img src={titan} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="Titan" />
          </li>
          <li className="brand-menu-item">
            <img src={esprit} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="Esprit" />
          </li>
          <li className="brand-menu-item">
            <img src={mvw} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="mvw" />
          </li>
          <li className="brand-menu-item hidden x:block">
            <img src={xiaomi} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="xiaomi" />
          </li>
          <li className="brand-menu-item hidden x:block">
            <img src={huwei} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="huwei" />
          </li>
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-none" aria-hidden="true">
          <li className="brand-menu-item">
            <img src={citizen} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="citizen" />
          </li>
          <li className="brand-menu-item">
            <img src={casio} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="casio" />
          </li>
          <li className="brand-menu-item">
            <img src={elio} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="Elio" />
          </li>
          <li className="brand-menu-item">
            <img src={titan} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="Titan" />
          </li>
          <li className="brand-menu-item">
            <img src={esprit} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="Esprit" />
          </li>
          <li className="brand-menu-item">
            <img src={mvw} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="mvw" />
          </li>
          <li className="brand-menu-item hidden x:block">
            <img src={xiaomi} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="xiaomi" />
          </li>
          <li className="brand-menu-item hidden x:block">
            <img src={huwei} className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="huwei" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CarouselSlide
