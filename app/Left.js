import style from '../styles/Left.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons'

function buttonClick() {
  console.log('クリックしました');
  return;
}

export default function Left(props) {
  // props = {userName: 'yamada hanako', userId: 'hanako_yamada'}
  return (
    <main className={style.left__main}>
      <div className={style.left__body}>
        <div className={style.left__menuArea}>
          <button className={style.left__button} type="button" onClick={buttonClick}>
            <span className={style.left__buttonText}>
              <FontAwesomeIcon icon={faHouse} size="1x" />
              ホーム
            </span>
          </button>
          <button className={style.left__button} type="button" onClick={buttonClick}>
            <span className={style.left__buttonText}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
              話題を検索
            </span>
          </button>
          <button className={style.left__button} type="button" onClick={buttonClick}>
            <span className={style.left__buttonText}>
              <FontAwesomeIcon icon={faBell} size="1x" />
              通知
            </span>
          </button>
          <button className={style.left__button} type="button" onClick={buttonClick}>
            <span className={style.left__buttonText}>
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
              メッセージ
            </span>
          </button>
        </div>
        <button className={style.left__blueButton} type="button" onClick={buttonClick}>
          ポストする
        </button>
        <div className={style.userArea}>
          <span className={style.userArea__userName}>
            {props.userName}
          </span>
          <span className={style.userArea__userId}>
            {props.userId}
          </span>
        </div>
      </div>
    </main>
  )
}