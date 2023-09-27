import express from "express";
import routes from "./controllers/index.js";
// const { ApolloServer } = require("apollo-server-express");
// import path from "path";
// const { authMiddleware } = require("./utils/auth");
import session from "express-session";

// const { typeDefs, resolvers } = require("./schemas");
// const db = require("./config/connection");
import "./config/connection.js";
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3001;
const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

const oneMonthInMs = 1000 * 60 * 60 * 24 * 30;
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: oneMonthInMs },
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

app.use(routes);

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});

// const startApolloServer = async () => {
//   await server.start();
//   server.applyMiddleware({ app });

//   db.once("open", () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(
//         `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
//       );
//     });
//   });
// };

// startApolloServer();
