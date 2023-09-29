'use client'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {
    Form,
    Input,
    Button,
    Checkbox
} from 'antd'
import styles from '../../../styles/pages/auth/auth.page.module.scss'


const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
    <div className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
    </div>
);

export default function LoginPage() {
    const router = useRouter()
    const handleSubmit = (data: any) => {
        console.log("DATA", data)
        router.push('/auth/verify' , {scroll : false})
    }


    return (
        <div className={styles.holderWrapper}>
            <h1 className={styles.pageTitle}>Sign up to your Pharmacy</h1>
            <p className={styles.pageDescription}>Start managing your stock, and get real insights about sales</p>

            <Form
                layout='vertical'
                onFinish={handleSubmit}
                requiredMark={customizeRequiredMark}
            >

                <Form.Item
                    label="Register Email"
                    name='email'
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input size='large' placeholder="ex. email@yopmail.com" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password size='large' placeholder="Enter password" />
                </Form.Item>


                <div className={styles.rememberSection}>
                    <Form.Item
                        className={styles.checkboxRenderer}
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox className={styles.checkkbox}>Remember this device</Checkbox>
                    </Form.Item>
                    <Link className={styles.forgotLink} href='/auth/forgot-password'>Forget your password?</Link>
                </div>

                <p className={styles.formDescription}>
                    The account is register by uxbolt.co, you are consenting to our <Link href='/'>Terms of Service</Link> and confirming that you have reviewed and accepted the <Link href='/'>Global Privacy Statement.</Link>
                </p>

                <Button className={styles.submitBtn} size='large' type="primary" htmlType="submit">
                    Continue
                </Button>
            </Form>

        </div>
    )
}