import style from '../styles/Post.module.scss';

export default function Comment(content) {

    return (
      <main className={style.tweet}>
        <div className={style.header}>
          <p className={style.userName}>{content.userName}</p>
          <p className={style.date}>{content.date}</p>
        </div>
        <p className={style.content}>{content.content}</p>
      </main>
    )
  }