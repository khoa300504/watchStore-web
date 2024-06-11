function Footer() {
  return (
    <footer className="h-64 w-[95%] lg:w-[65%] mx-auto">
      <div className="flex flex-col text-center sm:text-left sm:flex-row gap-7 font-Karla w-full">
        <div className="basis-2/6">
          <div className="font-Pacifico text-xl">ManStyle.</div>
          <div className="text-sm text-gray-500 mt-3 mb-3">
            Explore our curated collection of world brands and discover the perfect watch to match your style and personality.</div>
          <div className="text-sm text-gray-500 hover:text-coffee">ManStyle Inc. © 2024</div>
        </div>
        <div className="basis-1/6">
          <div className="uppercase font-semibold text-base tracking-wide text-gray-700 mb-3">Menu</div>
          <div className="flex flex-col gap-1">
            <div className=""><a href="" className="text-sm text-gray-500 hover:text-coffee">Home</a></div>
            <div className=""><a href="" className="text-sm text-gray-500 hover:text-coffee">Products</a></div>
            <div className=""><a href="" className="text-sm text-gray-500 hover:text-coffee">Blog</a></div>
            <div className=""><a href="" className="text-sm text-gray-500 hover:text-coffee">Contact</a></div>
            <div className=""><a href="" className="text-sm text-gray-500 hover:text-coffee">About</a></div>
          </div>
        </div>
        <div className="basis-1/6">
          <div className="uppercase font-semibold text-base tracking-wide text-gray-700 mb-3">Follow Us</div>
          <div className="flex flex-col gap-1">
            <div className=""><a href="" className="text-sm text-gray-500 hover:text-coffee">Facebook</a></div>
            <div className=""><a href="" className="text-sm text-gray-500 hover:text-coffee">Instagram</a></div>
            <div className=""><a href="" className="text-sm text-gray-500 hover:text-coffee">Printerest</a></div>
            <div className=""><a href="" className="text-sm text-gray-500 hover:text-coffee">Youtube</a></div>
          </div>
        </div>
        <div className="basis-2/6 mb-3 sm:md-0">
          <div className="uppercase font-semibold text-base tracking-wide text-gray-700 mb-3">Contact Us</div>
          <div className="">
            <div className="text-sm text-gray-500 mt-3 mb-3">We Are Alway Happy To Help</div>
            <div className="text-xl tracking-wide font-medium">tkhoa.dev@gmail.com</div>
            <div className="text-sm text-gray-500 hover:text-coffee">Powered by TuanKhoa Author</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer