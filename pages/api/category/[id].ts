import { NextApiRequest, NextApiResponse } from "next";
import categoryModel from "../../../models/category";
import connect from "../../../utils/connect";
import { Types } from "mongoose";

connect();

export default async function test(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const { id } = req.query;
    switch (method) {
        case "GET":
            try {
                const category = await categoryModel.findById(id);
                res.status(200).json(category);
            } catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message });
                }
            }
            break;
        case "PUT":
            try {
                const category = await categoryModel.findByIdAndUpdate(
                    id,
                    req.body
                );
                res.status(200).json(category);
            } catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message });
                }
            }
            break;
        case "DELETE":
            try {
                const category = await categoryModel.findByIdAndDelete(id);
                res.status(200).json(category);
            } catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message });
                }
            }
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
