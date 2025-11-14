import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/user.model";
import { apiResponse } from "@/utils/apiResponse";

// @desc Get all users
export async function GET() {
  try {
    const users = await User.find({});
    return apiResponse(true, "Users Data fetched succesfully.", users, 200);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

//@desc Create a new user
export async function POST(req: NextRequest) {
  try {
    const { name, email, role } = await req.json();

    if (!name || !email || !role) {
      return NextResponse.json(
        { message: "all field are required." },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 409 }
      );
    }

    const newUser = await User.create({
      name,
      email,
      role: role || "user",
    });

    return apiResponse(true, "User Created Successfully", newUser, 201);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Failed to create user , internal server Error." },
      { status: 500 }
    );
  }
}
