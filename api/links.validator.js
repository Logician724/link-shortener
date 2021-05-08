
const isURL = (link) => {
  const res = link.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g);
  return (res !== null);
};
  
module.exports.validateLink = (req, res, next) => {
  if(!req.body.link) {
    return res.status(422).send({
      msg: 'Could not find a link',
      err: null
    });
  }
  if(!isURL(req.body.link)) {
    return res.status(422).send({
      msg: 'Cannot shorten an invalid link!',
      err: null
    });
  }
  return next();

};
