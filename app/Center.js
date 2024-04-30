import TimeLine from './TimeLine'

export default function Center(props) {
  return (
    <div>
      <TimeLine _contents={props._contents} saveNewComment={props.saveNewComment} />
    </div>
  );

}