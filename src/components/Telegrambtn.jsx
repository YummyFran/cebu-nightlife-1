import TelegramImage from '../assets/cta-telegram-btn.png'

const TelegramBtn = () => {
  return (
    <div className='telegram cta-btn'>
      <a
        href="https://t.me/CEBUCOCO"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={TelegramImage}
          alt="Telegram Chat"
          loading='lazy'
          width={380}
          height={240}
        />
      </a>
    </div>
  );
};

export default TelegramBtn;