'use client'

import OverAllInsightsHeader from "../pageHeaders/OverAllInsightsHeader"
import AnalyticCard from "../cards/AnalyticCard"
import OverAllinsightsTable from "../tables/overAllInsights"
import styles from '../../../styles/pages/overAllInsights/insights.module.scss'
import anemitiesStyles from '../../../styles/anemities/anemities.module.scss'

export default function OverAllInsightsWrapper() {
    return (
        <div className={styles.insightsWrapper}>
            <OverAllInsightsHeader />
            <div className={`row ${styles.cardsSection}`}>
                <div className="col-lg-6">
                    <AnalyticCard />
                </div>
                <div className="col-lg-6">
                    <AnalyticCard />
                </div>
            </div>
            <div className={`row`}>
                <div className={`col-lg-12`} >
                    <div className={`${styles.tableSection} ${anemitiesStyles.overflowScroll}`}>
                        <OverAllinsightsTable />
                    </div>
                </div>
            </div>

        </div>
    )
}