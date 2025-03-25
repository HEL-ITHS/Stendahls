import { useState } from "react"
import Message from "./components/Messages"
import NumberOfMessages from "./components/NumberOfMessages"
import cat from "./assets/cat.jpeg"

function App() {
  const [messages, _setMessages] = useState([
    {
      altText: "Alternative text",
      delivered: true,
      id: 1,
      reaction: "🥰",
      self: true,
      text: "Cảm ơn!",
      time: "21:57",
    },
    {
      altText: "Alternative text",
      delivered: true,
      id: 2,
      reaction: null,
      self: false,
      text: "Cảm ơn!",
      time: "21:58",
    },
    {
      altText: "Alternative text",
      delivered: true,
      id: 3,
      reaction: null,
      self: false,
      text: "Good night!",
      time: "21:59",
    },
    {
      altText: "Alternative text",
      delivered: false,
      id: 4,
      image: cat,
      reaction: "😍",
      self: false,
      time: "22:00",
    },
  ])

  const [messageText, setMessageText] = useState("")

  return (
    <>
      <ol>
       { messages.map(message => <Message key={message.id} message={message} />)}
      </ol>
      <NumberOfMessages messages={messages} />
      {/* onChange, value */}
      <textarea onChange={(event) => {
        setMessageText(event.target.value)
      }}
      value={messageText}
      ></textarea>
    </>
  )
}

export default App
