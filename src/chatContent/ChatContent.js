import React, { useState, useEffect, useRef } from "react";
import "./chatContent.css";
import { useSelector } from "react-redux";
import ChatItem from "./ChatItem";
import attachment from "../Images/attachment.png";
import send from "../Images/send.png";
import InputEmoji from "react-input-emoji";

const ChatContent = () => {
  const [msg, setMsg] = useState("");
  const chatData = useSelector((state) => state.messages.data);
  const [chat, setChat] = useState(chatData);
  useEffect(() => {
    setChat(chatData);
  }, [chatData]);
  const sendClicked = () => {
    if (msg !== "") {
      chatData.push({
        key: 1,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUCKBsmGfRJkGgq3xR8owntnvtb1azeJPDw&usqp=CAU",
        type: "",
        msg: msg,
        time: "Just now"
      });
      setChat([...chatData]);
      setMsg("");
    }
  };
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const attachmentClicked = () => {
    alert("This Functionality coming soon");
  };
  return (
    <div className="main__chatcontent">
      <div className="content__body">
        <div className="chat__items">
          {chat?.map((itm, index) => {
            return (
              <ChatItem
                animationDelay={index + 2}
                key={itm.key}
                user={itm.type ? itm.type : "me"}
                msg={itm.msg}
                image={itm.image}
                time={itm.time}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      {scrollToBottom()}
      <div className="content__footer">
        <div className="sendNewMessage">
          <img
            onClick={attachmentClicked}
            src={attachment}
            style={{ maxWidth: "2em" }}
            alt="attach"
          />
          <div className="inputField">
            <InputEmoji
              type="text"
              value={msg}
              onChange={setMsg}
              cleanOnEnter
              onEnter={sendClicked}
              placeholder="Enter your message here"
            />
          </div>
          <button onClick={sendClicked} className="btnSendMsg" id="sendMsgBtn">
            <p>Send</p>
            <img src={send} style={{ maxWidth: "1em" }} alt="send" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatContent;
