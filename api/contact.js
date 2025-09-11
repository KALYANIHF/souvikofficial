import app from "../serverside/server";
export default function handler(req, res) {
  return app(req, res);
}
