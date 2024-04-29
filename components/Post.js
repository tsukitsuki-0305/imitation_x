import style from '../styles/Post.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
// import Comment from './comment';
import { useState } from 'react';

// 文字列のLIKE数を数値に変換
// function convertLike(str) {
//   return Number(str);
// }

// コメントの配列からコメント数を取得
function countComment(comments) {
  return comments.length;
}



export default function Post(props) {

  const [likeCount, setLikeCount] = useState(props.like);
  const [liked, setLiked] = useState(false);
  const [likeStyle, setLikeStyle] = useState(style.icon);

  function clickLike() {
    // console.log(likeCount, liked, likeStyle);
    if (liked) {
      // likeが取り消された場合
      setLikeCount(likeCount-1);
      setLiked(false);
      setLikeStyle(style.icon)
    } else {
      // likeされた場合
      setLikeCount(likeCount + 1);
      setLiked(true);
      setLikeStyle(style.pinkicon)
    }
    return;
  }

  return (
    <main className={style.tweet}>
      <div className={style.header}>
        <p className={style.userName}>{props.userName}</p>
        <p className={style.date}>{props.date}</p>
      </div>

      <p className={style.content}>{props.content}</p>

      <div className={style.footer}>

        <div className={style.iconArea}>
          <button type='button' className={style.likeButton} onClick={clickLike} >
            <FontAwesomeIcon className={likeStyle} icon={faHeart} size="1x" />
          </button>
          <span>{likeCount}</span>
        </div>

        <div className={style.iconArea}>
          <span>
            <FontAwesomeIcon icon={faComment} size="1x" />
          </span>
          <span>{countComment(props.comments)}</span>

          {/* {props.comments.map((content) => (
            <Comment className={style.content}
            userName={content.userName}
            date={content.date}
            content={content.content} />
          ))} */}

        </div>
      </div>
    </main>
  )
}