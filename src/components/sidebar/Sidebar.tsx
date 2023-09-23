'use client'

import CompanyProfile from './CompanyProfile/CompanyProfile'
import DateTime from './DateTime/DateTime'
import {
    OverAllInsightsIcon,
    InventoryIcon,
    VendorsIcon,
    PosIcon,
    InsightsIcon,
    LogoutIcon
} from '@/utils/sidebarIcons'
import styles from '../../../styles/sidebarRoutes.module.scss'
import { useState } from 'react'

interface INavLinkItem {
    icon: any,
    navgroup: string,
    navname: string
}



export default function Sidebar() {
    const [activeLink, setActiveLink] = useState<Number>(0)
    const [navItems, setNavItems] = useState<INavLinkItem[]>(
        [
            { icon: <OverAllInsightsIcon />, navgroup: 'Dashboard', navname: 'OverAll Insights' },
            { icon: <InventoryIcon />, navgroup: 'Inventory', navname: 'Medicine Stock' },
            { icon: <VendorsIcon />, navgroup: 'Vendors', navname: 'Distributors' },
            { icon: <PosIcon />, navgroup: 'POS', navname: 'Sales Point' },
            { icon: <InsightsIcon />, navgroup: 'Insights', navname: 'Customers' },
        ]
    )

    const handleChangeLink = (linkNo: Number) => {
        setActiveLink(linkNo)
    }

    return (
        <div className={styles.sidebarSection}>
            <CompanyProfile />
            <DateTime />
            <nav className={styles.navWrapper}>
                {
                    navItems.map((element, index) => (
                        <div
                            className={`${styles.navItem} ${index == activeLink && styles.active} `}
                            onClick={() => handleChangeLink(index)}
                        >
                            <div className={styles.left}>
                                {element?.icon}
                            </div>
                            <div className={styles.right}>
                                <p className={styles.navGroup}>{element?.navgroup}</p>
                                <p className={styles.navGroupName}>{element.navname}</p>
                            </div>
                        </div>
                    ))
                }
                <div
                    className={`${styles.navItem} ${styles.stickyBottom}`}
                >
                    <div className={styles.left}>
                       <LogoutIcon />
                    </div>
                    <div className={styles.right}>
                        <p className={styles.navGroup}>Exit System</p>
                        <p className={styles.navGroupName}>Logiut & Exit</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}