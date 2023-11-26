export default function handler(req: any, res: any) {
    const { id } = req.query;
    res.status(200).json({
        id: `${id}`,
        url: "/image/cover1.jpg", 
        name: "稻香", 
        singer: "周杰伦", 
        lyricist: "周杰伦", 
        composer: "周杰伦", 
    })
}