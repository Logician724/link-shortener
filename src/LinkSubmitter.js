import React, { useState } from 'react';
import axios from 'axios';

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

  let prefix = '';

  const requestLink = async () => {
    if (!(longLink.startsWith('http://') || longLink.startsWith('https://'))) {
      if (longLink.startsWith('www.')) {
        prefix = 'http://';
      } else {
        prefix = 'http://www.';
      }
    }

    if (isURL(prefix + longLink)) {
      try {
        const { data: { data: { to } } } = await axios.post(
          `${process.env.REACT_APP_API_HOST}/api/short`, { link: prefix + longLink }
        );

        setType('link');
        setLinkMessage(`${process.env.REACT_APP_API_HOST}/${to}`);
      } catch ({ response: { data: { msg } } }) {
        setType('error');
        setLinkMessage(msg);
      }
    } else {
      setType('error');
      setLinkMessage('Cannot shorten an invalid link!');
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