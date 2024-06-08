function Slider() {
  return (
    <div className="slider h-[530px] bg-[url('~/assets/imgs/slider-bg.jpg')] bg-cover bg-no-repeat bg-center w-[94%]">
      <div className="w-full h-full flex justify-start items-center bg-gray-700 bg-opacity-15">
        <div className="mx-16 lg:mx-36 text-black text-center font-Karla">
          <div className="uppercase text-sm font-semibold mb-5">Discover our collection</div>
          <div className="font-medium text-5xl mb-6">Man watches</div>
          <div className="font-semibold text-lg mb-7">Fashionable watches for every occasion.</div>
          <div className="flex justify-center font-semibold">
            <div className="uppercase bg-light-coffee w-max tracking-widest py-4 px-6 text-xs text-gray-50
             cursor-pointer hover:bg-opacity-90">
            View Collection
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider