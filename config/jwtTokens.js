const jwt = require("jsonwebtoken");
require("dotenv/config");

const jwtTokenGenerator = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

const authUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({ msg: "401 access denied", success: false });
  try {
    // ? VERIFY TOKEN
    const userData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = userData;
    // ! CALLING NEXT MIDDLEWARE
    next();
  } catch (error) {
    res
      .status(200)
      .json({
        message: "token expired | something went wrong...",
        success: false,
      });
  }
};

module.exports = {
  jwtTokenGenerator,
  authUser,
};
