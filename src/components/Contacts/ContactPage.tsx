import s from './ContactPage.module.scss'
import tg from '../../assets/images/telegram.png'
import phone from '../../assets/images/telephone-symbol-button.png'
import email from '../../assets/images/envelope.png'

const ContactPage = () => {
  return (
    <>
    <div className={s.contact__main}>
        <h1 className={s.contact__main_head}>Контакты</h1>
        <div className={s.contact__main_box}>
            <div className={s.contact__main_box_content}><img className={s.contact__main_box_img} src={phone} alt="" /><div className={s.contact__main_box_content_inside}>Телефон:<span> +998909648888</span></div></div>
            <div className={s.contact__main_box_content}><img className={s.contact__main_box_img} src={tg} alt="" /><div className={s.contact__main_box_content_inside}>Телеграм:<span> @GafurArslanbek</span></div> </div>
            <div className={s.contact__main_box_content}><img className={s.contact__main_box_img} src={email} alt="" /><div className={s.contact__main_box_content_inside}>Почта:<span> gafur777_97@mail.ru</span></div></div>
        </div>
    </div>
    </>
  )
}

export default ContactPage