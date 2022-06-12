import React from 'react';

const Alert = (props) => {
  return (
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{props.alert.message}</strong>
    </div>
  );
};
export default Alert;
