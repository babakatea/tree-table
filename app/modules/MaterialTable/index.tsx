import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { tableConfig } from "./tableConfig";
import { fetchMockData, MockDataType } from "../../services/fetchMockData";
import { CollapseContentStyled, CollapseStyled, ExpandIconStyled, LoadingStyled, TableCellCollapseStyled, TableCellStyled, TableHeadStyles } from "./styles";

/**
 * Таблица на основе Material UI Table
 */
export const MaterialTable: React.FC = () => {
  const [data, setData] = useState<MockDataType[] | undefined>();

  const [collapsedRows, setCollapsedRows] = useState<number[]>([]); // Список "открытых" строк

  const {columns} = tableConfig; // список колонок для таблицы

  // эмуляция загрузки данных
  useEffect(() => {
    fetchMockData().then(newData => setData(newData));
  }, []);

  // обработка клика на "+"
  const onExpandClick = (rowPn: number) => setCollapsedRows(collapsedRows.includes(rowPn)
    ? collapsedRows.filter(collapsedRow => collapsedRow !== rowPn)
    : [...collapsedRows, rowPn]);

  return (
    <Paper elevation={2}>
      <Table aria-label="simple table">
        <TableHeadStyles>
          <TableRow>
            {columns.map(({key, name, align}) => (
              <TableCell key={key} align={align}>{name}</TableCell>
            ))}
          </TableRow>
        </TableHeadStyles>
        <TableBody>
          {data?.map((row, index) => {
            const isExpanded: boolean = collapsedRows.includes(row.pn);

            return (
              <>
                <TableRow key={row.pn}>
                  <TableCell component="th" scope="row">
                    {row.pn}
                  </TableCell>
                  <TableCell>{row.applicableAPU}</TableCell>
                  <TableCellStyled>
                    <ExpandIconStyled aria-label="expand row" onClick={() => onExpandClick(row.pn)}>
                      +
                    </ExpandIconStyled>
                  </TableCellStyled>
                  <TableCell>{row.base}</TableCell>
                  <TableCell align="right">
                    {!isExpanded
                      ? `${row.actualLocations.length} locations`
                      : row.actualLocations[0]}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCellCollapseStyled colSpan={5} align='right'>
                    {row.actualLocations.slice(1).map((location, locationIndex) => (
                      <CollapseStyled
                        className={isExpanded ? 'expanded' : undefined}
                        in={isExpanded}
                        key={locationIndex}
                        timeout="auto">
                        <CollapseContentStyled>{location}</CollapseContentStyled>
                      </CollapseStyled>
                    ))}
                  </TableCellCollapseStyled>
                </TableRow>
              </>
            )
          }) || <LoadingStyled>...Loading</LoadingStyled>}
        </TableBody>
      </Table>
    </Paper>
  );
};