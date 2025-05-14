import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const ChatItem = (props) => {
  const status = useSelector((state) => state.mainStatus.data);
  const [myStatus, setMyStatus] = useState(status);
  useEffect(() => {
    setMyStatus(status);
  }, [status]);
  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`chat__item ${props.user}`}
    >
      <div>
        <div className="chat__item__content">
          <div className="chat__msg">{props.msg}</div>
        </div>
        <div className="chat__meta">
          <span>{props.time}</span>
        </div>
      </div>

      <div className="avatar">
        <div className="avatar-img">
          <img src={props.image} alt="#" />
        </div>
        {props.user === "me" ? (
          <span className={`isOnline ${myStatus ? "active" : "away"}`}></span>
        ) : (
          <span className={`isOnline ${"active"}`}></span>
        )}
      </div>
    </div>
  );
};
export default ChatItem;
