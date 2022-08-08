import { NextApiRequest, NextApiResponse } from 'next';
import categoryModel from '../../../models/category';
import connect from '../../../utils/connect';

connect();

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const categories = await categoryModel.find();
        res.status(200).json(categories);
      } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ message: error.message });
        }
      }
      break;
    case 'POST':
      try {
        const category = await categoryModel.create(req.body);
        res.status(201).json(category);
      } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ message: error.message });
        }
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
