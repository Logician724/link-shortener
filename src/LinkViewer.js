import React from 'react';

const LinkViewer = ({ type, linkMessage }) => {
  switch (type) {
  case 'error':
    return (
      <div>
        { linkMessage }
      </div>
    );
  case 'link':
    return (
      <div>
        <a href={`${linkMessage}`}>{ linkMessage }</a>
      </div>
    );
  case 'none':
    return (
      <div></div>
    );
  }

};

export default LinkViewer;