import React from 'react';

const LinkViewer = ({ type, linkMessage }) => {
  let message = <div></div>;
  switch (type) {
  case 'error':
    message = <div>Error {linkMessage}</div>;
    break;
  case 'link':
    message = <div>Link {linkMessage}</div>;
    break;
  case 'none':
    message = <div></div>;
    break;
  }

  return message;
};

export default LinkViewer;