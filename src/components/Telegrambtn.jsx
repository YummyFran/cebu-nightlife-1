import React from 'react';

const TelegramBtn = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <a
        href="https://t.me/your_telegram_username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://telegram.org/img/t_logo.png"
          alt="Telegram Chat"
        />
      </a>
    </div>
  );
};

export default TelegramBtn;