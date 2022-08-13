// import logo from './logo.svg';
import './App.css';

const displayEmojiName= event => alert(event.target.id)

function App() {
  return (
    <div className="container">
      <h1 id='greeting'> Hello Emoji World</h1>
     <p> We Are Emojis</p>
     <ul>
    <li>
    <button onClick= {displayEmojiName} >
        <span role="img" arial-lable= "Grinning Face"
        id ="Grinnig Face">
     😃
      </span>
      </button>
    </li>

    <li>
      <button onClick={displayEmojiName}>
        <span role="img" arial-lable= "Monkey Face"
        id ="Monkey  Face">
     🐵
      </span>
      </button>
    </li>

         
    <li>
      <button onClick={displayEmojiName}>
        <span role="img" arial-lable= "Money Face"
        id ="money face">
     🤑
      </span>
      </button>
    </li> 

    <li>
      <button onClick={displayEmojiName}>
        <span role="img" arial-lable= "Peaches"
        id ="Peach">
     🍑
      </span>
      </button>
    </li> 

    <li>
      <button onClick={displayEmojiName}>
        <span role="img" arial-lable= "Rocket"
        id ="Rocket">
     🚀
      </span>
      </button>
    </li>

    <li>
      <button onClick={displayEmojiName}>
        <span role="img" arial-lable= "Horse Racing"
        id ="Horse Racing">
     🏇
      </span>
      </button>
    </li>


    <li>
      <button onClick={displayEmojiName}>
        <span role="img" arial-lable= "Bomb"
        id ="Bomb">
     💣
    
      </span>
      </button>
    </li>


    <li>
      <button onClick={displayEmojiName}>
        <span role="img" arial-lable= "Desert"
        id ="Desert">
     🏜️
      </span>
      </button>
    </li>

     
     </ul>
    </div>
     
  );
}

export default App;
