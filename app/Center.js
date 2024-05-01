import TimeLine from './TimeLine'
import style from '../styles/Center.module.scss'

export default function Center(props) {
  return (
    <div className={style.center__main}>
      <TimeLine _contents={props._contents} saveNewComment={props.saveNewComment} />
    </div>
  );

}