
import Sched1 from '../assets/Schdule1.jpg'
import ContextImageSection from '../components/ContextImageSection'

const PoolVillaSchdule= () => {
  return (
    <main className='blog schedule'>
        <title>3박5일 풀빌라 패키지&황제투어 4인기준 포함사항 & 일정표| 세부밤문화No.1</title>  
        <meta name="description" content="3박5일 세부 풀빌라 패키지 & 황제투어! 전 일정 식사, 에코걸 2일, 단독보트 호핑, 고급 마사지, 시티투어까지 포함된 프리미엄 밤문화 여행 코스—4인 기준 완벽한 힐링 일정표 확인하세요." />
        <meta property="og:title" content="3박5일 풀빌라 패키지&황제투어 4인기준 포함사항 & 일정표 | 세부밤문화No.1" />
        <meta property="og:description" content="3박5일 세부 풀빌라 패키지 & 황제투어! 전 일정 식사, 에코걸 2일, 단독보트 호핑, 고급 마사지, 시티투어까지 포함된 프리미엄 밤문화 여행 코스—4인 기준 완벽한 힐링 일정표 확인하세요." />
        <meta property="og:image" content="https://www.cebueco.com/og-image.jpg" />
        <link rel="canonical" href="https://www.cebueco.com/poolvilla/schedule" />
        
        <div className="container">
            <h1 className='heading'>3박5일 풀빌라 패키지&황제투어 4인기준 포함사항 & 일정표</h1>
            
            <ContextImageSection 
                context={`
                    ★ 전 일정 조/중/석 식사 포함 (석식: 풀빌라 바베큐파티 1회 포함)
                    ★전일정 소주 맥주 생수 무제한제공
                    (단 풀빌라외 외부식당 이용시 주류불포함)
                    ★ 전 일정 차량 픽업/드롭
                    ★ 세부 럭셔리 풀빌라 3박
                    ★ 전 일정 세부 에코
                    ★ 업체 보유 단독보트 아일랜드 호핑
                    ★ 고급 전신 마사지 2회 포함
                    ★ 세부 시티투어 & 카지노 탐방 & 개인 쇼핑 시간
                `}
                image={{
                    src: 'Schdule1.jpg',
                    alt: '풀빌라 이미지'
                }}
            />
            <section>
                <h2>1일차</h2>
                    <p>세부/막탄 국제공항 새벽도착</p>
                    <p>가이드 미팅 후 풀빌라로이동</p>
                    <p>풀빌라 체크인 후 세부에코 & 간단한 음주가무&휴식<br/><br/></p>
                <h3>2일차</h3>
                    <p>풀빌라 조식</p>
                    <p>현지맛집탐방로컬 &한식 선택가능(점심식사)</p>
                    <p>세부 짝퉁 시장 체험 후 마사지 1시간</p>
                    <p>저녁식사 풀빌라 삼겹살파티</p>
                    <p>저녁식사 후 음주가무 & 휴식<br/><br/></p>
                <h4>3일차</h4>
                    <p>풀빌라 조식 </p>
                    <p>업체보유 단독보트 아일랜드 호핑 투어</p>
                    <p>선상점심식사(바베큐/씨푸드/음료/과일)</p>
                    <p>고급 아로마 전신 마사지 </p>
                    <p>풀빌라 복귀 후 휴식</p>
                    <p>저녁식사 후 음주가무 & 휴식<br/><br/></p>
                <h5>4일차</h5>
                    <p>풀빌라 조식 후 체크아웃</p>
                    <p>세부 시티 유적지 투어 or 카지노탐방</p>
                    <p>도교사원&마젤란십자가&산토니뇨대성당</p>
                    <p>로컬 패스푸드 졸리비&맥도널드 선택(점심식사)</p>
                    <p>고급 아로마 전신 마사지</p>
                    <p>세부유명 대형쇼핑몰 투어</p>
                    <p>세부 로컬맛집(저녁식사) </p>
                    <p>세부 로컬야시장체험</p>
                    <p>세부 로컬비키니바 체험</p>
                    <p>공항 샌딩 / 공항 드랍 / 한국 귀국<br/><br/></p>
            </section>
        </div>
    </main>
  )
}

export default PoolVillaSchdule