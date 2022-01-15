import React from 'react'
import s from './index.module.css'
import { Link, useNavigate } from "react-router-dom";

export default function Header() {

    const headerItems = [
        {label:'Home',route:'iam'},
        {label:'About',route:'/'},
        {label:'Team',route:'/'},
        {label:'Course',route:'course'},
        {label:'Contact Us',route:'contact'}
    ]

    const navigate = useNavigate();

    return (
        <div className={s.container} >
            <div className={s.content} >
                <div className={s.logo} onClick={()=>navigate('/iam')} >
                    IAM School
                </div>
                <div className={s.links}>
                    {headerItems.map((item,i)=>(
                        <Link className={s.linkItem} key={i} to={`/${item.route}`} >{item.label}</Link>
                    ))}
                </div>
                <div >
                    <a href='https://learning.digitaikenacademy.com/login' className={s.loginCta} ><span><img src={`${process.env.PUBLIC_URL}/images/login_profile.svg`} /></span>Login</a>
                </div>
            </div>
        </div>
    )
}
