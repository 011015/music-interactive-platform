import type { ReactNode } from "react"
import { UpNav, LeftNav } from "@/components/nav"
import styles from "./index.module.scss"

interface LayoutProps {
    activeIndex: number;
    children: ReactNode;
}
function RootLayout({ children, activeIndex }: LayoutProps) {
    return (
        <div className={styles.rootCover}>
            <UpNav style={{backgroundColor: "white"}} left={{
                activeBtn: true,
                activeIndex,
                list: [
                    {url: "/", name: "首页"}, 
                    {url: "/songs", name: "曲谱"}
                ]
            }} right={{
                list: [
                    {url: "/users/register", name: "注册"}, 
                    {url: "/users/login", name: "登录"}
                ]
            }} />
            { children }
        </div>
    )
}

function LoginLayout({ children, activeIndex }: LayoutProps) {
    return (
        <div className={styles.loginCover}>
            <LeftNav 
                activeIndex={ activeIndex } 
                nameList={[
                    {url: '/users/register', name: '用户注册'}, 
                    {url: '/users/login', name: '用户登录'}, 
                    {url: '/managers/login', name: '管理员登录'}
                ]} />
            { children }
        </div>
    )
}

export {
    RootLayout,
    LoginLayout
}