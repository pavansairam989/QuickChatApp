import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  GET_STATS,
  GET_STATS_SUCCESS,
  GET_STATS_ERROR,
  GET_ARCHIVEDATA,
  GET_ARCHIVEDATA_SUCCESS,
  GET_ARCHIVEDATA_ERROR
} from "./actions";
import { combineReducers } from "redux";
import { chats, usersList, profileData } from "../redux/mock";
import history from "history/browser";
import { connectRouter } from "connected-react-router";

const initialState = {
  data: chats[0].messages,
  error: ""
};
const initialState1 = {
  data: usersList[0],
  error: ""
};
const initialState2 = {
  data: true,
  error: ""
};
const initialState3 = {
  data: profileData,
  error: ""
};
const initialState4 = {
  data: usersList,
  error: ""
};
export const chatReducer = (state = initialState, action) => {
  let chatMessages = state;
  switch (action.type) {
    case GET_MESSAGES:
      chatMessages = { ...state };
      return chatMessages;
    case GET_MESSAGES_SUCCESS:
      chatMessages = { data: action.data, error: "" };
      return chatMessages;
    case GET_MESSAGES_ERROR:
      chatMessages = { data: action.data, error: "error " };
      return chatMessages;
    default:
      return chatMessages;
  }
};
export const userReducer = (state = initialState1, action) => {
  let userDetails = state;
  switch (action.type) {
    case GET_USERS:
      userDetails = { ...state };
      return userDetails;
    case GET_USERS_SUCCESS:
      userDetails = { data: action.data, error: "" };
      return userDetails;
    case GET_USERS_ERROR:
      userDetails = { data: [], error: "error " };
      return userDetails;
    default:
      return userDetails;
  }
};
export const profileReducer = (state = initialState2, action) => {
  let profileDetails = state;
  switch (action.type) {
    case GET_PROFILE:
      profileDetails = { ...state };
      return profileDetails;
    case GET_PROFILE_SUCCESS:
      profileDetails = { data: action.data, error: "" };
      return profileDetails;
    case GET_PROFILE_ERROR:
      profileDetails = { data: [], error: "error" };
      return profileDetails;
    default:
      return profileDetails;
  }
};
export const statsReducer = (state = initialState3, action) => {
  let statsData = state;
  switch (action.type) {
    case GET_STATS:
      statsData = { ...state };
      return statsData;
    case GET_STATS_SUCCESS:
      statsData = { data: action.data, error: "" };
      return statsData;
    case GET_STATS_ERROR:
      statsData = { data: [], error: "error" };
      return statsData;
    default:
      return statsData;
  }
};
export const archiveReducer = (state = initialState4, action) => {
  let archiveData = state;
  switch (action.type) {
    case GET_ARCHIVEDATA:
      archiveData = { ...state };
      return archiveData;
    case GET_ARCHIVEDATA_SUCCESS:
      archiveData = { data: action.data, error: "" };
      return archiveData;
    case GET_ARCHIVEDATA_ERROR:
      archiveData = { data: [], error: "error" };
      return archiveData;
    default:
      return archiveData;
  }
};

export const chatHistory = history;
export const rootReducer = combineReducers({
  router: connectRouter(history),
  messages: chatReducer,
  userData: userReducer,
  mainStatus: profileReducer,
  statsData: statsReducer,
  archiveData: archiveReducer
});
