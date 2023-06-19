import {FC, memo} from 'react'
import style from './styles/Footer.module.scss'
import Link from "next/link";

interface FooterProps {

}

const Footer: FC<FooterProps> = props => {
  return (
		<div className={style.footer}>
      <Link className={style.link} href={'#'}>
        VK
      </Link>
      <Link className={style.link} href={'#'}>
        Telegram
      </Link>
      <Link className={style.link} href={'#'}>
        Discord
      </Link>
		</div>
	)
}

Footer.displayName = 'Footer'
export default memo(Footer)