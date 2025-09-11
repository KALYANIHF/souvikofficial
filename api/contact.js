import app from "../serverside/server.js";
export default function handler(req, res) {
  return app(req, res);
}
