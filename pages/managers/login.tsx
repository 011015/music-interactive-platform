import type { ReactElement } from "react"
import { LoginLayout } from "@/components/layout"
import { LoginForm } from "@/components/myForm"

function Login() {
    const onFinish = (e: any, data: any) => {
		const url = '/api/managers/login';
		const options = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		};
        makeRequest(url, options);
    }
    const makeRequest = async (url: string, options: any) => {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
    }
    return (
        <LoginForm 
            titleName={'管理员登录'} 
            name={'managerLogin'} 
            onFinish={onFinish} 
        />
    )
}

Login.getLayout = function getLayout(page: ReactElement) {
    return (
        <LoginLayout activeIndex={2}>
            { page }
        </LoginLayout>
    )
}

export default Login