import Sidebar from '@/components/sidebar/Sidebar'
import styles from '../../../styles/dashboardlaymout.module.scss'
import Signup from '@/components/registration/Registration'
import Registration from '../registration/page'
import OtpScreen from '@/components/otp/OtpScreen'

export default function DashboardLayout(
    {
        children
    }: {
        children: React.ReactNode
    }
) {
    return (
        <>
            <div>
                <Registration />
                {/* <OtpScreen/> */}
            </div>

            {/* <div className={styles.wrapper}>
            <div className={styles.sidebarWrapper}>
                <Sidebar />
            </div>
            <div className={styles.routesWrapper}>
                {children}
            </div>

            </div> */}
        </>



    )
}