import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';

function Header(props){
  return <header><h1><a href="/" onClick={(evt) => {
    console.log(props);
    alert('evt', evt);
    evt.preventDefault();
    props.onSelect();
  }}>Web</a></h1></header>
}

function Nav(props){
const tagList = props.data.map((e) => {
  return <li key={e.id}><a href={"/read/"+e.id} onClick={(evt) => {
    evt.preventDefault();
    props.onSelect(e.id);
  }}>{e.title}</a></li>
});
// [
//   <li>
//     <a href="/read/1">html</a>
//   </li>,
//   <li>
//     <a href="/read/2">css</a>
//   </li>
// ];

  return<nav>
    <ol>
      {tagList}
    </ol>
  </nav>
}

function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
    </article>
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  console.log(mode, id);
  const topics = [
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
  ];
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB!"></Article>;
  }else if(mode === 'READ'){
    const topic = topics.filter(e => {
      if(e.id === id){
        return true;
      }else{
        return false;
      }
    })[0];
    content = <Article title={topic.title} body={topic.body}></Article>;
  }
  return (
    <div>
      <Header onSelect={() => {
        setMode('WELCOME');
      }}></Header>
      <Nav data={topics} onSelect={(id) => {
        setMode('READ');
        setId(id);
      }}></Nav>
      {content}
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button variant="outlined" onClick={() => {
          alert('create!');
        }}>Create</Button>
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>
    </div>
  );
}

export default App;

// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>