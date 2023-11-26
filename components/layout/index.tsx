import { UpNav, LeftNav } from "../nav"
import styles from "./index.module.scss"
function RootLayout({ children, activeIndex }: any) {
    return (
        <>
            <UpNav left={{
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
        </>
    )
}

function LoginLayout({ children, activeIndex }: any) {
    return (
        <div className={styles.cover}>
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