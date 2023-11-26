import type { ReactElement } from "react"
import { LoginLayout } from "@/components/layout"
import { LoginForm } from "@/components/myForm"

function Login() {
    const onFinish = (e: any, data: any) => {
		const url = '/api/users/login';
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
            titleName={'用户登录'} 
            name={'userLogin'} 
            onFinish={onFinish}
        />
    )
}

Login.getLayout = function getLayout(page: ReactElement) {
    return (
        <LoginLayout activeIndex={1}>
            { page }
        </LoginLayout>
    )
}

export default Login