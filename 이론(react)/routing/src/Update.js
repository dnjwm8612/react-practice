import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Update(props) {
  const params = useParams();
  const id = Number(params.id);
  // const [topic, setTopic] = useState({ title: null, body: null });

  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  
  async function refresh() {
    const resp = await fetch('/topics/' + id);
    const data = await resp.json();
    // setTopic(data);
    setTitle(data.title);
    setBody(data.body);
  }
  useEffect(() => {
    refresh();
  }, [id]);

  function submitHandler(evt) {
    evt.preventDefault();
    const title = evt.target.title.value;
    const body = evt.target.body.value;
    props.onUpdate(id, title, body);
  }
  return <article>
    <h1>Update</h1>
    <form onSubmit={submitHandler}>
      <p><input type="text" name="title" placeholder="title" value={title} onChange={(e)=>{
        // const newTopic = {...topic, title:e.target.value};
        // setTopic(topic=>newTopic);
        setTitle(e.target.value);
      }}></input></p>
      <p><textarea name="body" placeholder="body" value={body}  onChange={(e)=>{
        // const newTopic = {...topic, body:e.target.value};
        // setTopic(topic=>newTopic);
        setBody(e.target.value);
      }}></textarea></p>


      <p><input type="submit" value="update"></input></p>
    </form>
  </article>;
}
