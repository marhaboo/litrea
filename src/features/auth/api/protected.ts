import { NextApiRequest, NextApiResponse } from "next";
import { authenticate } from "../../../shared/lib/auth";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  authenticate(req, res, () => {
    res.status(200).json({ message: "Protected content", user: (req as any).user });
  });
}
