import Link from 'next/link';
export default function Index(){
  return <>
      <h1>지환님 천재</h1>
      <ol>
          <li><Link href="/sub">/sub/index.js</Link></li>
          <li><Link href="/sub/about">/sub/about.js</Link></li>
          <li><Link href="/sub/1">/sub/[id].js</Link></li>
      </ol>
  </>
}