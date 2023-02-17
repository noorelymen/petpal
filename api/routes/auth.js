import express from "express";

const router = express.Router();

//take any API request using this router

//auhtentication
router.get("/", (req, res) => {
  res.send("Auth endpoint");
});

//registration
router.get("/register", (req, res) => {
  res.send("Register endpoint");
});

export default router;
