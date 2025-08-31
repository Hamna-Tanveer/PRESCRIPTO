import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login AgainS",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    req.body = { userId: token_decode.id };
    next();
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};
