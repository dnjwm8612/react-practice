import topic from '../../../data/topic.json';
export default function handler(req, res) {
    const id = Number(req.query.id);
    const _topic = topic.filter(e=>{
        if(e.id === id){
            return true;
        } else {
            return false;
        }
    });
    res.status(200).json(_topic[0]);
}
