import {useMemo} from 'react'

//TODO: props.messages ska vara en array
function NumberOfMessages(props) {
  //* const numberOfMessages = props.messages.length
  // Normal use of props || with useMemo for Computed:
  const numberOfMessages = useMemo(
    () => {return props.messages.length},
    [props.messages] //värdet som vi vaktar, när detta ändras så ska return effekten triggas
  )

  return (
   <p>Konversationen består av { numberOfMessages } meddelanden.</p>
  )
}

export default NumberOfMessages
