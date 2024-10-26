import { useTranslation } from 'react-i18next';
import s from './MainPage.module.scss'
const MainPage = () => {

  const { t } = useTranslation();
  return (
    <>
    <div className={s.main}>
    <h1 className={s.welcome__top}>Меня зовут Гафур и я Frontend developer.</h1>
    <h2 className={s.welcome__bot}>Это сайт портфолио на котором вы можете увидеть мои прошлые работы, получить информацию по моим навыкам, а так же узнать как со мной связаться.</h2>
    </div>
    </>
  )
}

export default MainPage