/* @flow */

export type DashboardSection = {
  id: string,
  title: string,
  content: Array<{
    id: string,
    type: string,
    title: string,
    columns: 1 | 2 | 3,
    options: Object,
    data: Object
  }>
};
