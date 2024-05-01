import style from '../styles/Comment.module.scss';

export default function Comment(props) {

  const createDisplayCommentDate = (_date) => {
    const date = new Date(_date);
    const displayDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
    return displayDate;
  };

  return (
    <div className={style.Comment}>
      <div className={style.Comment__container}>
        <div className={style.Comment__header}>
          <div className={style.Comment__userName}>{props.userName}</div>
          <div className={style.Comment__userId}>@{props.userId}</div>
        </div>
        <p className={style.Comment__content}>{props.content}</p>
        <p className={style.Comment__date}>{createDisplayCommentDate(props.date)}</p>
      </div>
    </div>
  )
}