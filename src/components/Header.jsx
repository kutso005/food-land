import React from 'react'
import logo from '../assets/image/logo.png'
import search from '../assets/image/Bag 2.png'
import hello from '../assets/image/heello.png'
export default function Header() {
  return (
    <div id='header'>
        <div className='container'> 
            <div className="header">
                <img width={105} height={44} src={logo} alt="" />
                <div className="pages">
                    <p>Главная</p>
                    <p>О нас</p>
                    <p>Новости</p>
                    <p>Каталог</p>
                </div>
                <div className='search-block'>
                    <div className='search'>
                        <img width={20} height={20} src={hello} alt="" />
                    </div>
                        <div className='search'>
                            <img width={20} height={20} src={search} alt="" />
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
