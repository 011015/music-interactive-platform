import { useState } from "react"
import Link from "next/link"
import Button from "../button"
import styles from "./index.module.scss"
import "@/components/index.global.scss"

function LeftNav(props: any) {
    const { activeIndex, nameList } = props;
    const [ active, setActive ] = useState(new Array(nameList.length)
                                            .fill(false)
                                            .map((_, index) => 
                                            index === activeIndex ? true : false));
    const changeActive = (i: number) => {
        setActive(active.map((_, index) => index === i ? true : false))
    }
    return (
        <div className={styles.leftNavContainer}>
            {nameList.map((e: any, index: number) => 
                <Link key={index} href={e.url}>
                    <Button type="nav" style={{width: '100%'}} 
                        className={active[index] ? "navButtonActive" : ''} 
                        onClick={() => changeActive(index)}>{e.name}
                    </Button>
                </Link>
            )}
        </div>
    )
}

function UpNav(props: any) {
    const { left, right } = props;
    let getLeft = (index: number) => ({}), getRight = (index: number) => ({}); 
    if (left?.activeBtn) {
        const [ leftActive, setLeftActive ] = useState(new Array(left.list.length)
                                                .fill(false)
                                                .map((_, index) => 
                                                index === left.activeIndex ? true : false));
        const changeLeftActive = (i: number) => {
            setLeftActive(leftActive.map((_, index) => index === i ? true : false))
        }
        getLeft = (index: number) => {
            return {
                className: leftActive[index] ? "upNavButtonActive" : '',
                onClick: () => changeLeftActive(index)
            }
        }
    }

    if (right?.activeBtn) {
        const [ rightActive, setRightActive ] = useState(new Array(right.list.length)
                                                .fill(false)
                                                .map((_, index) => 
                                                index === right.activeIndex ? true : false));
        const changeRightActive = (i: number) => {
            setRightActive(rightActive.map((_, index) => index === i ? true : false))
        }
        getRight = (index: number) => {
            return {
                className: rightActive[index] ? "upNavButtonActive" : '',
                onClick: () => changeRightActive(index)
            }
        }
    }

    return (
        <div className={styles.upNavContainer}>
            <ul className={styles.left}>
                {left.list.map((e: any, index: number) => 
                    <li key={index}>
                        <Link href={e.url}>
                            <Button type="upNav" {...getLeft(index)}>
                                {e.name}
                            </Button>
                        </Link>
                    </li>
                )}
            </ul>
            <ul className={styles.right}>
                {right.list.map((e: any, index: number) => 
                    <li key={index}>
                        <Link href={e.url}>
                            <Button type="upNav" {...getRight(index)}>
                                {e.name}
                            </Button>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

function ReturnTop() {
    return (
        <>
            <div className={styles.returnTop}>
                <Link href="#top">
                    <Button type="upNav">返回顶部</Button>
                </Link>
            </div>
        </>
    )
}

export { LeftNav, UpNav, ReturnTop }