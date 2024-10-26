import { ReactNode, FC, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
interface IProps {
    children: ReactNode
  }
  
  const MainLayout:FC<IProps> = ({ children }) => {
    const [isDark, setIsDark] = useState(false)
    return (
     <>
      <div className={`main ${isDark ? 'dark' : 'light'}`}>
        <Sidebar  setIsDark={() => setIsDark((prev) => !prev)} isDark={isDark}/>
        <div className="container">
          {children}
        </div>
      </div>
     </>
    )
  }
  
  export default MainLayout