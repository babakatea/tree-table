import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'P/n',
    dataIndex: 'pn'
  },
  {
    title: 'Applicable APU',
    dataIndex: 'applicableAPU'
  },
  {
    title: 'Base',
    dataIndex: 'base'
  },
  {
    title: 'Actual location',
    dataIndex: 'actualLocations'
  }

];

const data = [
  {
    pn: 123,
    applicableAPU: 'CFM56-5B',
    base: 'DME',
    actualLocations: 'A1',
    key: 1,
    children: [
      {
        actualLocations: 'A2',
        key: 11,
      },
      {
        actualLocations: 'A3',
        key: 12,
      },
    ]
  },
  {
    applicableAPU: '',
    base: 'SVO',
    actualLocations: 'B1',
    key: 2,
    children: [
      {
        actualLocations: 'B2',
        key: 21,
      },
    ]
  },
  {
    pn: 234,
    applicableAPU: 'CFM56-7B',
    base: 'DME',
    actualLocations: 'C1',
    key: 3,
    children: [
      {
        key: 31,
        actualLocations: 'C2',
      },
    ]
  },
];

/**
 * Таблица на основе Ant Design
 */
export const AntTable: React.FC = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};
