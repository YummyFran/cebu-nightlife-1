import KakaoImage from '../assets/cta-kakao-btn.jpg'

const KakaoBtn = () => {
  return (
    <div className='kakao cta-btn'>
      <a
        href="https://pf.kakao.com/_your_kakao_channel_id"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={KakaoImage}
          alt="KakaoTalk Chat"
        />
      </a>
    </div>
  );
};

export default KakaoBtn;
