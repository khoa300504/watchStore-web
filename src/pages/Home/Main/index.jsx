import CarouselSlide from '~/components/CarouselSlide'
import Slider from '~/components/Slider'
import SubHeadLine from '~/components/SubHeadLine'

function Main() {
  return (
    <main className='flex justify-center items-center flex-col'>
      <Slider/>
      <CarouselSlide/>
      {/* Featured Products */}
      <SubHeadLine content={'Featured Products'}/>
      <div className="featured-products w-11/12 x:w-3/4 lg:w-[65%] mx-auto mb-24">
        <div className="grid grid-cols-2 gap-5">
          <div className="product-card">
            <div className="h-[350px] lg:h-[530px] bg-[url('~/assets/imgs/products/watch1.png')] bg-cover bg-no-repeat bg-center mb-9">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden
                  group-hover:block group-hover:animate-fadeIn w-11/12 py-2 lg:py-4 px-3 lg:px-6 bg-white
                  text-center tracking-widest font-semibold uppercase text-[13px] cursor-pointer hover:bg-opacity-95">
                    Explore watch
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-center items-center flex-col font-Karla">
              <a href="">
                <div className="text-black text-sm lg:text-xl mb-1 font-normal tracking-wider">
                  Timeless  Elegance
                </div>
              </a>
              <div className="text-gray-500 text-[10px] x:text-sm">$ 220.00 USD</div>
            </div>
          </div>
          <div className="product-card">
            <div className="h-[350px] lg:h-[530px] bg-[url('~/assets/imgs/products/watch2.png')] bg-cover bg-no-repeat bg-center mb-9">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden
                  group-hover:block group-hover:animate-fadeIn w-11/12 py-2 lg:py-4 px-3 lg:px-6 bg-white
                  text-center tracking-widest font-semibold uppercase text-[13px] cursor-pointer hover:bg-opacity-95">
                    Explore watch
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-center items-center flex-col font-Karla">
              <a href="">
                <div className="text-black text-sm lg:text-xl mb-1 font-normal tracking-wider">
                  Supreme  Sapphire
                </div>
              </a>
              <div className="text-gray-500 text-[10px] x:text-sm">$ 355.00 USD</div>
            </div>
          </div>
        </div>
      </div>
      {/* More Products */}
      <SubHeadLine content={'More Products'}/>
      <div className="featured-products w-11/12 x:w-3/4 lg:w-[65%] mx-auto mb-24">
        <div className="grid grid-rows-3 gap-5">
          <div className="grid grid-cols-3 gap-5">
            <div className="product-card mb-5">
              <div className="h-[200px] lg:h-[530px] bg-[url('~/assets/imgs/products/watch4.png')] bg-cover bg-no-repeat bg-center mb-3">
                <a href="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                  hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden
                    group-hover:block group-hover:animate-fadeIn w-11/12 py-2 lg:py-4 px-3 lg:px-6 bg-white
                    text-center tracking-widest font-semibold uppercase text-[10px] lg:text-[13px] cursor-pointer hover:bg-opacity-95">
                      Explore watch
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center flex-col font-Karla">
                <a href="">
                  <div className="text-black text-xs lg:text-lg mb-1 font-normal tracking-wider">
                    Timeless  Elegance
                  </div>
                </a>
                <div className="text-gray-500 text-[8px] x:text-xs">$ 220.00 USD</div>
              </div>
            </div>
            <div className="product-card mb-5">
              <div className="h-[200px] lg:h-[530px] bg-[url('~/assets/imgs/products/watch3.png')] bg-cover bg-no-repeat bg-center mb-3">
                <a href="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                  hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden
                    group-hover:block group-hover:animate-fadeIn w-11/12 py-2 lg:py-4 px-3 lg:px-6 bg-white
                    text-center tracking-widest font-semibold uppercase text-[10px] lg:text-[13px] cursor-pointer hover:bg-opacity-95">
                      Explore watch
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center flex-col font-Karla">
                <a href="">
                  <div className="text-black text-xs lg:text-lg mb-1 font-normal tracking-wider">
                    Supreme  Sapphire
                  </div>
                </a>
                <div className="text-gray-500 text-[8px] x:text-xs">$ 355.00 USD</div>
              </div>
            </div>
            <div className="product-card mb-5">
              <div className="h-[200px] lg:h-[530px] bg-[url('~/assets/imgs/products/watch5.png')] bg-cover bg-no-repeat bg-center mb-3">
                <a href="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                  hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden
                    group-hover:block group-hover:animate-fadeIn w-11/12 py-2 lg:py-4 px-3 lg:px-6 bg-white
                    text-center tracking-widest font-semibold uppercase text-[10px] lg:text-[13px] cursor-pointer hover:bg-opacity-95">
                      Explore watch
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center flex-col font-Karla">
                <a href="">
                  <div className="text-black text-xs lg:text-lg mb-1 font-normal tracking-wider">
                    Supreme  Sapphire
                  </div>
                </a>
                <div className="text-gray-500 text-[8px] x:text-xs">$ 355.00 USD</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="product-card mb-5">
              <div className="h-[200px] lg:h-[530px] bg-[url('~/assets/imgs/products/watch6.png')] bg-cover bg-no-repeat bg-center mb-3">
                <a href="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                  hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden
                    group-hover:block group-hover:animate-fadeIn w-11/12 py-2 lg:py-4 px-3 lg:px-6 bg-white
                    text-center tracking-widest font-semibold uppercase text-[10px] lg:text-[13px] cursor-pointer hover:bg-opacity-95">
                      Explore watch
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center flex-col font-Karla">
                <a href="">
                  <div className="text-black text-xs lg:text-lg mb-1 font-normal tracking-wider">
                    Timeless  Elegance
                  </div>
                </a>
                <div className="text-gray-500 text-[8px] x:text-xs">$ 220.00 USD</div>
              </div>
            </div>
            <div className="product-card mb-5">
              <div className="h-[200px] lg:h-[530px] bg-[url('~/assets/imgs/products/watch7.png')] bg-cover bg-no-repeat bg-center mb-3">
                <a href="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                  hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden
                    group-hover:block group-hover:animate-fadeIn w-11/12 py-2 lg:py-4 px-3 lg:px-6 bg-white
                    text-center tracking-widest font-semibold uppercase text-[10px] lg:text-[13px] cursor-pointer hover:bg-opacity-95">
                      Explore watch
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center flex-col font-Karla">
                <a href="">
                  <div className="text-black text-xs lg:text-lg mb-1 font-normal tracking-wider">
                    Supreme  Sapphire
                  </div>
                </a>
                <div className="text-gray-500 text-[8px] x:text-xs">$ 355.00 USD</div>
              </div>
            </div>
            <div className="product-card mb-5">
              <div className="h-[200px] lg:h-[530px] bg-[url('~/assets/imgs/products/watch8.png')] bg-cover bg-no-repeat bg-center mb-3">
                <a href="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                  hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden
                    group-hover:block group-hover:animate-fadeIn w-11/12 py-2 lg:py-4 px-3 lg:px-6 bg-white
                    text-center tracking-widest font-semibold uppercase text-[10px] lg:text-[13px] cursor-pointer hover:bg-opacity-95">
                      Explore watch
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center flex-col font-Karla">
                <a href="">
                  <div className="text-black text-xs lg:text-lg mb-1 font-normal tracking-wider">
                    Supreme  Sapphire
                  </div>
                </a>
                <div className="text-gray-500 text-[8px] x:text-xs">$ 355.00 USD</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="product-card mb-5">
              <div className="h-[200px] lg:h-[530px] bg-[url('~/assets/imgs/products/watch9.png')] bg-cover bg-no-repeat bg-center mb-3">
                <a href="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                  hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden
                    group-hover:block group-hover:animate-fadeIn w-11/12 py-2 lg:py-4 px-3 lg:px-6 bg-white
                    text-center tracking-widest font-semibold uppercase text-[10px] lg:text-[13px] cursor-pointer hover:bg-opacity-95">
                      Explore watch
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center flex-col font-Karla">
                <a href="">
                  <div className="text-black text-xs lg:text-lg mb-1 font-normal tracking-wider">
                    Timeless  Elegance
                  </div>
                </a>
                <div className="text-gray-500 text-[8px] x:text-xs">$ 220.00 USD</div>
              </div>
            </div>
            <div className="product-card mb-5">
              <div className="h-[200px] lg:h-[530px] bg-[url('~/assets/imgs/products/watch11.png')] bg-cover bg-no-repeat bg-center mb-3">
                <a href="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                  hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden
                    group-hover:block group-hover:animate-fadeIn w-11/12 py-2 lg:py-4 px-3 lg:px-6 bg-white
                    text-center tracking-widest font-semibold uppercase text-[10px] lg:text-[13px] cursor-pointer hover:bg-opacity-95">
                      Explore watch
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center flex-col font-Karla">
                <a href="">
                  <div className="text-black text-xs lg:text-lg mb-1 font-normal tracking-wider">
                    Supreme  Sapphire
                  </div>
                </a>
                <div className="text-gray-500 text-[8px] x:text-xs">$ 355.00 USD</div>
              </div>
            </div>
            <div className="product-card mb-5">
              <div className="h-[200px] lg:h-[530px] bg-[url('~/assets/imgs/products/watch10.png')] bg-cover bg-no-repeat bg-center mb-3">
                <a href="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                  hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden
                    group-hover:block group-hover:animate-fadeIn w-11/12 py-2 lg:py-4 px-3 lg:px-6 bg-white
                    text-center tracking-widest font-semibold uppercase text-[10px] lg:text-[13px] cursor-pointer hover:bg-opacity-95">
                      Explore watch
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center flex-col font-Karla">
                <a href="">
                  <div className="text-black text-xs lg:text-lg mb-1 font-normal tracking-wider">
                    Supreme  Sapphire
                  </div>
                </a>
                <div className="text-gray-500 text-[8px] x:text-xs">$ 355.00 USD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
