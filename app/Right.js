import style from '../styles/Right.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Right(props) {

  // inputのvalue
  const [searchText, setSearchText] = useState("");
  const changeSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const onKeyDownEvent = (event) => {
    // isComposing:変換開始〜変換終了までの間、trueを返す
    if (event.nativeEvent.isComposing || event.key !== 'Enter') return
    event.preventDefault();
    // page.jsのsearchWordChangeイベントを実行する
    props.searchWordChange(searchText);
  };

  return (
    <main className={style.right__main}>
      <div className={style.right__body}>
        <div className={style.right__searchArea}>
          <FontAwesomeIcon className={style.right__searchIcom} icon={faMagnifyingGlass} size="1x" />
          <input
            className={style.right__searchText}
            value={searchText}
            type="text"
            placeholder="検索"
            onChange={changeSearchText}
            onKeyDown={onKeyDownEvent} />
        </div>
      </div>
    </main>
  )
}