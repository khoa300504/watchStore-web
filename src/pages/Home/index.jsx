import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Main from './Main'

function Home() {
  return (
    <div className='content-wrapper text-base mx-auto px-8 h-96'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home
