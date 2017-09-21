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

export type Profile = {
  username: string,
  password?: string,
  email: string,
  name: string
};
