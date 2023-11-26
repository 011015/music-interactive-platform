import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

import { RootLayout } from "@/components/layout"
import Form from "@/components/form"
import Button from "@/components/button"
import { RowSingle } from "@/components/block"
import Input from "@/components/input"
import { ReturnTop } from "@/components/nav"

import styles from "./index.module.scss"

const { Select } = Input;

function Song() {
    const router = useRouter();
    const [ song, setSong ] = useState({});
    useEffect(() => {
        const { pid } = router.query;
        const url = `/api/songs/${pid}`;
        const options = {
            method: 'GET',
            headers: {
				"Content-Type": "application/json",
            }
        }
        sendRequest(url, options);
    }, [router.query.pid]);
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
                <div className={styles.songContainer}>
                    <h3 className={styles.songHeader}>
                        <Image src="/image/songIcon.png" alt="图片" width={30} height={30} />
                        <span>曲谱</span>
                    </h3>
                    <Form noStyle={true}>
                        <Form.Item>
                            <Input.File />
                        </Form.Item>
                        <Form.Item>
                            <Select>
                                <Select.CheckboxItem label={"允许下载"} name={"权限"} value={"下载"} />
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button>上传</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}

Song.getLayout = function getLayout(page: any) {
    return (
        <RootLayout activeIndex={1}>
            {page}
            <ReturnTop />
        </RootLayout>
    )
}

export default Song