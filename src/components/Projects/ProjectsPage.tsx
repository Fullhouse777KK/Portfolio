import s from './ProjectsPage.module.scss'
import food100 from '../../assets/images/Food100.jpg'
import animation from '../../assets/images/animation.jpg'
import vue from '../../assets/images/Vue.jpg'
import apple from '../../assets/images/Apple.jpg'
import building from '../../assets/images/Building.jpg'
import cars from '../../assets/images/Cars.jpg'
import dude from '../../assets/images/Dudeshape.jpg'
import gotrip from '../../assets/images/Gotrip.jpg'
import news from '../../assets/images/News.jpg'
import silver from '../../assets/images/silver.jpg'
import bank from '../../assets/images/bank.jpg'
import totembo from '../../assets/images/totembo.jpg'
import shop from '../../assets/images/Shop.jpg'
import todo from '../../assets/images/To-do.jpg'
import dark from '../../assets/images/Dark.jpg'
import white from '../../assets/images/whiteRoom.jpg'
import { useTranslation } from 'react-i18next';
const ProjectsPage = () => {

    const { t } = useTranslation();


  return (
  <>
<h1 className={s.project__top}>Проекты</h1>
<div className={s.gridbox}>
<div className={s.gridbox__element}>
    <a className={s.gridbox__element_link} href='https://shop-pied.vercel.app'> 
    <img className={s.gridbox__element_img} src={shop} alt="" />
    <h3 className={s.gridbox__element_name}>FastFood</h3>
    </a>
        </div>
        <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link} href='https://dark-final.vercel.app/'> 
    <img className={s.gridbox__element_img} src={dark} alt="" />
    <h3 className={s.gridbox__element_name}>Dark Sun Shop</h3>
    </a>
        </div>
        <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link} href='https://to-do-liard-sigma.vercel.app/'> 
    <img className={s.gridbox__element_img} src={todo} alt="" />
    <h3 className={s.gridbox__element_name}>To-Do</h3>
    </a>
        </div>
    <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link} href='https://fullhouse777kk.github.io/Food100/'> 
    <img className={s.gridbox__element_img} src={food100} alt="" />
    <h3 className={s.gridbox__element_name}>Food100</h3>
    </a>
        </div>
        <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link} href='https://fullhouse777kk.github.io/animation/'>
    <img className={s.gridbox__element_img} src={animation} alt="" />
    <h3 className={s.gridbox__element_name}>Animation</h3>
    </a>
        </div>
        <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link}href='https://fullhouse777kk.github.io/vue/'>
    <img className={s.gridbox__element_img} src={vue} alt="" />
    <h3 className={s.gridbox__element_name}>VUE Cinema</h3>
    </a>
        </div>
        <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link}href='https://fullhouse777kk.github.io/Apple/'>
    <img className={s.gridbox__element_img} src={apple} alt="" />
    <h3 className={s.gridbox__element_name}>App store</h3>
    </a>
        </div>
        <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link}href='https://fullhouse777kk.github.io/Building/'>
    <img className={s.gridbox__element_img} src={building} alt="" />
    <h3 className={s.gridbox__element_name}>Building</h3>
    </a>
        </div>
        <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link}href='https://fullhouse777kk.github.io/Cars/'>
    <img className={s.gridbox__element_img} src={cars} alt="" />
    <h3 className={s.gridbox__element_name}>Perimum Cars</h3>
    </a>
        </div>
        <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link}href='https://fullhouse777kk.github.io/Dudeshape/'>
    <img className={s.gridbox__element_img} src={dude} alt="" />
    <h3 className={s.gridbox__element_name}>Dudeshape</h3>
    </a>
        </div>
        <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link}href='https://fullhouse777kk.github.io/Go-trip/'>
    <img className={s.gridbox__element_img} src={gotrip} alt="" />
    <h3 className={s.gridbox__element_name}>Go Trip</h3>
    </a>
        </div>
        <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link}href='https://fullhouse777kk.github.io/News/'>
    <img className={s.gridbox__element_img} src={news} alt="" />
    <h3 className={s.gridbox__element_name}>News</h3>
    </a>
        </div>
        <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link}href='https://fullhouse777kk.github.io/SilverHouse/'>
    <img className={s.gridbox__element_img} src={silver} alt="" />
    <h3 className={s.gridbox__element_name}>Silver House</h3>
    </a>
        </div>
        <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link}href='https://fullhouse777kk.github.io/TanishBank/'>
    <img className={s.gridbox__element_img} src={bank} alt="" />
    <h3 className={s.gridbox__element_name}>Tanish Bank</h3>
    </a>
        </div>
        <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link}href='https://fullhouse777kk.github.io/Totembo/'>
    <img className={s.gridbox__element_img} src={totembo} alt="" />
    <h3 className={s.gridbox__element_name}>Totembo</h3>
    </a>
        </div>
        <div className={s.gridbox__element}>
    <a className={s.gridbox__element_link} href=""> 
    <img className={s.gridbox__element_img} src={white} alt="" />
    <h3 className={s.gridbox__element_name}>Soon...</h3>
    </a>
        </div>
</div>
  </>
    
  )
}

export default ProjectsPage