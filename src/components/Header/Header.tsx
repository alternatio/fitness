import { NextPage } from 'next'
import { memo } from 'react'
import style from './styles/Header.module.scss'
import Link from "next/link";

interface HeaderProps {

}

const Header: NextPage<HeaderProps> = props => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        SportD
      </div>
      <nav className={style.navigation}>
      <Link className={style.link} href={'/'}>
          Главная
        </Link>
        <Link className={style.link} href={'/training'}>
          Программы тренировок
        </Link>
        <Link className={style.link} href={'#'}>
          Программы питания
        </Link>
      </nav>
    </header>
  )
}

Header.displayName = 'Header'
export default memo(Header)