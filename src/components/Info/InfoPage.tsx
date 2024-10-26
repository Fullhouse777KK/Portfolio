import s from './InfoPage.module.scss'
import html from '../../assets/images/html2.png'
import scss from '../../assets/images/sass2.png'
import js from '../../assets/images/JavaScript-logo.png'
import ts from '../../assets/images/Ts.png'
import react from '../../assets/images/react.png'
import me from '../../assets/images/me.jpg'
import git from '../../assets/images/git.png'
import vercel from '../../assets/images/vercel.png'

const InfoPage = () => {
  return (
    <>
    <div className={s.info__main}>
        <div className={s.info__top}>
        <h1 className={s.info__top_name}>Гафур Ахмедов 27 лет</h1>
        <img src={me} alt="" className={s.info__top_pic} />
        </div>
        <div className={s.info__bot}>
        <h2 className={s.info__bot_head}>Языки програмирования и инструменты которыми я владею:</h2>
        <div className={s.info__logos}>
            <a href="https://ru.wikipedia.org/wiki/HTML"><img src={html} alt="" className={s.info__logos_img} /></a>
            <a href="https://sass-lang.com/"><img src={scss} alt="" className={s.info__logos_img} /></a> 
            <a href="https://simple.wikipedia.org/wiki/JavaScript"><img src={js} alt="" className={s.info__logos_img} /></a> 
            <a href="https://www.typescriptlang.org/"><img src={ts} alt="" className={s.info__logos_img} /></a> 
            <a href="https://react.dev/"><img src={react} alt="" className={s.info__logos_img} /></a> 
            <a href="https://github.com/Fullhouse777KK"><img src={git} alt="" className={s.info__logos_img} /></a>
            <a href="https://vercel.com/gafurs-projects-10529ce1"><img src={vercel} alt="" className={s.info__logos_img} /></a>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default InfoPage