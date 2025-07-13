
import ContextImageSection from "../components/ContextImageSection"

const NightLifeLearn = () => {
  return (
    <main className='blog learn'>
        <title>필리핀말 배우기 | 세부밤문화No.1</title>  
        <meta name="description" content="필리핀 세부 여행 전 필수! 세부아노 기초 회화 배우기 | 세부 밤문화NO.1이 알려주는 에코걸과 소통하는 꿀팁! 따갈로그어와 다른 세부 지역 사투리 ‘세부아노’ 기본 표현 정리. 현지 문화를 이해하고 더 깊은 여행을 위한 필리핀어 가이드. 밤문화 풀빌라 패키지와 함께 즐기는 특별한 세부 경험!" />
        <meta property="og:title" content="필리핀말 배우기 | 세부밤문화No.1" />
        <meta property="og:description" content="필리핀 세부 여행 전 필수! 세부아노 기초 회화 배우기 | 세부 밤문화NO.1이 알려주는 에코걸과 소통하는 꿀팁! 따갈로그어와 다른 세부 지역 사투리 ‘세부아노’ 기본 표현 정리. 현지 문화를 이해하고 더 깊은 여행을 위한 필리핀어 가이드. 밤문화 풀빌라 패키지와 함께 즐기는 특별한 세부 경험!" />
        <meta property="og:image" content="https://www.cebueco.com/og-image.jpg" />
        <link rel="canonical" href="https://www.cebueco.com/nightlife/learn-filipino" />
        
        <div className="container">
            <h1 className="heading">필리핀말 배우기</h1>
            <ContextImageSection
              context={`             
                세부 밤문화 꽃 황제투어에 대해서 한 말씀드리자면
                한번도 안오신 분들은 있어도
                한번만 오시는 분들은 없다. ​ 
              `}
              image={{
                src: "learn1.jpg",
                alt: "gym girl selfie on mirror"
              }}
            />
            <ContextImageSection
              context={`
                세부밤문화NO.1 풀빌라 패키지를 이용하시는 대부분의 손님들은 
                ​아주 만족하시고 재 방문이 많으십니다. 
                물론 처음에 오실 때는 두려움과 설렘, 불안함이 가득하지만 
                ​막상 와보시면 모든 게 쓸데없는 걱정이라는 것을 곧 알게 되지요
                ​오늘은 간단한 필리핀 말 한번 배워보도록 할게요 
                한국에서 먼저 세부 말을 어느 정도 공부를 하고 간다면
                짝꿍에게 인기 만점!!
              `}
              image={{
                src: "learn2.jpg",
                alt: "philippines map"
              }}
            /> 
            <ContextImageSection
              context={`
                필리핀은 7107개의 섬으로 이루어진 섬나라로
                ​그 규모만 우리나라 면적의 3배에 달해요.
                필리핀의 수도인 마닐라에서는 따갈로그어를 사용하고 있는데,
                ​세부는 우리나라로 치면 지방이라서 지방사투리인 세부아노를 쓰고 있어요.
              `}
              image={{
                src: "learn3.jpg",
                alt: "learn filipino"
              }}
            />
            <ContextImageSection
              context={`
                세부아노 사용지역​
                각 지역마다 약간의 문화와 사용하는 언어가 다르기때문에
                마닐라여행에는 따갈로그어를
                ​세부여행에는 세부아노를 미리 알아간다면
                더 재미있는 여행이 될꺼에요!
                영어와 병행해서 쓰긴하지만, 어떤 나라로 여행을 갈때 
                ​​그 나라의 문화나 언어를 조금씩 알고간다면
                ​ 더 추억에 남는 의미있는 여행이 되지 않을까요?^^
              `}
              image={{
                src: "learn4.jpg",
                alt: "korean to cebuano"
              }}
            />  
            <ContextImageSection
              context={`
                적어도 이 정도의 말 정도는 영어 말고
                필리핀 말 세부아노로 말해주면
                짝꿍들이 정말 좋아한답니다^^
              `}
              image={{
                src: "learn5.jpg",
                alt: "pink swan"
              }}
            />
            <ContextImageSection
              context={`
                좀 더 알고 여행 가면
                ​좀 더 즐거운 여행이 되겠죠?^^​
                더 자세한 문의와 비용등 궁금하신거 있으시면 아래 카카오톡 & 텔레그램으로 문의주세요^^
              `}
            />
        </div>
    </main>
  )
}

export default NightLifeLearn