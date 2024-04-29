import style from '../styles/Right.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Right(props) {
  // 検索窓変更後
  const searchWordChange = (event) => {
    const value = event.target.value;
    // 親のsearchWordChangeイベントを実行する
    props.searchWordChange(value);
  }

  return (
    <main className={style.right__main}>
      <div className={style.right__body}>
        <div className={style.right__searchArea}>
          <FontAwesomeIcon className={style.right__searchIcom} icon={faMagnifyingGlass} size="1x" />
          <input className={style.right__searchText} type="text" placeholder="検索" onChange={searchWordChange} />
        </div>
      </div>
    </main>
  )
}