/**
 * Created by BJ Rutledge
 * 9/3/22
 * Living with Conviction
 * CORS helper
 */

const allowlist = [process.env.DOMAIN, `http://localhost:${process.env.PORT}`];

const corsOptionsDelegate = (req, callback) => {
  //check if the request is in the allowed list.
  const isAllowed = allowlist.indexOf(req.header('origin') !== -1);

  const corsOptions = {
    origin: isAllowed,
  };

  //call the callback. it expects two params err and options.
  callback(null, corsOptions);
};

module.exports = corsOptionsDelegate;