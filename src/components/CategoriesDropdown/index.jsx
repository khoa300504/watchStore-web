export default function CategoriesDropdown() {
  return (
    <div className="basis-1/6 flex flex-row justify-center cursor-pointer font-semibold
        text-gray-600 hover:text-gray-800 gap-1.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
          Categories
      {/* <ul className="dropdown-menu text-gray-500" hidden>
        <li>
          <a href="" className="dropdown-menu-item">Watch</a>
        </li>
        <li>
          <a href="" className="dropdown-menu-item">Glasses</a>
        </li>
        <li>
          <a href="" className="dropdown-menu-item">Accessory</a>
        </li>
        <li>
          <a href="" className="dropdown-menu-item">T-shirt</a>
        </li>
      </ul> */}
    </div>
  )
}
