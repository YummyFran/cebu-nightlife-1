import TwoCardLayout from '../components/TwoCardLayout'
import cardsData from '../data/cards.json'

const NightLife = () => {
  
  return (
    <main> 
        <title>세부밤문화 TIP | 세부밤문화No.1</title>  
        <meta name="description" content="세부 밤문화 TIP 총정리! 최고의 시즌, 필리핀말 배우기, 레이디보이 문화까지—세부의 밤을 제대로 즐기기 위한 모든 정보를 지금 확인하세요." />
        <meta property="og:title" content="세부밤문화 TIP | 세부밤문화No.1" />
        <meta property="og:description" content="세부 밤문화 TIP 총정리! 최고의 시즌, 필리핀말 배우기, 레이디보이 문화까지—세부의 밤을 제대로 즐기기 위한 모든 정보를 지금 확인하세요." />
        <meta property="og:image" content="https://www.cebueco.com/og-image.jpg" />
        <link rel="canonical" href="https://www.cebueco.com/nightlife" />

      
      <div className="container">
        <h1 className='heading'>세부밤문화 TIP</h1>
        <TwoCardLayout cards={cardsData.nightlife}/>
      </div>
    </main>
  );
}

export default NightLife