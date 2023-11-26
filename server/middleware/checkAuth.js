const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const checkAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;
  console.log(authorization);
  if (!authorization) {
    console.log("here2");
    next();
    return;
  }

  const token = authorization.split(" ")[1];
  const { _id } = jwt.verify(token, process.env.SECRET);
  req.user = await User.findOne({ _id }).select("_id");
  next();
};

module.exports = checkAuth;
