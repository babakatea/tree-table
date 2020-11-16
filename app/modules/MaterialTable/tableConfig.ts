export type ColumnType = {
  name: string;
  key: number;
};

export type TableConfigType = {
  columns: ColumnType[];
}

export const tableConfig: TableConfigType = {
  columns: [
    {
      name: 'P/n',
      key: 0
    },
    {
      name: 'Applicable APU',
      key: 1
    },
    {
      name: '',
      key: 2
    },
    {
      name: 'Base',
      key: 3
    },
    {
      name: 'Actual location',
      key: 4
    }
  ]
};