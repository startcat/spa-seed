/* @flow */

export default new class {
  email(value: ?string) {
    if (!value) {
      return false;
    } else {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(value);
    }
  }

  password(value: ?string) {
    if (!value) {
      return false;
    } else {
      const passwordRegex = /^(?=.*?[a-z])(?=.*?[A-Z0-9#?!@$%^&*-,;:¿]).{6,}$/;
      return passwordRegex.test(value);
    }
  }
}();
