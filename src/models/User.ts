import mongoose, { Schema, models, Model, Document } from "mongoose";

// Define an interface for the User document
interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Create a schema using the IUser interface
const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Define the User model using generics
const User: Model<IUser> = models.User || mongoose.model<IUser>("User", userSchema);

export default User;
