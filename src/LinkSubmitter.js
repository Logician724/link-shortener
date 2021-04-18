import React, { useState } from 'react';

const LinkSubmitter = ({ setType, setLinkMessage }) => {
  const [longLink, setLongLink] = useState('');

  const requestLink = async () => {
    // TODO: fetch POST request
    //const { type, linkMessage } = await 

    setType('link');
    setLinkMessage(longLink);
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