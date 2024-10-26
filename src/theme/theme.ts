import light from '../assets/images/sun.png'
import dark from '../assets/images/crescent-moon.png'
import { useLayoutEffect, useState } from 'react'

export const themeIcons ={
    light,
    dark,
}

// export const useTheme = () => {
//     const [theme,setTheme] = useState('light')
//     useLayoutEffect(() =>{
//       document.documentElement.setAttribute('data-theme',theme)
//     },[theme])
//     return {theme, setTheme}
// }