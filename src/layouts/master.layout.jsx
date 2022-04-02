import React,{useState,useEffect} from 'react'
import Footer from '../components/Footer/Footer.component'
import Navbar from '../components/Navbar/Navbar.component'

const MasterLayout = ({children}) => {
  const [showBackToTopButton,setShowBackToTopButton] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.pageYOffset > 300){
        setShowBackToTopButton(true);
      }else{
        setShowBackToTopButton(false);
      }
    })
  },[]);

  const scrollToTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  
  return (
    <section>
        {/* HEADER */}
        <section>
            <Navbar/>
        </section>
        {/* MAIN CONTENT */}
        <main>
            {children}
        </main>
        {/* FOOTER */}
        <footer>
            <Footer/>
        </footer>
    </section>
  )
}

export default MasterLayout