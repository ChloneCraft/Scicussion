import mongoose, { InferSchemaType } from "mongoose";

const { Schema } = mongoose;

export interface Argument {
  text: String;
  parent: mongoose.Schema.Types.ObjectId;
  children: [mongoose.Schema.Types.ObjectId];
}

const discussionSchema = new Schema({
  arguments: [
    {
      text: { type: String, default: "", required: true },
      parent: {
        type: Schema.Types.ObjectId,
        ref: "discussion",
        required: true,
      },
      children: { type: [Schema.Types.ObjectId], ref: "discussion" },
    },
  ],
});

const Discussion =
  mongoose.models.Discussion || mongoose.model("Discussion", discussionSchema);

export default Discussion;
