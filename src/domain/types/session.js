/* @flow */

export type Session = {
  user: string,
  token: string
};

export type Notification = {
  id: string,
  createdOn: Date,
  text: string,
  isRead: boolean
};
