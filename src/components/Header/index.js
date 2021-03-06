import React, { useState } from 'react'
import s from './index.module.css'
import { Link, useNavigate } from "react-router-dom";
import {MenuOutlined,CloseOutlined } from '@ant-design/icons';

export default function Header() {

    const headerItems = [
        {label:'Home',route:'iam'},
        {label:'About',route:'aboutus'},
        {label:'Team',route:'team'},
        {label:'Course',route:'course'},
        {label:'Contact Us',route:'contact'}
    ]

    const navigate = useNavigate();


    const isMobile = window.screen.width < 480

    const [isMwebMenuOpen,setIsMwebMenuOpen ] = useState(false)

    return (
        <div className={s.container} >
            <div className={s.content} >
                <div className={s.logo} onClick={()=>navigate('/iam')} >
                    <img src={`${process.env.PUBLIC_URL}/images/Digitaiken_Academy_logo.svg`} />
                </div>
                {!isMobile  && 
                    <div className={s.links}>
                        {headerItems.map((item,i)=>(
                            <Link className={s.linkItem} key={i} to={`/${item.route}`} >{item.label}</Link>
                        ))}
                    </div>
                }
                {!isMobile && 
                    <div className={s.loginContainer}  >
                        <a href='https://learning.digitaikenacademy.com/login' className={s.loginCta} ><span><img src={`${process.env.PUBLIC_URL}/images/login_profile.svg`} /></span>Login</a>
                        <a href='https://www.okta.com/' target="_blank" className={s.okataA}   >
                        <img className={s.oktaImg}  src={`${process.env.PUBLIC_URL}/images/Okta_logo.svg`} />
                        </a>
                    </div>
                }

                {isMobile &&  (!isMwebMenuOpen ?  <div onClick={()=>setIsMwebMenuOpen(true)} ><MenuOutlined/></div> : <div onClick={()=>setIsMwebMenuOpen(false)} ><CloseOutlined/></div>)}


            </div>
            {isMobile && isMwebMenuOpen ? (
                <div className={s.mwebMenu} >
                    <div className={s.links}>
                        {headerItems.map((item,i)=>(
                            <Link className={s.linkItem} onClick={()=>setIsMwebMenuOpen(false)} key={i} to={`/${item.route}`} >{item.label}</Link>
                        ))}
                    </div>
                    <div >
                        <a href='https://learning.digitaikenacademy.com/login' className={s.loginCta} ><span><img src={`${process.env.PUBLIC_URL}/images/login_profile.svg`} /></span>Login</a>
                        <a href='https://www.okta.com/' className={s.okataA} target="_blank"  >
                            <img className={s.oktaImgMbl}  src={`${process.env.PUBLIC_URL}/images/Okta_logo.svg`} />
                        </a>
                    </div>
                </div>
            ):null}
        </div>
    )
}
