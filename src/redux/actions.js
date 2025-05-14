import { usersList, chats, profileData } from "../redux/mock";
export const GET_MESSAGES = "GET_MESSAGES";
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_ERROR = "GET_MESSAGES_ERROR";
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";
export const GET_STATS = "GET_STATS";
export const GET_STATS_SUCCESS = "GET_STATS_SUCCESS";
export const GET_STATS_ERROR = "GET_STATS_ERROR";
export const GET_ARCHIVEDATA = "GET_ARCHIVEDATA";
export const GET_ARCHIVEDATA_SUCCESS = "GET_ARCHIVEDATA_SUCCESS";
export const GET_ARCHIVEDATA_ERROR = "GET_ARCHIVEDATA_ERROR";

export const fetchdataRequest = (action, data = {}) => {
  return {
    type: action,
    data
  };
};

export const fetchMessages = (props) => {
  return (dispatch) => {
    dispatch(fetchdataRequest(GET_MESSAGES));
    let data;
    chats.forEach((item) => {
      if (item.name === props) {
        data = item.messages;
      }
    });
    dispatch(fetchdataRequest(GET_MESSAGES_SUCCESS, data));
  };
};
export const fetchUserDetails = (props) => {
  return (dispatch) => {
    dispatch(fetchdataRequest(GET_USERS));
    let data;
    usersList.forEach((item) => {
      if (item.name === props) {
        data = item;
      }
    });
    dispatch(fetchdataRequest(GET_USERS_SUCCESS, data));
  };
};
export const fetchProfileStatus = (props) => {
  return (dispatch) => {
    dispatch(fetchdataRequest(GET_PROFILE));
    let data = props;
    dispatch(fetchdataRequest(GET_PROFILE_SUCCESS, data));
  };
};
export const fetchArchiveList = (props) => {
  return (dispatch) => {
    dispatch(fetchdataRequest(GET_ARCHIVEDATA));
    let data = props;
    dispatch(fetchdataRequest(GET_ARCHIVEDATA_SUCCESS, data));
  };
};
export const fetchStatsData = () => {
  return (dispatch) => {
    dispatch(fetchdataRequest(GET_STATS));
    let data = profileData;
    dispatch(fetchdataRequest(GET_STATS_SUCCESS, data));
  };
};
