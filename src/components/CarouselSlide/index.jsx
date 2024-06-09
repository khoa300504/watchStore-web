function CarouselSlide() {
  return (
    <div className="overflow-hidden w-[85%] mb-16">
      <div className="flex animate-loopScroll">
        <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-none">
          <li className="brand-menu-item">
            <img src="/src/assets/imgs/brands/citizen.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="Citizen" />
          </li>
          <li className="brand-menu-item">
            <img src="/src/assets/imgs/brands/casio.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="casio" />
          </li>
          <li className="brand-menu-item">
            <img src="/src/assets/imgs/brands/elio.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="Elio" />
          </li>
          <li className="brand-menu-item">
            <img src="/src/assets/imgs/brands/titan.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="Titan" />
          </li>
          <li className="brand-menu-item">
            <img src="/src/assets/imgs/brands/esprit.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="Esprit" />
          </li>
          <li className="brand-menu-item">
            <img src="/src/assets/imgs/brands/mvw.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="mvw" />
          </li>
          <li className="brand-menu-item hidden x:block">
            <img src="/src/assets/imgs/brands/xiaomi.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="xiaomi" />
          </li>
          <li className="brand-menu-item hidden x:block">
            <img src="/src/assets/imgs/brands/huwei.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="huwei" />
          </li>
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-none" aria-hidden="true">
          <li className="brand-menu-item">
            <img src="/src/assets/imgs/brands/citizen.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="citizen" />
          </li>
          <li className="brand-menu-item">
            <img src="/src/assets/imgs/brands/casio.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="casio" />
          </li>
          <li className="brand-menu-item">
            <img src="/src/assets/imgs/brands/elio.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="Elio" />
          </li>
          <li className="brand-menu-item">
            <img src="/src/assets/imgs/brands/titan.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="Titan" />
          </li>
          <li className="brand-menu-item">
            <img src="/src/assets/imgs/brands/esprit.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="Esprit" />
          </li>
          <li className="brand-menu-item">
            <img src="/src/assets/imgs/brands/mvw.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="mvw" />
          </li>
          <li className="brand-menu-item hidden x:block">
            <img src="/src/assets/imgs/brands/xiaomi.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="xiaomi" />
          </li>
          <li className="brand-menu-item hidden x:block">
            <img src="/src/assets/imgs/brands/huwei.jpg" className='w-[2.75rem] x:w-[4.68rem] lg:w-36' alt="huwei" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CarouselSlide
