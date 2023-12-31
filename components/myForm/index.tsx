import Form from "@/components/form"
import Button from "@/components/button"
import Input from "@/components/input"
import Link from "next/link"

import styles from "./index.module.scss"

const { Select } = Input;

function SearchForm(props: any) {
    const onFinish = (e: any, data: any) => {
        const url = "/api/songTypes/search";
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
				"Content-Type": "application/json",
			},
        }
        sendRequest(url, options);
    }
    const sendRequest = async (url: string, options: any) => {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
    }
    return (
        <Form className={styles.form} {...props}>
            <Form.Item className={styles.formItem} name={"收藏数"}>
                <label>收藏数: </label>
                <Select>
                    <Select.SelectGroup activeIndex={0} list={[
                        {name: "升序", value: "asc"}, 
                        {name: "降序", value: "desc"}]} 
                    />
                </Select>
            </Form.Item>
            <Form.Item className={styles.formItem} name={"收藏数"}>
                <label>收藏数: </label>
                <Select>
                    <Select.SelectGroup activeIndex={0} list={[
                        {name: "升序", value: "asc"}, 
                        {name: "降序", value: "desc"}]} 
                    />
                </Select>
            </Form.Item>
            <Form.Item className={styles.formItem}>
                <Button>搜索</Button>
            </Form.Item>
        </Form>
    )
}

function LoginForm(props: any) {
    return (
        <Form {...props}>
            <Form.Item label={"名称"} name={"name"} required={true}>
                <Input.Text />
            </Form.Item>
            <Form.Item label={"密码"} name={"password"} required={true}>
                <Input.Password />
            </Form.Item>
            <Form.Item label={"性别"} name={"gender"}>
                <Select>
                    <Select.RadioItem label={"男"} value={"male"} />
                    <Select.RadioItem label={"女"} value={"female"} />
                </Select>
            </Form.Item>
            <Form.Item>
                <Button>登录</Button>
                <Link href="/">
                    <Button>返回主页</Button>
                </Link>
            </Form.Item>
        </Form>
    )
}

function UploadForm() {
    return (
        <Form noStyle={true}>
            <Form.Item>
                <Input.File accept="image/*" multiple={true} />
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
    )
}

export {
    SearchForm,
    LoginForm,
    UploadForm
}