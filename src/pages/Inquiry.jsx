import React from 'react'
import TwoCardLayout from '../components/TwoCardLayout'
import cardsData from '../data/cards.json'
import ContextImageSection from '../components/ContextImageSection';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const Inquiry = () => {
  const { pathname } = useLocation()

  return (
    <main className='blog'>
      <Helmet key={pathname}>
        <title>1:1문의 | 세부밤문화No.1</title>  
        <meta name="description" content="세부 풀빌라 패키지와 황제 패키지 투어 설명 이미지 – 야간 수영장 사진과 여행 일정표 포함, 카카오톡 및 텔레그램 상담 안내 포함" />
        <meta property="og:title" content="1:1문의 | 세부밤문화No.1" />
        <meta property="og:description" content="세부 풀빌라 패키지와 황제 패키지 투어 설명 이미지 – 야간 수영장 사진과 여행 일정표 포함, 카카오톡 및 텔레그램 상담 안내 포함" />
        <meta property="og:image" content="https://cebu-nightlife-1.vercel.app/og-image.jpg" />
      </Helmet>
            
      <div className="container">
        <h1 className='heading'>1:1문의</h1>
        <ContextImageSection
          context={`
            [r]안전 한 업체, 믿을만한 업체, 문제가 생겨도 처리할 수 있는 능력이 있는 업체
            [r]세부밤문화 NO.1과 함께 하시면됩니다!
            지인 혹 친구들과 가는여행 잊지못할 밤문화여행 하셔야 겠지요.
            필리핀 치안,밤문화 불안감 등은 접어두시고
            환상의섬 세부에서 에코걸과 힐링여행 어떠신가요?
          `}
        />
        <ContextImageSection
          context={`
            더 자세한 문의와 비용등 궁금하신거 있으시면 아래 카카오톡 & 텔레그램으로 문의주세요^^
          `}
        />
      </div> 
    </main>
  );
}

export default Inquiry