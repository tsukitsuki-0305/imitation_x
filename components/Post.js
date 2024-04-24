import style from '../styles/Post.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
// import Comment from './comment';

// 文字列のLIKE数を数値に変換
// function convertLike(str) {
//   return Number(str);
// }

// コメントの配列からコメント数を取得
function countComment(comments) {
  return comments.length;
}

function consoleLog(content) {
  console.log(content);
  return;
}

export default function Post(content) {

  return (
    <main className={style.tweet}>
      <div className={style.header}>
        <p className={style.userName}>{content.userName}</p>
        <p className={style.date}>{content.date}</p>
      </div>

      <p className={style.content}>{content.content}</p>

      <div className={style.footer}>

        <div className={style.iconArea}>
          <span>
            <FontAwesomeIcon icon={faHeart} size="1x" />
          </span>
          <span>{content.like}</span>
        </div>

        <div className={style.iconArea}>
          <span>
            <FontAwesomeIcon icon={faComment} size="1x" />
          </span>
          <span>{countComment(content.comments)}</span>

          {/* {content.comments.map((content) => (
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