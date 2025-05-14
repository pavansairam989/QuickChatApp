import { useEffect, useState } from "react";
import "./dropDown.css";
import { usersList } from "../redux/mock";
import { fetchMessages, fetchUserDetails } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState(usersList[0].name);
  const [list, setList] = useState([...usersList]);
  const modifiedList = useSelector((state) => state.archiveData.data);
  const trigger = useDispatch();

  const selectChat = (e) => {
    e.preventDefault();
    setSelectedItem(e.target.id);
    trigger(fetchMessages(e.target.id));
    trigger(fetchUserDetails(e.target.id));
    list.forEach((item) => {
      if (item.name === e.target.id) {
        item.newMsgs = 0;
      }
    });
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClick1 = () => {
    setIsOpen1(!isOpen1);
  };
  useEffect(() => {
    setList([...usersList]);
  }, []);
  const [activeList, setActiveList] = useState(
    list.filter((element) => {
      return element.status === "active";
    })
  );
  const [archiveList, setArchiveList] = useState(
    list.filter((element) => {
      return element.status === "archive";
    })
  );
  useEffect(() => {
    modifiedList.forEach((item) => {});
    setActiveList(
      usersList.filter((element) => {
        return element.status === "active";
      })
    );
    setArchiveList(
      usersList.filter((element) => {
        return element.status === "archive";
      })
    );
  }, [modifiedList]);
  const activeItemList = () => {
    const itemsList = activeList.map((item) => (
      <div
        onClick={selectChat}
        id={item.name}
        className={
          item.name === selectedItem
            ? "chatlist__item__selected"
            : "chatlist__item"
        }
      >
        <div className="avatar">
          <div className="avatar-img">
            <img src={item.image} id={item.name} alt="#" />
          </div>
        </div>
        <div className="userMeta">
          <div id={item.name}>{item.name}</div>
          {item.newMsgs > 0 ? (
            <div className="chatCount1">{item.newMsgs}</div>
          ) : (
            []
          )}
        </div>
      </div>
    ));

    return <div className="dropdown__items"> {itemsList} </div>;
  };
  const archiveItemList = () => {
    const itemsList = archiveList.map((item) => (
      <div
        onClick={selectChat}
        id={item.name}
        className={
          item.name === selectedItem
            ? "chatlist__item__selected"
            : "chatlist__item"
        }
      >
        <div className="avatar">
          <div className="avatar-img">
            <img src={item.image} id={item.name} alt="#" />
          </div>
        </div>
        <div className="userMeta">
          <div id={item.name}>{item.name}</div>
          {item.newMsgs > 0 ? (
            <div className="chatCount1">{item.newMsgs}</div>
          ) : (
            []
          )}
        </div>
      </div>
    ));

    return <div className="dropdown__items"> {itemsList} </div>;
  };

  return (
    <>
      <div className={isOpen ? "dropdown active" : "dropdown"}>
        <div className="dropdown__text" onClick={handleClick}>
          Active Conversation
          <div className="chatCount">{activeList.length}</div>
        </div>
        {activeItemList()}
      </div>
      <div className={isOpen1 ? "dropdown active" : "dropdown"}>
        <div className="dropdown__text" onClick={handleClick1}>
          Archived Conversation
          <div className="chatCount">{archiveList.length}</div>
        </div>
        {archiveItemList()}
      </div>
    </>
  );
};

export default Dropdown;
