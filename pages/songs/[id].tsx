import { useEffect, useState } from "react"
import type { ReactElement } from "react"
import { useRouter } from "next/router"

import { RootLayout } from "@/components/layout"
import { RowSingle } from "@/components/block"
import Input from "@/components/input"
import { ReturnTop } from "@/components/nav"
import { UploadForm } from "@/components/myForm"
import { Header } from "@/components/header"
import { CommentSingle } from "@/components/block"

import styles from "./index.module.scss"

function Song() {
    const router = useRouter();
    const [ song, setSong ] = useState({});
    useEffect(() => {
        const { id } = router.query;
        const url = `/api/songs/${id}`;
        const options = {
            method: 'GET',
            headers: {
				"Content-Type": "application/json",
            }
        }
        sendRequest(url, options);
    }, [router.query.id]);
    const sendRequest = async (url: string, options: any) => {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setSong(data);
    }
    return (
        <>
            <div className={styles.container}>
                <RowSingle content={song} />
                <Header imgSrc="/image/songIcon1.png" titleName="曲谱">
                    <UploadForm />
                </Header>
                <Header imgSrc="/image/songIcon2.png" titleName="音频">
                    <UploadForm />
                </Header>
                <Header imgSrc="/image/songIcon3.png" titleName="评论">
                    <Input.Textarea />
                </Header>
                <Header imgSrc="/image/songIcon4.png" titleName="所有评论">
                    <CommentSingle />
                </Header>
            </div>
        </>
    )
}

Song.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout activeIndex={1}>
            {page}
            <ReturnTop />
        </RootLayout>
    )
}

export default Song