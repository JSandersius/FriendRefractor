import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

const App = () => (
  <Wrapper>
    <h1 className="title">Friends List</h1>
    <FriendCard
      id={friend.id}
      key={friend.id}
      name={friend.name}
      image={friend.image}
      occupation={friend.occupation}
      location={friend.occupation}
    />
  </Wrapper>
);

export default App;
