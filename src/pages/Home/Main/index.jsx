import CarouselSlide from '~/components/CarouselSlide'
import Slider from '~/components/Slider'

function Main() {
  return (
    <main className='flex justify-center items-center flex-col'>
      <Slider/>
      <CarouselSlide/>
    </main>
  )
}

export default Main