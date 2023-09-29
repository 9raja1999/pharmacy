'use client'

import { useState, useCallback } from 'react'
import {
    Select
} from 'antd'
import { DropdDownIcon, FilterIcon } from '@/utils/arrowIcons'
import { AddCircularIcon } from '@/utils/buttonIcons'
import ExportBtn from '../buttons/dataBtns/ExportBtn'
import AddVendorForm from '../forms/AddVendorForm'
import DrawerLayout from '../drawers/DrawerLayout'
import styles from '../../../styles/components/headers/page.header.module.scss'

export default function VendorHeader() {
    const [open, setOpen] = useState<boolean>(false)

    const handleClose = useCallback(() => setOpen(false), [open])


    return (
        <div className={styles.insightsHeader}>
            <div className={styles.pageInfo}>
                <h1 className={styles.pageName}>Vendors</h1>
            </div>
            <div className={styles.actions}>
                <button onClick={() => setOpen(true)} className={styles.addBtn}>
                    <AddCircularIcon />
                    <span>Add new vendor</span>
                </button>
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

            {/* Add vendor drawer */}
            <DrawerLayout
                open={open}
                onClose={handleClose}
            >
               <AddVendorForm />
            </DrawerLayout>
        </div>
    )
}