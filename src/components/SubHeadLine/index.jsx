function SubHeadLine({ content }) {
  return (
    <div className="sub-head-line mb-16 flex justify-center items-center">
      <div className="sub-head-deco-line w-10 h-px bg-gray-200"></div>
      <div className="sub-head-line-label uppercase font-Karla mx-4
      tracking-widest font-medium text-gray-500 text-[14px] text-center">{content}</div>
      <div className="sub-head-deco-line w-10 h-px bg-gray-200"></div>
    </div>
  )
}

export default SubHeadLine