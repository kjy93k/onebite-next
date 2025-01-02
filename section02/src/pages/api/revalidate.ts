import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.revalidate("/");
    return res.json({ revalidate: true });
  } catch (e) {
    res.status(500).send("Revalidation Failed");
  }
};

export default handler;
