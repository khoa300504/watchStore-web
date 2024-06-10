import CarouselSlide from '~/components/CarouselSlide'
import Parallax from '~/components/Parallax'
import Slider from '~/components/Slider'
import SubHeadLine from '~/components/SubHeadLine'

function Main() {
  return (
    <main className='flex justify-center items-center flex-col'>
      <Slider/>
      <CarouselSlide/>
      {/* Featured Products */}
      <SubHeadLine content={'Featured Products'}/>
      <div className="featured-products w-full sm:w-10/12 lg:w-[65%] mx-auto mb-20">
        <div className="grid grid-cols-2 gap-5">
          <div className="product-card">
            <div className="h-[300px] lg:h-[530px] bg-[url('~/assets/imgs/products/watch1.png')] bg-cover bg-no-repeat bg-center mb-9">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                  <div className="explore-btn">
                    Explore watch
                  </div>
                </div>
              </a>
            </div>
            <dism className="flex justify-center items-center flex-col font-Karla">
              <a href="">
                <div className="text-black text-xs sm:text-sm lg:text-xl mb-1 font-normal tracking-wider">
                  Timeless  Elegance
                </div>
              </a>
              <div className="text-gray-500 text-xs sm:text-sm">$ 220.00 USD</div>
            </dism>
          </div>
          <div className="product-card">
            <div className="h-[300px] lg:h-[530px] bg-[url('~/assets/imgs/products/watch2.png')] bg-cover bg-no-repeat bg-center mb-9">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                  <div className="explore-btn">
                    Explore watch
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-center items-center flex-col font-Karla">
              <a href="">
                <div className="text-black text-xs sm:text-sm lg:text-xl mb-1 font-normal tracking-wider">
                  Supreme  Sapphire
                </div>
              </a>
              <div className="text-gray-500 text-xs sm:text-sm">$ 355.00 USD</div>
            </div>
          </div>
        </div>
      </div>
      {/* More Products */}
      <SubHeadLine content={'More Products'}/>
      <div className="more-products w-[70%] x:w-[95%] xl:w-[65%] mx-auto mb-20">
        <div className="grid grid-cols-1 x:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="product-card mb-5">
            <div className="h-[380px] bg-[url('~/assets/imgs/products/watch4.png')] bg-cover bg-no-repeat bg-center mb-3 lg:mb-5">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                  <div className="explore-btn">
                    Explore watch
                  </div>
                </div>
              </a>
            </div>
            <dism className="flex justify-center items-center flex-col font-Karla">
              <a href="">
                <div className="text-black text-sm lg:text-base mb-1 font-normal tracking-wider">
                  Timeless  Elegance
                </div>
              </a>
              <div className="text-gray-500 text-xs sm:text-sm">$ 220.00 USD</div>
            </dism>
          </div>
          <div className="product-card mb-5">
            <div className="h-[380px] bg-[url('~/assets/imgs/products/watch10.png')] bg-cover bg-no-repeat bg-center mb-3 lg:mb-5">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                  <div className="explore-btn">
                    Explore watch
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-center items-center flex-col font-Karla">
              <a href="">
                <div className="text-black text-sm lg:text-base mb-1 font-normal tracking-wider">
                  Supreme  Sapphire
                </div>
              </a>
              <div className="text-gray-500 text-xs sm:text-sm">$ 355.00 USD</div>
            </div>
          </div>
          <div className="product-card mb-5">
            <div className="h-[380px] bg-[url('~/assets/imgs/products/watch6.png')] bg-cover bg-no-repeat bg-center mb-3 lg:mb-5">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                  <div className="explore-btn">
                    Explore watch
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-center items-center flex-col font-Karla">
              <a href="">
                <div className="text-black text-sm lg:text-base mb-1 font-normal tracking-wider">
                  Supreme  Sapphire
                </div>
              </a>
              <div className="text-gray-500 text-xs sm:text-sm">$ 355.00 USD</div>
            </div>
          </div>
          <div className="product-card mb-5">
            <div className="h-[380px] bg-[url('~/assets/imgs/products/watch7.png')] bg-cover bg-no-repeat bg-center mb-3 lg:mb-5">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                  <div className="explore-btn">
                    Explore watch
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-center items-center flex-col font-Karla">
              <a href="">
                <div className="text-black text-sm lg:text-base mb-1 font-normal tracking-wider">
                  Supreme  Sapphire
                </div>
              </a>
              <div className="text-gray-500 text-xs sm:text-sm">$ 355.00 USD</div>
            </div>
          </div>
          <div className="product-card mb-5">
            <div className="h-[380px] bg-[url('~/assets/imgs/products/watch9.png')] bg-cover bg-no-repeat bg-center mb-3 lg:mb-5">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                  <div className="explore-btn">
                    Explore watch
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-center items-center flex-col font-Karla">
              <a href="">
                <div className="text-black text-sm lg:text-base mb-1 font-normal tracking-wider">
                  Supreme  Sapphire
                </div>
              </a>
              <div className="text-gray-500 text-xs sm:text-sm">$ 355.00 USD</div>
            </div>
          </div>
          <div className="product-card mb-5">
            <div className="h-[380px] bg-[url('~/assets/imgs/products/watch11.png')] bg-cover bg-no-repeat bg-center mb-3 lg:mb-5">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
                hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                  <div className="explore-btn">
                    Explore watch
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-center items-center flex-col font-Karla">
              <a href="">
                <div className="text-black text-sm lg:text-base mb-1 font-normal tracking-wider">
                  Supreme  Sapphire
                </div>
              </a>
              <div className="text-gray-500 text-xs sm:text-sm">$ 355.00 USD</div>
            </div>
          </div>
        </div>
      </div>
      {/* shopping discount */}
      <SubHeadLine content={'Gift for orders over 2 million'} />
      <div className="shopping-discount w-[90%] lg:w-[65%] mx-auto mb-20">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-7 font-Karla">
          <div className="discount-post basis-1/2 text-center lg:text-left">
            <div className="uppercase tracking-widest font-medium text-gray-500 text-[14px]">PREMIUM OFFER</div>
            <div className="text-4xl font-normal mb-4 mt-3">Get our discount now</div>
            <div className="text-base mb-4 text-gray-500">Receive one of three gifts with purchases from 2 million.</div>
            <div className="common-btn bg-gray-950 text-white w-max mx-auto lg:mx-0">START SHOPPING</div>
          </div>
          <div className="discount-images basis-1/2 l:flex l:flex-row gap-3 w-full mb-5 lg:mb-0">
            <div className="discount-big-image h-[280px] l:h[h-350px] md:h-[350px] lg:h-[280px] basis-3/5 mb-5 l:mb-0
              bg-[url('~/assets/imgs/products/gift3.jpg')] bg-cover bg-no-repeat bg-center">
            </div>
            <div className="discount-small-images basis-2/5 flex flex-row l:flex-col gap-5">
              <div className="h-[130px] basis-1/2 bg-[url('~/assets/imgs/products/gift1.jpg')] bg-cover bg-no-repeat bg-center">
              </div>
              <div className="h-[130px] basis-1/2 bg-[url('~/assets/imgs/products/gift2.jpg')] bg-cover bg-no-repeat bg-center">
              </div>
            </div>
          </div>
        </div>
      </div>
      <Parallax/>
    </main>
  )
}

export default Main
