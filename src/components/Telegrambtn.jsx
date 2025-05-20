import TelegramImage from '../assets/cta-telegram-btn.jpg'

const TelegramBtn = () => {
  return (
    <div className='telegram cta-btn'>
      <a
        href="https://t.me/your_telegram_username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={TelegramImage}
          alt="Telegram Chat"
        />
      </a>
    </div>
  );
};

export default TelegramBtn;