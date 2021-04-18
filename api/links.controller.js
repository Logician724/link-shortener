const Link = require('./links.model');
const getRandomString = () => Math.random().toString(32);
const createLink = async url => {
  const link = new Link({
    from: url,
    to: getRandomString(),
  });
  try {
    await link.save();
  } catch (error) {
    if (error.code === 11000) {
      // eslint-disable-next-line no-unused-vars
      await createLink(url);
    } else {
      return error;
    }
  }
};

module.exports.shortenLink = async (req, res) => {
  try {
    const existingLink = await Link.findOne({ from: req.body.link });
    if(existingLink) {
      return res.status(200).send({
        msg: 'Successfully created shortened link',
        data: newLink
      });
    }
    await createLink(req.body.link);
    const newLink = await Link.findOne({ from: req.body.link }).orFail();
    return res.status(201).send({
      msg: 'Successfully created shortened link',
      data: newLink,
    });
  } catch (error) {
    return res.status(500).send({
      msg: 'An Unknown error occurred while creating link',
      err: error,
    });
  }
};

module.exports.getLink = async (req, res) => {
  if (
    req.params.link &&
    typeof req.params.link === 'string' &&
    req.params.link.length > 0
  ) {
    try {
      const link = await Link.findOne({ to: req.params.link });
      if (!link) {
        return res.status(404).send({
          msg: `Could not find a link for ${req.params.link}`,
        });
      }

      return res.status(200).send({
        msg: 'Found the link successfully',
        data: link
      });
    } catch (error) {
      return res.status(500).send({
        msg: 'An unknown error occurred while retrieving link',
        err: error,
      });
    }
  } else {
    return res.status(422).send({
      msg: `short link [${req.params.link}] is not valid`,
      err: null,
    });
  }
};
