import styled from 'styled-components';
import { TableCell } from "@material-ui/core";

export const TableCellStyled = styled(TableCell)`
  & span {
    cursor: pointer;
  }
`;