import style from '../styles/DisplayPostPanel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react';
import Comment from './Comment';


export default function DisplayPostPanel(props) {
    const [text, setText] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    // コメントの配列からコメント数を取得
    function countComment(comments) {
        return comments.length;
    }

    const createDisplayDate = (_date) => {
        const date = new Date(_date);
        const displayDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
        return displayDate;
    };

    const changeText = (event) => {
        const newVal = event.target.value;
        setText(newVal);
        newVal.length ? setIsDisabled(false) : setIsDisabled(true);
    };

    const submit = (e) => {
        e.preventDefault();
        props.saveNewComment(text, props.id);
        if (props.close) {
            props.close(e);
        }
    }

    return (
        <div className={style.displayPostPanel}>
            <button className={style.displayPostPanel__cancelButton} type="button" onClick={props.close}>
                ×
            </button>
            <div className={style.displayPostPanel__container}>
                <div className={style.displayPostPanel__postContent}>
                    <div className={style.header}>
                        <div className={style.userName}>{props.userName}</div>
                        <div className={style.userId}>@{props.userId}</div>
                    </div>

                    <p className={style.content}>{props.content}</p>

                    <p className={style.date}>{createDisplayDate(props.date)}</p>

                    <div className={style.footer}>

                        <div className={style.iconArea}>
                            <button type='button' className={style.likeButton} onClick={props.clickLike} >
                                <FontAwesomeIcon className={props.likeStyle} icon={faHeart} size="1x" />
                            </button>
                            <span>{props.likeCount}</span>
                        </div>

                        <div className={style.iconArea}>
                            <span className={style.commentIcon}>
                                <FontAwesomeIcon icon={faComment} size="1x" />
                            </span>
                            <span>{countComment(props.comments)}</span>
                        </div>

                    </div></div>

                <div className={style.displayPostPanel__addCommentArea}>
                    <textarea
                        className={style.displayPostPanel__textArea}
                        rows={3}
                        placeholder={"返信"}
                        maxLength={200}
                        minLength={1}
                        value={text}
                        onChange={changeText}
                    />
                    <button
                        className={style.displayPostPanel__postButton}
                        type="submit"
                        onClick={submit}
                        disabled={isDisabled}
                    >
                        ポスト
                    </button>
                </div>

                <div>
                    <ul className={style.displayPostPanel__commentArea}>
                        {props.comments.map((content) => (
                            <li className={style.displayPostPanel__commentList}>
                                <Comment className={style.content}
                                    {...content} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}