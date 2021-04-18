import React, { useState } from 'react';

const LinkSubmitter = ({ setType, setLinkMessage }) => {
  const [longLink, setLongLink] = useState('');

  const isURL = (link) => {
    try {
      new URL(link);
    } catch (_) {
      return false;
    }

    return true;
  };

  const requestLink = async () => {
    if (isURL(longLink)) {
      // TODO: fetch POST request
      //const { type, linkMessage } = await 
      setType('link');
      setLinkMessage(longLink);
    } else {
      setType('error');
      setLinkMessage({
        msg: 'Cannot shorten an invalid link!',
        err: null
      });
    }
  };

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        requestLink();
      }}>
        <input
          type="text"
          value={longLink}
          placeholder="Your link goes here..."
          onChange={(e) => setLongLink(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LinkSubmitter;