import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component= () => {
  //setting states is easy, we just assign properties to state sepereated my commas 
  // in this case we're going to take advantage of ES6 and only type friends because the friends property is going to be equal to the friends array 
  //which is imported from friends.json 

  //  Setting this.state.friends to the friends json array 
    state = {
      friends
    };

    removeFriend = id => {          //when the x is clicked on the friend this function will be triggered and we will the remove the friend from list.state.friends 
                                    // in order to correctly identify which friend the user selected 
                                        //we're going pass the id Prop from the compnent in which the x was selected
    }                                       //we first have to pass the remove card func  down to the 


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
