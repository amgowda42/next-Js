import User from "@/app/models/user.model";
import { apiResponse } from "@/utils/apiResponse";

//@desc Get single user
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    if (!id) {
      return NextResponse.json(
        {
          message: "user id is required.",
        },
        { status: 400 }
      );
    }

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    return apiResponse(true, "User Data fetched succesfully.", user, 200);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch user, internal server Error.", error },
      { status: 500 }
    );
  }
}

//@desc Delete a user

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    if (!id) {
      return NextResponse.json(
        {
          message: "user id is required.",
        },
        { status: 400 }
      );
    }
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    return apiResponse(true, "User deleted successfully.", deletedUser, 200);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete user, internal server Error.", error },
      { status: 500 }
    );
  }
}
