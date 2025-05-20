import KakaoBtn from './KakaoBtn'
import TelegramBtn from './Telegrambtn'
import "../styles/ctaButtons.css"

const CTAButtons = () => {
  return (
    <div className='cta-buttons'>
      <KakaoBtn />
      <TelegramBtn />
    </div>
  )
}

export default CTAButtons