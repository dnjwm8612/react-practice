import { Link } from 'react-router-dom';

export function Nav(props) {
  const tagList = props.data.map((evt) => {
    return <li key={evt.id}><Link to={"/read/" + evt.id} onClick={(evt) => {
      props.onSelect(evt.id);
    }}>{evt.title}</Link></li>;
  });
  // [
  //   <li>
  //     <a href="/read/1">html</a>
  //   </li>,
  //   <li>
  //     <a href="/read/2">css</a>
  //   </li>
  // ];
  return <nav>
    <ol>
      {tagList}
    </ol>
  </nav>;
}
