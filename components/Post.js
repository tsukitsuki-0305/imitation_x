import style from '../styles/Post.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react';
import Modal from '../components/Modal';

export default function Post(props) {

  // コメントの配列からコメント数を取得
  function countComment(comments) {
    return comments.length;
  }

  const [likeCount, setLikeCount] = useState(props.like);
  const [liked, setLiked] = useState(false);
  const [likeStyle, setLikeStyle] = useState(style.icon);

  function clickLike() {
    if (liked) {
      // likeが取り消された場合
      setLikeCount(likeCount - 1);
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

  const createDisplayDate = (_date) => {
    const date = new Date(_date);
    const displayDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
    return displayDate;
  };

  // モーダルの状態
  const [isOpenModal, setIsOpenModal] = useState(false);
  // モーダルの開閉処理
  const toggleModal = e => {
    if (e.target === e.currentTarget) {
      setIsOpenModal(!isOpenModal);
    }
  };
  // モーダルを開く　e.target !== e.currentTargetになるため
  const openModal = (e) => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <main className={style.tweet}>
      <div className={style.header}>
        <div className={style.userName}>{props.userName}</div>
        <div className={style.userId}>@{props.userId}</div>
      </div>

      <p className={style.content}>{props.content}</p>

      <p className={style.date}>{createDisplayDate(props.date)}</p>

      <div className={style.footer}>

        <div className={style.iconArea}>
          <button type='button' className={style.likeButton} onClick={clickLike} >
            <FontAwesomeIcon className={likeStyle} icon={faHeart} size="1x" />
          </button>
          <span>{likeCount}</span>
        </div>

        <div className={style.iconArea}>
          <button type='button' className={style.likeButton} onClick={openModal}>
            <FontAwesomeIcon className={style.icon} icon={faComment} size="1x" />
          </button>
          <span>{countComment(props.comments)}</span>

        </div>
      </div>

      {isOpenModal && (
        <Modal
          {...props}
          close={toggleModal}
          likeCount={likeCount}
          likeStyle={likeStyle}
          clickLike={clickLike}
          type={'DisplayPostPanel'}
        >
        </Modal>
      )}

    </main>
  )
}