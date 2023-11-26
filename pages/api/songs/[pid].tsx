export default function handler(req: any, res: any) {
    console.log(req);
    const { pid } = req.query;
    console.log(pid);
    res.status(200).json({
        id: `${pid}`,
        url: "/image/cover1.jpg", 
        name: "稻香", 
        singer: "周杰伦", 
        lyricist: "周杰伦", 
        composer: "周杰伦", 
    })
}