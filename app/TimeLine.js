import Post from '../components/Post'
import style from '../styles/TimeLine.module.scss'

function consoleLog(content) {
    console.log(content);
    return;
}

export default function TimeLine({ _contents }) {

    return (
        <div className={style.body}>

            {_contents.map((content) => (
                <Post
                    key={content.id}
                    className={style.content}
                    userName={content.userName}
                    date={content.date}
                    content={content.content}
                    like={content.like}
                    comments={content.comments} />

            ))}

        </div>
    )
}