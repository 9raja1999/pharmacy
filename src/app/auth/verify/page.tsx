'use client'
import {useRouter} from 'next/navigation'
import OtpInput from 'react-otp-input'
import {
    Button,
    Input
} from 'antd'
import styles from '../../../../styles/pages/auth/auth.page.module.scss'
import { useState } from 'react';



export default function VerifyPage() {
    const router = useRouter()
    const [otp, setOtp] = useState('')

    const handleSubmit = (e : any) => {
        e.preventDefault()

        router.replace('/')
    }


    return (

        <div className={styles.holderWrapper}>
            <h1 className={styles.pageTitle}>Verify your identity</h1>
            <p className={styles.pageDescription}>Sorry for the inconvenience but its for your security.</p>

            <form onSubmit={handleSubmit}>
                <div className={styles.label} style={{marginBottom : '16px'}}>
                    Verification Code <span className={styles.required}>*</span>
                </div>

                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={null}
                    containerStyle={{
                        justifyContent: 'space-between',
                        marginBottom: '24px'
                    }}
                    renderInput={(props) => <Input {...props} className={styles.otpInput} size='large' />}
                />

                <div className='d-flex justify-content-between align-items-center mb-4'>
                    <p className='mb-0'>01:56 left</p>
                    <p className={styles.resendCode}>Didn't Received Code? <span>Resend Code</span></p>
                </div>


                <Button
                    disabled={otp.length !== 6 ? true : false}
                    className={`${styles.submitBtn} ${styles.spaceBottom}`}
                    size='large'
                    type="primary"
                    htmlType="submit"
                >
                    Login Now
                </Button>
            </form>
        </div>
    )
}