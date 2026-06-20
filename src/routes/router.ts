import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Hello from Docker v1 cicd 🎉" }));
router.get("/ci/cd", (req, res) => res.json({ message: "Hello from Docker v1 CI/CD Pipeline 🎉" }));

router.get("/health", (req, res) => {
  res.status(200).json({ message: "Everything is good here 👀" });
  // throw new Errorim("Internal Server Error");
});

export default router;
  