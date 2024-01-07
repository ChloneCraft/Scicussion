import { NextApiRequest, NextApiResponse } from "next";
import Discussion from "../../../../db/models/Discussion";
import dbConnect from "../../../../db/connect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    const discussions = await Discussion.findById(id);
    return res.status(200).json(discussions);
  } else if (req.method === "POST") {
    const newArg = { text: req.body.text, parent: req.body.parent };
    const discussion = await Discussion.findById(id);
    const parent = discussion.find(
      (argument: any) => argument._id === req.body.parent
    );
    parent.children.append(newArg);
    discussion.save();

    return res.status(200).json(discussion);
  }
}
