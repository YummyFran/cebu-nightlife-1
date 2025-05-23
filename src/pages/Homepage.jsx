import Carousel from '../components/Carousel'
import Banner1 from '../assets/banner1.jpg'
import Banner2 from '../assets/banner4.jpg'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

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
  const { pathname } = useLocation()

  return (
    <main id='homepage'>
        <Helmet key={pathname}>
            <title>세부밤문화No.1</title>  
            <meta name="description" content="세부 풀빌라 패키지와 황제 패키지 투어 설명 이미지 – 야간 수영장 사진과 여행 일정표 포함, 카카오톡 및 텔레그램 상담 안내 포함" />
            <meta property="og:title" content="세부밤문화No.1" />
            <meta property="og:description" content="세부 풀빌라 패키지와 황제 패키지 투어 설명 이미지 – 야간 수영장 사진과 여행 일정표 포함, 카카오톡 및 텔레그램 상담 안내 포함" />
            <meta property="og:image" content="https://cebu-nightlife-1.vercel.app/og-image.jpg" />
        </Helmet>
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