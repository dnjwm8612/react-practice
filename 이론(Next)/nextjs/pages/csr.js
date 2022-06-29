import {useEffect, useState} from 'react';
import Link from 'next/link';
export default function(){
  const [topics, setTopics] = useState([]);
  async function loadData(){
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const resp = await fetch(URL);
    const data = await resp.json();
    setTopics(topics=>data);
  }
  useEffect(()=>{
    loadData();
  },[]);
  const ui = topics.map(e=><li key={e.id}>{e.title}</li>);
  return <div>
    <ol>
      {ui}
    </ol>
    <Link href="/">/index.js</Link>
  </div>;
}