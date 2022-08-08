import { Document, model, models, Schema } from 'mongoose';

interface ICategory extends Document {
  name: string;
  description: string;
}

const CategorySchema: Schema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Category || model<ICategory>('Category', CategorySchema);
