import ContextImageSection from "../components/ContextImageSection"

const GolfPackage = () => {
  return (
    <main className='blog HomeSchedule'>
            <title>3박5일 세부황제골프패키지포함사항/일정 | 세부밤문화No.1</title>  
            <meta name="description" content="3박 5일 세부 황제 골프 패키지! 전 일정 조/중/석 식사, 고급 풀빌라 3박, 단독 차량 픽업/드랍, 세부 에스코트걸과 54홀 골프 라운딩, 마사지, 대형 쇼핑몰 투어, 비키니바 또는 카지노 체험까지 포함된 완벽한 골프 여행 일정 안내." />
            <meta property="og:title" content="3박5일 세부황제골프패키지포함사항/일정 | 세부밤문화No.1" />
            <meta property="og:description" content="3박 5일 세부 황제 골프 패키지! 전 일정 조/중/석 식사, 고급 풀빌라 3박, 단독 차량 픽업/드랍, 세부 에스코트걸과 54홀 골프 라운딩, 마사지, 대형 쇼핑몰 투어, 비키니바 또는 카지노 체험까지 포함된 완벽한 골프 여행 일정 안내." />
        <meta property="og:image" content="https://www.cebueco.com/og-image.jpg" />
            <link rel="canonical" href="https://www.cebueco.com/golf/cebu-emperor-golf-package-details-schedule" />

        <div className="container">
            <h1 className="heading">3박5일 세부황제골프패키지포함사항/일정</h1>
            <ContextImageSection
              context={`
                ★전 일정 모든 조/중/석 식사 포함
                ( 풀빌라 삼겹살파티(바베큐)/과일 저녁식사)
                ★전 일정 업체보유 단독차량 제공 
                ★전일정 소주 맥주 생수 무제한제공
                (단 풀빌라외 외부식당 이용시 주류불포함)
                ★전 일정/단독 차량 픽업/드랍 포함
                ★전 일정 고급 풀빌라 3박                                 
                ★전 일정 세부 에코
                ★골프 3일(18홀+18홀+18홀=총54홀)
                ★세부 유명 JTV&비키니바 체험 방문 or 카지노체험
                ★고급 전신  마사지
                ★세부 대형 쇼핑몰 투어
              `}
              image={{
                src: "package1.jpg",
                alt: "golf club with people with umbrellas"
              }}
            />
            <ContextImageSection
              context={`
                ★1일차
                한국 출발 
                세부/막탄 국제공항 새벽도착
                가이드 미팅 후 이동 
                풀빌라 체크인 후 세부 에코 & 음주가무
              `}
            />
            <ContextImageSection
              context={`
                ★2일
                풀빌라 조식
                세부골프 클럽으로 이동
                세부 골프 클럽 18홀
                저녁식사 후 & 풀빌라휴식
              `}
            />
            <ContextImageSection
              context={`
                ★3일
                풀빌라 조식
                세부 골프 클럽으로 이동
                세부 골프 클럽 18홀
                풀빌라 삼겹살파티 바베큐
                저녁식사 후 풀빌라휴식
              `}
            />
            <ContextImageSection
              context={`
                  ★4일
                  풀빌라 조식 & 풀빌라 체크아웃
                  세부 골프 클럽으로 출발
                  세부 골프 클럽 18홀
                  전신 마사지 1시간
                  SM 대형쇼핑몰 투어
                  로컬 유명 레스토랑 저녁식사
                  세부 비키니바 체험  or 카지노투어                     
                  공항 샌딩/공항 드랍 후 한국 귀국
              `}
            />
        </div>
    </main>
  )
}

export default GolfPackage 