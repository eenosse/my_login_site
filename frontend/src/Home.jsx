import tom from './chinese-tom-tom-and-jerry.gif'
import { useState } from 'react';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("LingLing");
    return (
      <div className="home">
        <h1>Ju<a className="sus">Tube</a></h1>
        <h2>The Video Platform for Nieces and Nephews 🍚</h2>
        {!isAuthenticated ? (
          <p>Please <a href="/signIn">sign in</a> to see the videos.</p>
        ) : (
          <p>Welcome back, <b>{username}</b></p>
        )}
        <img src={tom} alt="tom" style={{padding: 20}}/>
      </div>
    );
  }
   
  export default Home;