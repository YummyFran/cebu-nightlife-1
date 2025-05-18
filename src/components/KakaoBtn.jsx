import React from 'react';

const KakaoBtn = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <a
        href="https://pf.kakao.com/_your_kakao_channel_id"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="KakaoTalk Chat"
        />
      </a>
    </div>
  );
};

export default KakaoBtn;
