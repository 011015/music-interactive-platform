import { SearchBlock, RowBlock } from "@/components/block"
import { RootLayout } from "@/components/layout"
import Input from "@/components/input"
import { SearchForm } from "@/components/myForm"

import styles from "./index.module.scss"

const { Select } = Input;

const songs = [
    {
        id: 1, 
        url: "/image/cover1.jpg", 
        name: "稻香", 
        singer: "周杰伦", 
        lyricist: "周杰伦", 
        composer: "周杰伦", 
        type: ["嘻哈", "民谣"], 
        collectNumber: 2
    },
    {
        id: 2,
        url: "/image/cover2.png", 
        name: "稻香", 
        singer: "周杰伦", 
        lyricist: "周杰伦", 
        composer: "周杰伦", 
        type: ["嘻哈", "民谣"], 
        collectNumber: 2
    },
    {
        id: 3,
        url: "/image/cover1.jpg", 
        name: "稻香", 
        singer: "周杰伦", 
        lyricist: "周杰伦", 
        composer: "周杰伦", 
        type: ["嘻哈", "民谣"], 
        collectNumber: 2
    },
    {
        id: 4,
        url: "/image/cover1.jpg", 
        name: "稻香", 
        singer: "周杰伦", 
        lyricist: "周杰伦", 
        composer: "周杰伦", 
        type: ["嘻哈", "民谣"], 
        collectNumber: 2
    },
    {
        id: 5,
        url: "/image/cover2.png", 
        name: "稻香", 
        singer: "周杰伦", 
        lyricist: "周杰伦", 
        composer: "周杰伦", 
        type: ["嘻哈", "民谣"], 
        collectNumber: 2
    }
]

function Root() {
    const onChange = (e: any, data: any) => {
        const url = "/api/songTypes/search";
        const options = {
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {
				"Content-Type": "application/json",
            }
        }
        sendRequest(url, options);
    }
    const sendRequest = async (url: string, options: any) => {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
    }
    return (
        <>
            <div className={styles.main}>
                <div className={styles.searchbox}>
                    <SearchBlock>
                        <Select name={"songTypes"} onChange={onChange}>
                            <Select.CheckboxItem label={"中国风"} />
                            <Select.CheckboxItem label={"摇滚"} />
                        </Select>
                    </SearchBlock>
                    <SearchForm />
                </div>
                <div>
                    <RowBlock contents={songs} />
                </div>
            </div>
        </>
    )
}

Root.getLayout = function getLayout(page: any) {
    return (
        <RootLayout activeIndex={0}>
            {page}
        </RootLayout>
    )
}

export default Root