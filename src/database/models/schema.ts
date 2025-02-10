import { Schema, Document, model } from "mongoose";

export interface User extends Document {
	_id: string
	email: string
}

const userSchema = new Schema<User>(
	{
		_id: { type: String, required: true },
		email: { type: String, required: true, unique: true },
	},
	{
		
		timestamps: true
	}
);

const users = model<User>("users", userSchema);

export default users;
