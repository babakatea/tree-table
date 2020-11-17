import styled from 'styled-components';
import { Collapse, TableCell, TableHead } from "@material-ui/core";

export const TableCellStyled = styled(TableCell)`
  & span {
    cursor: pointer;
  }
`;

export const TableCellCollapseStyled = styled(TableCell)`
  padding: 0 !important;   
`;

export const CollapseContentStyled = styled.div`
  padding: 16px;    
`;

export const TableHeadStyles = styled(TableHead)`
  background-color: rgb(2 147 255 / 15%);
  
  & th {
    text-transform: uppercase;
    font-weight: bolder;
  }
`;

export const CollapseStyled = styled(Collapse)`
  &.expanded {
    &:not(:last-child) {
      border-bottom: 1px solid rgb(128 128 128 / 22%);
    }
  }
`;

export const ExpandIconStyled = styled.span`
  cursor: pointer;
  padding: 10px;
  transition: 0.2s;
  
  &:hover {
    color: lightgray;
  }
`;

export const LoadingStyled = styled.div`
  padding: 16px;
`;