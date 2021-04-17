
module.exports.shortenLink = (req, res) => {
  return res.send({
    'msg': 'shorten link under construction',
    'data': {
      from: 'link',
      to: 'link'       
    }
  });
};

module.exports.getLink = (req, res) => {
  return res.send({
    'msg': 'get link under construction',
    'data': {
      from: 'link',
      to: 'link'
    }
  });
};