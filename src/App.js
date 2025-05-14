import "./App.css";
import Profile from "./profile/Profile";
import ChatContent from "./chatContent/ChatContent";
import UserStats from "./userStats/UserStats";
import store from "../src/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="App sm">
          <Profile />
        </div>
        <div className="App md">
          <ChatContent />
        </div>
        <div className="App lg">
          <UserStats />
        </div>
      </Provider>
    </div>
  );
}
