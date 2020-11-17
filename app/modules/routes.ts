import * as React from 'react';
import { EmptyLayout } from '../layout/EmptyLayout';
import { MainScreen } from "./MainScreen";

export type RouteType = {
  path: string;
  component: React.FunctionComponent;
  layout: React.FunctionComponent;
};

export const routes: RouteType[] = [
  {
    path: '/',
    component: MainScreen,
    layout: EmptyLayout,
  },
];
