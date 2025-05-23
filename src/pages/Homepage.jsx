import Carousel from '../components/Carousel'
import Banner1 from '../assets/banner1.jpg'
import Banner2 from '../assets/banner4.jpg'
import BannerMobile from '../assets/banner-mobile.jpg'
import KakaoBtnWhite from '../components/KakaoBtnWhite'
import TelegramBtnWhite from '../components/TelegrambtnWhite'
import { useEffect, useState } from 'react'

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

const breakpoint = 768

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint])

  return (
    <main id='homepage'>
            <title>세부밤문화No.1</title>  
            <meta name="description" 
              content="세부밤문화, 세부아이콘, 세부나이트, 세부황제투어, 세부에코걸, 세부골프, 세부에스코트걸, 세부황제관광, 세부황제골프, 세부클럽, 세부풀빌라, 세부ktv, 세부jtv" 
            />
            <meta property="og:title" content="세부밤문화No.1" />
            <meta property="og:description" content="세부 풀빌라 패키지와 황제 패키지 투어 설명 이미지 – 야간 수영장 사진과 여행 일정표 포함, 카카오톡 및 텔레그램 상담 안내 포함" />
        <meta property="og:image" content="https://www.cebueco.com/og-image.jpg" />
        <Carousel images={isMobile ? carouserImagesMobile : carouselImages}>
            <header className="hero">
                <h1 className='heading'><span className='black'>세부밤문화</span> 정보를 찾는 중이신가요?</h1>
                <h2 className="subheading">
                  지인 혹 친구들과 가는여행 잊지못할 밤문화여행 하셔야 겠지요.
                  <br/>
                  필리핀 치안,밤문화 불안감 등은 접어두시고 
                  <br />
                  환상의섬 세부에서 힐링여행 어떠신가요?
                </h2>
                <div className="cta">
                  <KakaoBtnWhite />
                  <TelegramBtnWhite />
                </div>
            </header>
        </Carousel>
    </main>
  )
}

export default Homepage