function Message(props) {
  console.log(props.message);

  return(
    <li
    style={{alignSelf: props.message.self ? 'end' : 'start'}}
  >
    { props.message.text }
    { props.message.image !== undefined && <img
      alt={props.message.altText}
      src={props.message.image}
    /> }
    <span className="reaction">{ props.message.reaction }</span>
    <span className="time">
      { props.message.delivered ? '✓' : '⨯' }
    </span>
  </li>
  )
}

export default Message
