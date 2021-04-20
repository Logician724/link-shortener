import React, { useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const Redirector = () => {
  let { shortLink } = useParams();
  let history = useHistory();

  const getLongLink = useCallback(async () => {
    try {
      const { data: { data: { from } } } = await axios.get(`${process.env.REACT_APP_API_HOST}/api/short/${shortLink}`);
      window.location.replace(from);
    } catch ({ response: { data: { msg } } }) { 
      history.push(`/error/${shortLink}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getLongLink();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <React.Fragment />;

};

export default Redirector;