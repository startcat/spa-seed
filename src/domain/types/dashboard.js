/* @flow */

export type DashboardSection = {
  id: string,
  title: string,
  content: Array<{ type: string, data: Object }>
};
