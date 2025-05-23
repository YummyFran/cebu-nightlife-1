import React from 'react'
import TwoCardLayout from '../components/TwoCardLayout'
import cardsData from '../data/cards.json'
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const EscortGirl = () => {
  const { pathname } = useLocation()
  
  return (
    <main> 
      <Helmet key={pathname}>
        <title>세부에스코트걸 & 에코걸 | 세부밤문화No.1</title>  
        <meta name="description" content="세부에스코트걸 & 에코걸 서비스를 만나보세요. 안전한 필리핀 여행 정보를 포함한 유익한 콘텐츠 제공! 세부에서 특별한 경험을 원하신다면 지금 확인하세요.세부 골프패키지 & 혼체골프패키지" />
        <meta property="og:title" content="세부에스코트걸 & 에코걸 | 세부밤문화No.1" />
        <meta property="og:description" content="세부에스코트걸 & 에코걸 서비스를 만나보세요. 안전한 필리핀 여행 정보를 포함한 유익한 콘텐츠 제공! 세부에서 특별한 경험을 원하신다면 지금 확인하세요.세부 골프패키지 & 혼체골프패키지" />
        <meta property="og:image" content="https://cebu-nightlife-1.vercel.app/og-image.jpg" />
      </Helmet>

      <div className="container">
        <h1 className='heading'>세부에스코트걸 & 에코걸</h1>
        <TwoCardLayout cards={cardsData.escortgirl}/>
      </div>
    </main>
  );
}

export default EscortGirl