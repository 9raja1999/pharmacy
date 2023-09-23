'use client'
import {
    GoToIcon
} from '@/utils/arrowIcons'
import styles from '../../../../styles/buttons/navigationBtns.module.scss'

export default function GoToBtn() {
    return <div className={styles.hoverCursor}>
        <GoToIcon />
    </div>
}