
const isURL = (link) => {
  try {
    new URL(link);
  } catch (_) {
    return false;  
  }
    
  return true;
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
