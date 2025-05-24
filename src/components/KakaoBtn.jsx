import KakaoImage from '../assets/cta-kakao-btn-orig.png'

const KakaoBtn = () => {
  return (
    <div className='kakao cta-btn'>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        style={{ pointerEvents: "none"}}
      >
        <img
          src={KakaoImage}
          alt="KakaoTalk Chat"
          loading='lazy'
          width={380}
          height={240}
        />
      </a>
    </div>
  );
};

export default KakaoBtn;
