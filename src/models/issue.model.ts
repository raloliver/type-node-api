import mongoose, {Schema, Document} from 'mongoose';

export interface IIssue extends Document {
  _id?: string;
  title: string;
}

const IssueSchema: Schema = new Schema({
  title: String,
});

export default mongoose.model<IIssue>('Issue', IssueSchema);
