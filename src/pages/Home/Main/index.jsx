import CarouselSlide from '~/components/CarouselSlide'
import Parallax from '~/components/Parallax'
import Slider from '~/components/Slider'
import SubHeadLine from '~/components/SubHeadLine'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Main() {
  useEffect(() => {
    Aos.init({
      once: true
    })
  }, [])

  return (
    <main className='flex justify-center items-center flex-col'>
      <Slider/>
      <CarouselSlide/>
      {/* Featured Products */}
      <SubHeadLine content={'Featured Products'}/>
      <div className="featured-products w-full sm:w-10/12 lg:w-[65%] mx-auto mb-20">
        <div className="grid grid-cols-2 gap-5">
          <div className="product-card" data-aos="fade-up">
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
          <div className="product-card" data-aos="fade-up">
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
          <div className="product-card mb-5" data-aos="fade-up">
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
          <div className="product-card mb-5" data-aos="fade-up">
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
          <div className="product-card mb-5" data-aos="fade-up">
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
          <div className="product-card mb-5" data-aos="fade-up">
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
          <div className="product-card mb-5" data-aos="fade-up">
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
          <div className="product-card mb-5" data-aos="fade-up">
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
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-7 font-Karla" data-aos="fade-up">
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
      {/* Blog */}
      <div className="blog w-[95%] xl:w-[65%] mx-auto mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="blog-card">
            <div className="h-[300px] bg-[url('~/assets/imgs/products/blog1.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out
                  hover:duration-500 relative group">
                  <div className="common-btn absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden
                    group-hover:block group-hover:animate-fadeIn">Read Full</div>
                </div>
              </a>
            </div>
            <div className="my-5 font-Karla">
              <a href="">
                <div className="mb-3 text-xl hover:text-coffee">Innovations and trends in the watch</div>
              </a>
              <div className="mb-3 text-base text-gray-500">
                Our boutique is passage to the world of high-end horology, where history wraps around your wrist
              </div>
              <div className="uppercase text-xs tracking-widest font-semibold text-gray-500">April 30, 2024</div>
            </div>
          </div>
          <div className="blog-card">
            <div className="h-[300px] bg-[url('~/assets/imgs/products/blog2.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out
                  hover:duration-500 relative group">
                  <div className="common-btn absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden
                    group-hover:block group-hover:animate-fadeIn">Read Full</div>
                </div>
              </a>
            </div>
            <div className="my-5 font-Karla">
              <a href="">
                <div className="mb-3 text-xl hover:text-coffee">6 tips to match a watch with your outfit</div>
              </a>
              <div className="mb-3 text-base text-gray-500">
                Ready to dive into the fascinating world of watches and fashion? A watch is more than just a time-telling device
              </div>
              <div className="uppercase text-xs tracking-widest font-semibold text-gray-500">April 30, 2024</div>
            </div>
          </div>
          <div className="blog-card">
            <div className="h-[300px] bg-[url('~/assets/imgs/products/blog3.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out
                  hover:duration-500 relative group">
                  <div className="common-btn absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden
                    group-hover:block group-hover:animate-fadeIn">Read Full</div>
                </div>
              </a>
            </div>
            <div className="my-5 font-Karla">
              <a href="">
                <div className="mb-3 text-xl hover:text-coffee">Discover your style with a perfect and suitable watch</div>
              </a>
              <div className="mb-3 text-base text-gray-500">
                A watch is not only a timepiece. It is a trendy item that improves your particular style and finishes off your ensemble
              </div>
              <div className="uppercase text-xs tracking-widest font-semibold text-gray-500">April 30, 2024</div>
            </div>
          </div>
        </div>
      </div>
      {/* Subcribe */}
      <div className="subcribe bg-gray-900 w-full flex flex-col items-center justify-center font-Karla mb-20" data-aos="zoom-in">
        <div className="pt-20 pb-[85px] px-24 flex flex-col items-center justify-center w-full">
          <div className="text-gray-400 text-xs font-semibold tracking-widest">SIGN UP AND GET FREE OFFER</div>
          <div className="text-white text-4xl mt-[15px] mb-[25px]">Get All News</div>
          <div className="sub-info flex flex-col md:flex-row w-full justify-center items-center mx-auto gap-3">
            <input
              className='px-2 l:px-6 py-4 border-gray-700 hover:border-gray-400 focus:border-gray-400
              bg-inherit w-[250px] l:w-[350px] uppercase text-xs tracking-widest font-bold border-[1px] leading-5 text-white
              duration-300 ease-in-out'
              type="text"
              placeholder='customer@manstyle.io'/>
            <div className="common-btn bg-white max-h-[53.6px]">Subcribe</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
