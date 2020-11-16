import { MaterialTable } from './MaterialTable';
import * as React from 'react';
import { EmptyLayout } from '../layout/EmptyLayout';

export type RouteType = {
  name: string;
  path: string;
  component: React.FunctionComponent;
  layout: React.FunctionComponent;
};

export const routes: RouteType[] = [
  {
    name: 'Space',
    path: '/',
    component: MaterialTable,
    layout: EmptyLayout,
  },
];
