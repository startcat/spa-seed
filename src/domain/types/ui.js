/* @flow */

export type SideBarItem = {
  icon: string,
  caption: string,
  path: string
};

export type TopBarState = {
  notifications: number
};

export type OverlayState = "Hidden" | "Loading" | "Visible" | "Dirty";
export type OverlayType = "Large" | "Medium" | "Small";

export type TableColumn = {
  id: string,
  caption: string,
  template: (value: any) => any
};
