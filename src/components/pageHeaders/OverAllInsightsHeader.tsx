
import {
    Select
} from 'antd'
import { DropdDownIcon, FilterIcon } from '@/utils/arrowIcons'
import ExportBtn from '../buttons/dataBtns/ExportBtn'
import styles from '../../../styles/components/headers/overallInsights.header.module.scss'

export default function OverAllInsightsHeader() {
    return (
        <div className={styles.insightsHeader}>
            <div className={styles.pageInfo}>
                <h1 className={styles.pageName}>History</h1>
            </div>
            <div className={styles.actions}>
                <button className={styles.filterBtn}>
                    <FilterIcon />
                    <Select
                        suffixIcon={<DropdDownIcon />}
                        bordered={false}
                        defaultValue={
                            { value: 'Ascending', label: 'Ascending' }
                        }
                        options={[
                            { value: 'Ascending', label: 'Ascending' },
                            { value: 'Descending', label: 'Descending' }
                        ]}
                    />
                </button>
                <ExportBtn text="Export List" />
            </div>
        </div>
    )
}