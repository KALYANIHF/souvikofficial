// api/contact.js
import app from "../serverside/server.js";
import serverless from "serverless-http";

const handler = serverless(app);

export default function (req, res) {
  return handler(req, res);
}
