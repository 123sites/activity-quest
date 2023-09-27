import jwt from "jsonwebtoken";

const secret = ".env";
const expiration = "2h";

export function authMiddleware({ req }) {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log("Invalid token");
  }

  return req;
}

export function signToken(id) {
  const payload = { id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

export function login(req, token) {
  req.session.token = token;
  req.session.loggedIn = true;
}
