import ContextImageSection from "../components/ContextImageSection"

const GolfPackage = () => {
  return (
    <main className='blog HomeSchedule'>
        <div className="container">
            <h1 className="heading">3박5일 세부황제골프패키지포함사항/일정</h1>
            <ContextImageSection
              context={`
                전 일정 모든 조/중/석 식사 포함
                ( 풀빌라 삼겹살파티(바베큐)/과일 저녁식사)
                전 일정 업체보유 단독차량 제공 
                전 일정/단독 차량 픽업/드랍 포함전 일정 고급 풀빌라 3박                                 
                전 일정 세부 에스코트걸골프 3일(18홀+18홀+18홀=총54홀)
                세부 유명 JTV&비키니바 체험 방문 or 카지노체험
                고급 전신  마사지
                세부 대형 쇼핑몰 투어
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
                풀빌라 체크인 후 세부에코 미팅
              `}
            />
            <ContextImageSection
              context={`
                ★2일
                풀빌라 조식
                세부골프 클럽으로 이동
                세부 골프 클럽 18홀
                저녁식사 후 세부에코미팅 & 풀빌라휴식
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