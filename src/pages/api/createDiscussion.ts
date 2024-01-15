import { NextApiRequest, NextApiResponse } from "next";
import Discussion from "../../../db/models/Discussion";
import dbConnect from "../../../db/connect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "GET") {
    return res.status(200).json(Discussion);
  } else if (req.method === "PUT") {
    console.log("test");
    try {
      const newDiscussion = {
        parent: "0",
        topic: req.body,
        time: new Date().getUTCDate(),
      };
      const discussion = new Discussion(newDiscussion);

      await discussion.save();

      res.status(200).json("discussion created");
    } catch (error: any) {
      console.log("error", error);
      res.status(400).json({ error: error.message });
    }
  }
}
