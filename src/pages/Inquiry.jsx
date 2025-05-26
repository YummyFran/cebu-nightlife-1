
import ContextImageSection from '../components/ContextImageSection';

const Inquiry = () => {

  return (
    <main className='blog'>
        <title>1:1문의 | 세부밤문화No.1</title>  
        <meta name="description" content="세부 밤문화 여행, 믿을 수 있는 1:1문의로 시작하세요! 안전하고 확실한 업체와 함께 필리핀 세부에서 잊지 못할 에코걸 힐링 여행을 즐겨보세요. 카카오톡 & 텔레그램 문의 가능!" />
        <meta property="og:title" content="1:1문의 | 세부밤문화No.1" />
        <meta property="og:description" content="세부 밤문화 여행, 믿을 수 있는 1:1문의로 시작하세요! 안전하고 확실한 업체와 함께 필리핀 세부에서 잊지 못할 에코걸 힐링 여행을 즐겨보세요. 카카오톡 & 텔레그램 문의 가능!" />
        <meta property="og:image" content="https://www.cebueco.com/og-image.jpg" />
        <link rel="canonical" href="https://www.cebueco.com/inquiry" />
            
      <div className="container" style={{paddingTop: "3rem"}}>
            <ContextImageSection
              image={{
                src: "PoolVilla1.jpg",
                alt: "pool"
              }}
            />
        <ContextImageSection
          context={`
            [r]안전 한 업체, 믿을만한 업체, 
            [r]문제가 생겨도 처리할 수 있는 능력이 있는 업체
            [r]세부밤문화 NO.1과 함께 하시면됩니다!
            지인 혹 친구들과 가는여행 잊지못할 밤문화여행 하셔야 겠지요.
            필리핀 치안,밤문화 불안감 등은 접어두시고
            환상의섬 세부에서 에코걸과 힐링여행 어떠신가요?
            더 자세한 문의와 비용등 궁금하신거 있으시면 
            아래 카카오톡 & 텔레그램으로 문의주세요^^
          `}
        />
      </div> 
    </main>
  );
}

export default Inquiry