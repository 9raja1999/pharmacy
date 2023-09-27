'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Input, Button } from 'antd';
import styles from '../../../styles/Otp/OtpScreen.module.scss';
import Timer from '../Timer/Timer';
import { useRouter } from 'next/navigation';

const OtpScreen: React.FC = () => {
    const router = useRouter();

    const [inputValues, setInputValues] = useState<string[]>(Array(6).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null));

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const newValue = e.target.value;
        const newInputValues = [...inputValues];
        newInputValues[index] = newValue;
        setInputValues(newInputValues);

        if (newValue && index < 5) {
            const nextInput = inputRefs.current[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        } else if (!newValue && index > 0) {
            const prevInput = inputRefs.current[index - 1];
            if (prevInput) {
                prevInput.focus();
            }
        }
    };

    const handleInputKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === 'Backspace' && !inputValues[index] && index > 0) {
            const prevInput = inputRefs.current[index - 1];
            if (prevInput) {
                prevInput.focus();
            }
        }
    };

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    return (

        <div className={styles.container}>
        <h2>Verify your identity</h2>
        <p className={styles.text}>
          Sorry for the inconvenience, but it's for your security.
        </p>
        <p className={styles.verifytext}>Verification Code<span>*</span></p>
        <div className={styles.inputContainer}> 
        {inputValues.map((value, index) => (
                    <Input
                        key={index}
                        className={styles.input}
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleInputKeyDown(e, index)}
                        ref={(input:any) => (inputRefs.current[index] = input)}
                    />
                ))}
        </div>
  
        <div className={styles.timerContainer}>
          <Timer />
          <p className={styles.resendCode}>
            Didn't Received Code? <a href='#'>Resend Code</a>
          </p>
        </div>
  
        <Button type="primary" className={styles.submitButton} onClick={() => router.push('/login')}>
          Login Now
        </Button>
      </div>
    );
};

export default OtpScreen;
