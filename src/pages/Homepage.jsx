import Carousel from '../components/Carousel'
import Banner1 from '../assets/banner1.jpg'
import Banner2 from '../assets/banner4.jpg'
import BannerMobile from '../assets/banner-mobile.jpg'

const carouselImages = [
  {
    src: Banner1,
    position: "right"
  }, {
    src: Banner2,
    position: "center"
  }
]

const carouserImagesMobile = [
  {
    src: BannerMobile,
    position: "center"
  }
]

const Homepage = () => {

  return (
    <main id='homepage'>
            <title>세부밤문화No.1</title>  
            <meta name="description" content="세부 풀빌라 패키지와 황제 패키지 투어 설명 이미지 – 야간 수영장 사진과 여행 일정표 포함, 카카오톡 및 텔레그램 상담 안내 포함" />
            <meta property="og:title" content="세부밤문화No.1" />
            <meta property="og:description" content="세부 풀빌라 패키지와 황제 패키지 투어 설명 이미지 – 야간 수영장 사진과 여행 일정표 포함, 카카오톡 및 텔레그램 상담 안내 포함" />
            <meta property="og:image" content="https://cebu-nightlife-1.vercel.app/og-image.jpg" />
        <Carousel images={carouselImages} className="desktop">
            <header className="hero">
                <h1 className='heading'>세부의 밤을 즐기는 가장 완벽한 방법</h1>
            </header>
        </Carousel>
        <Carousel images={carouserImagesMobile} className="mobile">
            <header className="hero">
                <h1 className='heading'>세부밤문화 정보를 찾는 중이신가요?</h1>
                <h2 className="subheading">
                  지인 혹 친구들과 가는여행 잊지못할 밤문화여행 하셔야 겠지요.
                  <br/>
                  필리핀 치안,밤문화 불안감 등은 접어두시고 
                  <br />
                  환상의섬 세부에서 힐링여행 어떠신가요?
                </h2>
            </header>
        </Carousel>
    </main>
  )
}

export default Homepage