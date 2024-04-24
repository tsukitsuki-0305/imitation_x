import style from '../styles/Right.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Right() {
  return (
    <main className={style.right__main}>
      <div className={style.right__body}>
        <div className={style.right__searchArea}>
          <FontAwesomeIcon className={style.right__searchIcom} icon={faMagnifyingGlass} size="1x" />
          {/* <span className={style.right__searchText}>
            検索
          </span> */}
          <input className={style.right__searchText} type="text" placeholder="検索" />
        </div>
      </div>
    </main>
  )
}