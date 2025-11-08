import React from 'react';

function withTimestamp(WrappedComponent) {
  return function EnhancedComponent(props) {
    const timestamp = new Date().toLocaleTimeString();
    return (
      <div>
        <p>Timestamp : {timestamp}</p>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withTimestamp;
