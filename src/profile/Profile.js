import "./profile.css";
import React, { useState } from "react";
import discord from "../Images/discord.png";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import Avatar from "react-avatar";
import Dropdown from "./DropDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import settingsicon from "../Images/settingsicon.png";
import { fetchProfileStatus, fetchStatsData } from "../redux/actions";

const Profile = () => {
  const [checked, setChecked] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const trigger = useDispatch();
  trigger(fetchStatsData);
  const profileDetails = useSelector((state) =>
    state.statsData.data ? state.statsData.data : {}
  );
  const handleStatus = () => {
    setChecked(!checked);
    trigger(fetchProfileStatus(!checked));
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="profileGroup">
        <div className="titleGroup">
          <img
            src={discord}
            style={{ maxHeight: "2em", maxWidth: "2em" }}
            alt="Chat logo"
          />
          <div className="title">QuickChat</div>
        </div>
        <div className="profile">
          <Avatar
            round={true}
            size="100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUCKBsmGfRJkGgq3xR8owntnvtb1azeJPDw&usqp=CAU"
          />
          <div className="profileMenu">
            <div className="moreOptions">
              <div className="userName">
                <div style={{ display: "flex", alignItems: "center" }}>
                  {profileDetails.name}
                </div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  style={{
                    marginLeft: "-1.5em",
                    marginRight: "-2em",
                    padding: "0em"
                  }}
                >
                  <img
                    src={settingsicon}
                    style={{ maxWidth: "1em", paddingLeft: " 0.5em" }}
                    alt="Settings logo"
                  />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button"
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            </div>

            <p className="role">{profileDetails.role}</p>
            <div className="statusSwitch">
              <Switch
                onHandleColor="#2693e6"
                onChange={handleStatus}
                checked={checked}
                onColor="#86d3ff"
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={45}
                className="react-switch"
                id="material-switch"
              />
              <div style={{ marginLeft: "0.5em", fontSize: "smaller" }}>
                {checked ? "Active" : "Inactive"}
              </div>
            </div>
          </div>
        </div>
        <Dropdown />
      </div>
    </>
  );
};

export default Profile;
