import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Hello from Docker v1 🎉" }));
// router.get("/ci/cd", (req, res) => res.json({ message: "Hello from Docker v1 CI/CD Pipeline 🎉" }));

router.get("/health", (req, res) => {
  // throw new Error("Internal Server Error");
  res.status(200).json({ message: "Everything is good here 👀" });
});

export default router;
