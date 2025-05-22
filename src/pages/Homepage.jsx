import Carousel from '../components/Carousel'
import Banner1 from '../assets/banner1.jpg'
import Banner2 from '../assets/banner4.jpg'

const carouselImages = [
  {
    src: Banner1,
    position: "right"
  }, {
    src: Banner2,
    position: "center"
  }
]

const Homepage = () => {
  return (
    <main id='homepage'>
        <Carousel images={carouselImages}>
            <header className="hero">
                <h1 className='heading'>세부의 밤을 즐기는 가장 완벽한 방법</h1>
                <h2 className='subheading'>화려한 클럽부터 숨겨진 바와 야식 명소까지, 세부의 밤문화를 완벽하게 안내해 드립니다.</h2>
            </header>
        </Carousel>
    </main>
  )
}

export default Homepage