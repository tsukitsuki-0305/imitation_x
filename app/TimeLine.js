import Post from '../components/Post'
import style from '../styles/TimeLine.module.scss'

function consoleLog(content) {
    console.log(content);
    return;
}

export default function TimeLine(props) {
    return (
        <div className={style.body}>

            {props._contents.map((content) => (
                <Post
                    key={content.id}
                    id={content.id}
                    className={style.content}
                    userName={content.userName}
                    userId={content.userId}
                    date={content.date}
                    content={content.content}
                    like={content.like}
                    comments={content.comments}
                    saveNewComment={props.saveNewComment}
                />

            ))}

        </div>
    )
}