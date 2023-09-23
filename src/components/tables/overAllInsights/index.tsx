'use client'
import {useState} from 'react'
import {
    Table
} from 'antd'
import PaginationItemRender from '../pagination/PaginationItemRender'
import { PrettyDate } from '@/utils/DateFormatFunctions/DateFunctions'
import type { ColumnsType } from 'antd/es/table'
import type { TableRowSelection } from 'antd/es/table/interface';
import {
    ThreeDots
} from '@/utils/arrowIcons'

interface DataType {
    key : Number,
    saleId: Number,
    customerName: String,
    timestamp: any,
    billAmount: Number
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Sales Id',
        dataIndex: 'saleId',
    },
    {
        title: 'Customer Name',
        dataIndex: 'customerName',
    },
    {
        title: 'Timestamp',
        dataIndex: 'timestamp',
        render : (timeStamp) => PrettyDate(timeStamp)
    },
    {
        title: 'Bill Amount',
        dataIndex: 'billAmount',
    },
    {
        title : 'Action',
        key : 'operation',
        render : () => <ThreeDots />

    }
];

const data: DataType[] = [
    {   
        key: 1,
        saleId: 12454545454,
        customerName: 'Raja Ehsan',
        timestamp: Date(),
        billAmount: 10000
    },
    {
        key: 2,
        saleId: 545454,
        customerName: 'Raja Ehsan',
        timestamp: Date(),
        billAmount: 10000
    },
    {
        key: 3,
        saleId: 363639856565,
        customerName: 'Raja Ehsan',
        timestamp: Date(),
        billAmount: 10000
    },
    {   
        key:4,
        saleId: 12454545454,
        customerName: 'Raja Ehsan',
        timestamp: Date(),
        billAmount: 10000
    },
    {
        key: 5,
        saleId: 545454,
        customerName: 'Raja Ehsan',
        timestamp:  Date(),
        billAmount: 10000
    },
    {
        key: 6,
        saleId: 545454,
        customerName: 'Raja Ehsan',
        timestamp:  Date(),
        billAmount: 10000
    },
    {
        key: 7,
        saleId: 545454,
        customerName: 'Raja Ehsan',
        timestamp:  Date(),
        billAmount: 10000
    },
    {
        key: 8,
        saleId: 545454,
        customerName: 'Raja Ehsan',
        timestamp:  Date(),
        billAmount: 10000
    },
];




export default function OverAllinsightsTable() {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<DataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };
    return (
        <Table
            size={'small'}
            
            pagination={{ 
                pageSize: 7,
                position: ['bottomLeft'],
                itemRender: PaginationItemRender
            }}
            style={{ height: '100%' }}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
        />
    )
}