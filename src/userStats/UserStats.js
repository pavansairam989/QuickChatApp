import "./userStats.css";
import { Card, Row, Col } from "react-bootstrap";
import mail from "../Images/mail.png";
import Avatar from "react-avatar";
import profile from "../Images/profile.png";
import archive from "../Images/archive.png";
import attendance from "../Images/attendance.png";
import reject from "../Images/reject.png";
import { useDispatch, useSelector } from "react-redux";
import calender from "../Images/calender.png";
import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import rocket from "../Images/rocket.png";
import { usersList } from "../redux/mock";
import copy from "copy-to-clipboard";
import { fetchArchiveList } from "../redux/actions";

const Profile = () => {
  const trigger = useDispatch();
  const statsDetails = useSelector((state) =>
    state.statsData.data ? state.statsData.data : {}
  );
  const userInfo = useSelector((state) =>
    state.userData.data ? state.userData.data : {}
  );
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [image, setImage] = useState(userInfo.image);
  const [status, setStatus] = useState(
    userInfo.status === "active" ? "Archive" : "Unarchive"
  );
  const copyText = useState("https://codesandbox.com");

  const copyToClipboard = () => {
    copy(copyText);
    alert("Link Copied to clipboard");
  };
  let list = [...usersList];
  const archiveUser = () => {
    list.forEach((item) => {
      if (userInfo.status === "active") {
        if (item.name === userInfo.name) {
          item.status = "archive";
          setStatus("UnArchive");
        }
      } else {
        if (item.name === userInfo.name) {
          item.status = "active";
          setStatus("Archive");
        }
      }
    });
    trigger(fetchArchiveList(list));
  };
  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
    setImage(userInfo.image);
    setStatus(userInfo.status === "active" ? "Archive" : "Unarchive");
  }, [userInfo]);
  return (
    <>
      <div className="userStatsGroup">
        <div className="userStats">
          <Avatar round={true} size="80" src={image} />
          <div className="userDetails">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={mail}
                style={{ maxWidth: "2em", paddingRight: "1em" }}
                alt="Mail"
              />
              {email}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={profile}
                style={{
                  maxWidth: "2em",
                  paddingRight: "1em"
                }}
                alt="Profile"
              />
              {name}
            </div>
            <button onClick={archiveUser} className="archive">
              {status}
              <img
                src={archive}
                style={{
                  maxWidth: "3em",
                  marginLeft: "-0.5em",
                  marginRight: "-0.5em"
                }}
                alt="Archive"
              />
            </button>
          </div>
        </div>
        <div className="statsGroup">
          <div className="fourGroup">
            <Row className="rowAlign">
              <Col style={{ marginBottom: "1em", marginRight: "1em" }}>
                <Card className="timeStatCard">
                  <Card.Body>
                    <div className="timeCard">
                      <Avatar
                        round={true}
                        size="32"
                        style={{ backgroundColor: "rgb(144 199 255)" }}
                        src="https://static.vecteezy.com/system/resources/previews/009/342/688/original/clock-icon-clipart-design-illustration-free-png.png"
                      />
                      <div className="statsValuesGroup">
                        <h3 className="statValue">
                          {statsDetails.userStats.time}
                        </h3>
                        <p className="statName">Time</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ marginBottom: "1em" }}>
                <Card className="attendStatCard">
                  <Card.Body>
                    <div className="timeCard">
                      <Avatar
                        style={{ backgroundColor: "#97d797" }}
                        round={true}
                        size="32"
                        src={attendance}
                      />
                      <div className="statsValuesGroup">
                        <h3 className="statValue">
                          {statsDetails.userStats.attended}
                        </h3>
                        <p className="statName">Attended</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="rowAlign1">
              <Col style={{ marginRight: "1em" }}>
                <Card className="meetStatCard">
                  <Card.Body>
                    <div className="timeCard">
                      <Avatar
                        round={true}
                        size="32"
                        src={calender}
                        style={{ backgroundColor: "#d184f0" }}
                      />
                      <div className="statsValuesGroup">
                        <h3 className="statValue">
                          {statsDetails.userStats.meetings}
                        </h3>
                        <p className="statName">Meetings</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="rejectStatCard">
                  <Card.Body>
                    <div className="timeCard">
                      <Avatar
                        round={true}
                        size="32"
                        src={reject}
                        style={{ backgroundColor: "#f3be5c" }}
                      />
                      <div className="statsValuesGroup">
                        <h3 className="statValue">
                          {statsDetails.userStats.rejected}
                        </h3>
                        <p className="statName">Rejected</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <div>
            <div className="graph">
              <div className="current">Current Week</div>
              <div className="activity">Activity</div>
            </div>
            <ReactEcharts
              option={statsDetails.graphData}
              style={{ maxHeight: "8em" }}
            ></ReactEcharts>
          </div>
        </div>
        <div className="copyLink">
          <img className="rocket" src={rocket} alt="rocket" />
          <h4 style={{ marginBottom: "1em", marginTop: "1em" }}>
            Onboard Clients
          </h4>
          <div>Share the link with prospects and discuss all stuff</div>
          <button
            className="btnCopyLink"
            value="https://ww3hpo.csb.app/"
            onClick={(e) => {
              window.open(
                // `maps://app?saddr=17.385044,78.486671&daddr=8.7483,38.9742&dirflg=d`
                // `geo:8.7483,38.9742?q=8.7483,38.9742&z=16`
                // "geo:17.385044,78.486671?q=8.7483,38.9742"
                "geo:0,0?q=8.7483,38.9742"
                // "http://maps.google.com/maps?saddr=17.385044,78.486671&daddr=8.7483,38.9742"
              );
              copyToClipboard();
            }}
          >
            Copy Link
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_167291.png"
              alt="copy"
              style={{ maxWidth: "1em", maxHeight: "1em" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
