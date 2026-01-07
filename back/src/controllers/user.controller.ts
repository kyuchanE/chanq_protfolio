import type { Request, Response } from "express";

export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    id,
    name: "홍길동",
    email: "hong@example.com",
  });
};
