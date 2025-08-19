import TwoCardLayout from '../components/TwoCardLayout'
import cardsData from '../data/cards.json'

const Golf = () => {
  return (
    <main>
        <title>세부 골프패키지 & 황제골프패키지 | 세부밤문화No.1</title>  
        <meta name="description" content="세부 골프패키지 & 황제골프패키지 완벽 안내! 황제 골프 일정과 포함사항, 인기 골프클럽 소개, 유용한 골프 팁까지 한눈에 확인해보세요." />
        <meta property="og:title" content="세부 골프패키지 & 황제골프패키지 | 세부밤문화No.1" />
        <meta property="og:description" content="세부 골프패키지 & 황제골프패키지 완벽 안내! 황제 골프 일정과 포함사항, 인기 골프클럽 소개, 유용한 골프 팁까지 한눈에 확인해보세요." />
        <meta property="og:image" content="https://www.cebueco.com/og-image.jpg" />
        <link rel="canonical" href="https://www.cebueco.com/golf" />

      <div className="container">
        <h1 className='heading'>세부 골프패키지 & 황제골프패키지</h1>
        <TwoCardLayout cards={cardsData.golf}/>
      </div> 
    </main>
  );
}

export default Golf