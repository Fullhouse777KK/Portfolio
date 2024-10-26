import { FC, ReactNode } from 'react'
import s from './Sidebar.module.scss'
import { Link } from 'react-router-dom'
import { themeIcons } from '../../theme/theme'
import {Suspense } from 'react'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

// const locale = {
//   en: { title: 'English' },
//   ru: { title: 'Russian' },
// }





const links = [
  { url: '/', name: 'Main' },
  { url: '/Info', name: 'Info' },
  { url: '/Projects', name: 'Projects' },
  { url: '/Contacts', name: 'Contacts' }
]

interface IsDark {
  isDark: boolean,
  setIsDark: () => void
}

const Sidebar = ({isDark,setIsDark}:IsDark) => {


const { t, i18n } = useTranslation();

  const changeLanguage = (language:string) => (
    i18n.changeLanguage (language)

  )
  
  return (
    <>
    <div className={`${s.sidebar} ${isDark ? s.dark : s.light}`}>
    <React.Suspense fallback={''}>
      <ul className={s.sidebar__link}>
      {links.map((item, i) => (
                    <li key={i}>
                        <Link className={s.sidebar__link_list} to={item.url}>
                            {item.name}                        </Link>
                    </li>
                ))}
      </ul>
     {/* <div className={s.sidebar__lang}>
     <button className={s.sidebar__lang_btn} onClick={() => changeLanguage('en')}>EN</button>
     <button className={s.sidebar__lang_btn} onClick={() => changeLanguage('ru')}>RU</button></div>  */}
  <img src={isDark ? themeIcons.light : themeIcons.dark} className={s.sidebar__img} alt='#' onClick={setIsDark}></img>
    </React.Suspense>
    </div>
    
    </>
  )
}

export default Sidebar