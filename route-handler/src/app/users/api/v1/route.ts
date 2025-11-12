import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/user.model";
import { connectDb } from "@/lib/db";

// @desc Get all users

export async function GET() {
  try {
    await connectDb();
    const users = await User.find({});
    return NextResponse.json(users, { status: 200 });
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
    await connectDb();
    const { name, email, role } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required" },
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

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Failed to create user" },
      { status: 500 }
    );
  }
}
