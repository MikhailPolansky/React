import { useState } from 'react'
import {Navbar, Content1, Content2, Footer} from './index'


 export function Wrapper() {

    const [isShowNavbar,setShowNavbar] = useState(false)
    const [isShowContent1,setShowContent1] = useState(false)
    const [isShowContent2,setShowContent2] = useState(false)
    const [isShowFooter,setShowFooter] = useState(false)

    return (
        <div className='wrap'>
        <span>wrapper component</span>
        <br />
        <button onClick={() => setShowNavbar(!isShowNavbar)}>{isShowNavbar ? 'Hide Navbar' : 'Show Navbar'}</button>
        {
            isShowNavbar && <Navbar/>
        }
        <br />
        <button onClick={() => setShowContent1(!isShowContent1)}>{isShowContent1 ? 'Hide Content1' : 'Show Content1'}</button>
        {
            isShowContent1 && <Content1/>
        }
        <br />
        <button onClick={() => setShowContent2(!isShowContent2)}>{isShowContent2 ? 'Hide Content2' : 'Show Content2'}</button>
        {
            isShowContent2 && <Content2/>
        }
        <br />
        <button onClick={() => setShowFooter(!isShowFooter)}>{isShowFooter ? 'Hide Footer' : 'Show Footer'}</button>
        {
            isShowFooter && <Footer/>
        }
        </div>
    )
}