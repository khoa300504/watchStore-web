function FeaturedProducts() {
  return (
    <div className="featured-products w-[65%] mx-auto mb-24">
      <div className="grid grid-cols-2 gap-5">
        <div className="product-card">
          <div className="h-[530px] bg-[url('~/assets/imgs/products/timeless.jpg')] bg-cover bg-no-repeat bg-center mb-9">
            <a href="">
              <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
              hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden
                group-hover:block group-hover:animate-fadeIn w-11/12 py-4 px-6 bg-white
                text-center tracking-widest font-semibold uppercase text-[13px] cursor-pointer hover:bg-opacity-95">
                  Explore watch
                </div>
              </div>
            </a>
          </div>
          <div className="flex justify-center items-center flex-col font-Karla">
            <a href="">
              <div className="text-black text-xl mb-1 font-normal tracking-wider">
                Timeless  Elegance
              </div>
            </a>
            <div className="text-gray-500 text-sm">$ 220.00 USD</div>
          </div>
        </div>

        <div className="product-card">
          <div className="h-[530px] bg-[url('~/assets/imgs/products/supreme.jpg')] bg-cover bg-no-repeat bg-center mb-9">
            <a href="">
              <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-5
              hover:transition-all hover:duration-300 hover:ease-in-out relative group">
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden
                group-hover:block group-hover:animate-fadeIn w-11/12 py-4 px-6 bg-white
                text-center tracking-widest font-semibold uppercase text-[13px] cursor-pointer hover:bg-opacity-95">
                  Explore watch
                </div>
              </div>
            </a>
          </div>
          <div className="flex justify-center items-center flex-col font-Karla">
            <a href="">
              <div className="text-black text-xl mb-1 font-normal tracking-wider">
                Supreme  Sapphire
              </div>
            </a>
            <div className="text-gray-500 text-sm">$ 355.00 USD</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
