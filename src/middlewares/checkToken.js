import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
  try {
    const header = req.headers["authorization"];
    if (typeof header !== "undefined") {
      const bearer = header.split(" ");
      const token = bearer[1] || req.token;
      const decodedToken = jwt.verify(token, process.env.AUTHKEY);
      req.user = decodedToken;
      req.token = token;

      next();
    } else {
      throw new Error("unauthorized access");
    }
  } catch (error) {
    return res.status(403).json({
      status: "failed",
      message: error.message,
    });
  }
};