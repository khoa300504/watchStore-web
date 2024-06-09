import CarouselSlide from '~/components/CarouselSlide'
import FeaturedProducts from '~/components/FeaturedProducts'
import Slider from '~/components/Slider'
import SubHeadLine from '~/components/SubHeadLine'

function Main() {
  return (
    <main className='flex justify-center items-center flex-col'>
      <Slider/>
      <CarouselSlide/>
      <SubHeadLine content={'Featured Products'}/>
      <FeaturedProducts/>

    </main>
  )
}

export default Main
