import express from "express";
import { connection } from "./src/db.js";
import { prisma } from "./src/db.js";

const app = express();
connection();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  res.json(user);
});

app.listen(3000, () => console.log("Server is running on port 3000 - Pedro"));
