'use client'
import {
    InfoIcon, AnalyticIcon
} from '@/utils/buttonIcons'
import { RightArrowIcon } from '@/utils/arrowIcons'

import styles from '../../../styles/components/cards/analytic.card.module.scss'


export default function AnalyticCard() {
    return (
        <div className={styles.analyticCardWrapper}>
            <div className={styles.infoIcon}>
                <InfoIcon />
            </div>
            <div className={styles.cardTitleSection}>
                <AnalyticIcon />
                <p className={styles.cardTitle}>This Month Sale</p>
                <RightArrowIcon/>
            </div>
            <div className={styles.cardData}>
                <p>
                    40,000.00
                    <span className={styles.unit}>PKR</span>
                </p>
            </div>
        </div>
    )
}