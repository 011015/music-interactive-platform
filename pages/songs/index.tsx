import { useState } from "react"
import type { ReactElement } from "react"
import { RootLayout } from "@/components/layout"
import { ColumnBlock } from "@/components/block"
import { SearchForm } from "@/components/myForm"
import Input from "@/components/input"

import styles from "./index.module.scss"

const songs = [
    {
        id: 1,
        url: "/image/cover1.jpg", 
        name: "稻香", 
        singer: "周杰伦", 
        lyricist: "周杰伦", 
        composer: "周杰伦", 
    },
    {
        id: 2,
        url: "/image/cover2.png", 
        name: "稻香", 
        singer: "周杰伦", 
        lyricist: "周杰伦", 
        composer: "周杰伦", 
    },
    {
        id: 3,
        url: "/image/cover1.jpg", 
        name: "稻香", 
        singer: "周杰伦", 
        lyricist: "周杰伦", 
        composer: "周杰伦", 
    },
    {
        id: 4,
        url: "/image/cover1.jpg", 
        name: "稻香", 
        singer: "周杰伦", 
        lyricist: "周杰伦", 
        composer: "周杰伦", 
    },
    {
        id: 5,
        url: "/image/cover2.png", 
        name: "稻香", 
        singer: "周杰伦", 
        lyricist: "周杰伦", 
        composer: "周杰伦", 
    }
]

function Songs() {
    const [ textValue, setTextValue ] = useState("");
    const handleChange = (e: any) => {
        setTextValue(e.target.value);
        const url = "/api/songTypes/search";
        const options = {
            method: 'POST',
            body: JSON.stringify({data: e.target.value}),
            headers: {
				"Content-Type": "application/json",
            }
        }
        sendRequest(url, options);
    }
    const sendRequest = async (url: string, options: any) => {
        const response = await fetch(url, options);
        const data = await response.json();
    }
    return (
        <div className={styles.main}>
            <div className={styles.searchbox}>
                <Input.Text 
                    placeholder="输入用户名/曲谱名称/演唱/作词/作曲" 
                    style={{width: "270px", fontSize: "16px"}} 
                    onChange={handleChange}
                    value={textValue}
                />
                <SearchForm />
            </div>
            <div>
                <ColumnBlock contents={songs} />
            </div>
        </div>
    )
}

Songs.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout activeIndex={1}>
            {page}
        </RootLayout>
    )
}

export default Songs