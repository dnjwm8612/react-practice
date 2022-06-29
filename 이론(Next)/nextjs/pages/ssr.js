import Link from 'next/link';
export default function Main(props){
  const topics = props.topics;
  const ui = topics.map(e=><li key={e.id}>{e.title}</li>);
  return <div>
    <ol>
      {ui}
    </ol>
    <Link href="/">/index.js</Link>
  </div>;
}

export async function getServerSideProps(context) {
  const URL = 'https://jsonplaceholder.typicode.com/posts';
  const resp = await fetch(URL);
  const data = await resp.json();
  console.log('data', data);
  return {
    props: {topics:data}, 
  } 
}