// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {socials} from "../../pages/api/data/socials";

import {NextApiRequest, NextApiResponse} from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
 if(req.method === 'GET') {
   res.status(200).json(socials);
 }
}
