import React from 'react';

const LinkViewer = ({ type, linkMessage }) => {
  switch (type) {
  case 'error':
    return (
      <div>
        <a href="">{ linkMessage }</a>
      </div>
    );
  case 'link':
    return (
      <div>
        <a href="">{ linkMessage }</a>
      </div>
    );
  case 'none':
    return (
      <div></div>
    );
  }

};

export default LinkViewer;