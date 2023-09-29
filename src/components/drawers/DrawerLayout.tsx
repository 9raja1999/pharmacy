'use client'
import {
    Drawer
} from 'antd'
import {DrawerCloseIcon} from '@/utils/buttonIcons'



interface IDrawer {
    open: boolean,
    onClose: () => void,
    children : React.ReactNode
}


export default function DrawerLayout({ open, onClose, children }: IDrawer) {
    return (
        <Drawer
            title={null}
            placement='right'
            width={500}
            onClose={onClose}
            open={open}
            extra={null}
            closeIcon={<DrawerCloseIcon />}
            destroyOnClose
        >
           {children}
        </Drawer>
    )
}