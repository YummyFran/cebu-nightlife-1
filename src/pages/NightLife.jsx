import React from 'react'
import TwoCardLayout from '../components/TwoCardLayout'
import cardsData from '../data/cards.json'
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const NightLife = () => {
  const { pathname } = useLocation()
  
  return (
    <main> 
      <Helmet key={pathname}>
        <title>세부밤문화 TIP | 세부밤문화No.1</title>  
        <meta name="description" content="세부 풀빌라 패키지와 황제 패키지 투어 설명 이미지 – 야간 수영장 사진과 여행 일정표 포함, 카카오톡 및 텔레그램 상담 안내 포함" />
        <meta property="og:title" content="세부밤문화 TIP | 세부밤문화No.1" />
        <meta property="og:description" content="세부 풀빌라 패키지와 황제 패키지 투어 설명 이미지 – 야간 수영장 사진과 여행 일정표 포함, 카카오톡 및 텔레그램 상담 안내 포함" />
        <meta property="og:image" content="https://cebu-nightlife-1.vercel.app/og-image.jpg" />
      </Helmet>
      
      <div className="container">
        <h1 className='heading'>세부밤문화 TIP</h1>
        <TwoCardLayout cards={cardsData.nightlife}/>
      </div>
    </main>
  );
}

export default NightLife