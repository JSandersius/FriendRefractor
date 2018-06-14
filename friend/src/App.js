import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component= () => {

  render() {
    return (
  <Wrapper>
    <h1 className="title">Friends List</h1>
    {friends.map(friend => (
    <FriendCard
      id={friend.id}
      key={friend.id}
      name={friend.name}
      image={friend.image}
      occupation={friend.occupation}
      location={friend.location}
    />
      ))}
  </Wrapper>
    );
  }
}


export default App;
