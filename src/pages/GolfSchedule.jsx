import React from 'react'
import KakaoBtn from '../components/KakaoBtn'
import TelegramBtn from '../components/Telegrambtn'
const GolfSchedule = () => {
  return (
    <main className='HomeSchedule'>
        <div className="container-schedule">
            
            <div className="btns">
                <KakaoBtn/>
                <TelegramBtn/>
            </div>
        </div>
    </main>
  )
}

export default GolfSchedule