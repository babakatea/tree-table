import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { tableConfig } from "./tableConfig";
import { fetchMockData, MockDataType } from "../../services/fetchMockData";
import { TableCellStyled } from "./styles";

export const MaterialTable: React.FC = () => {

  const [data, setData] = useState<MockDataType[] | undefined>();

  const {columns} = tableConfig;

  useEffect( () => {
    fetchMockData().then(newData => setData(newData));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map(({key, name}) => (
              <TableCell key={key}>{name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow key={row.pn}>
              <TableCell component="th" scope="row">
                {row.pn}
              </TableCell>
              <TableCell>{row.applicableAPU}</TableCell>
              <TableCellStyled><span>{row.base ? '+' : undefined}</span></TableCellStyled>
              <TableCell>{row.base}</TableCell>
              <TableCell>{row.actualLocation}</TableCell>
            </TableRow>
          )) || '...Loading'}
        </TableBody>
      </Table>
    </TableContainer>
  );
};