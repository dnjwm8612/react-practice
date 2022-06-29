import {useRouter} from 'next/router';
export default function Topic(){
    const router = useRouter();
    const id = router.query.id;
    return <>/sub/[id].js {id}</>
}