const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const cors = require("cors");
const request = require("request");
const { createProxyMiddleware } = require("http-proxy-middleware");
const db = require("./db.json");

server.use(
  cors({
    origin: "http://localhost:5173"
  })
);

server.use(
  jsonServer.rewriter({
    "/combat/:category": "/api/data?category=:category",
    "/tools/:category": "/data?category=:category",
    "/food/:category": "/data?category=:category",
    "/transportation/:category": "/data?category=:category",
    "/redstone/:category": "/data?category=:category",
    "/decoration/:category": "/data?category=:category",
    "/brewing/:category": "/data?category=:category",
    "/combat/categoryid/:categoryId": "/data?categoryId=:categoryId"
  })
);

server.get("/api", (req, res) => {
  res.json(db);
});
// server.use(
//   "/",
//   createProxyMiddleware({ target: "http://localhost:3001", changeOrigin: true })
// );

// server.get('/jokes/random', (req, res) => {
//   request(
//     { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   )
// });

try {
  server.listen(3001, () => {
    console.log("JSON Server is running");
  });
} catch (error) {
  console.log(error);
}
