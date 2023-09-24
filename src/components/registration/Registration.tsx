import { Button, Checkbox } from 'antd';
import styles from '../../../styles/registration/Registration.module.scss';
import FormField from '../TextInput/TextInput';

const Registration = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signup}>
        <h2>Sign up to your Pharmacy</h2>
        <p>Start managing your stock, and get real insights about sales</p>
        <FormField label="Email Address" id="email" placeholder="Email" />
        <FormField label="Password" id="password" placeholder="Password" />
        <div className={styles.flexContainer}>
          <Checkbox>Remember this device</Checkbox>
          <a href='#' className={styles.forgotPass}>Forgot Your Password?</a>
        </div>
        <p className={styles.guide}>The account is register by uxbolt.co, you are consenting to our <a className={styles.color} href='#'>Terms of Service</a> and confirming that you have reviewed and accepted the <a href='#' className={styles.statement}>Global Privacy Statement.</a></p>
        <Button type="primary" className={styles.signupButton}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Registration;
