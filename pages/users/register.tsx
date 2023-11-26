import type { ReactElement } from "react"
import { LoginLayout } from "@/components/layout"
import { LoginForm } from "@/components/myForm"

function Register() {
    const onFinish = (e: any, data: any) => {
		const url = '/api/users/register';
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
            titleName={'用户注册'} 
            name={'userRegister'} 
            onFinish={onFinish}
        />
    )
}

Register.getLayout = function getLayout(page: ReactElement) {
    return (
        <LoginLayout activeIndex={0}>
            { page }
        </LoginLayout>
    )
}

export default Register