import { NextResponse } from "next/server";
import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  if (!comment || !comment.text) {
    return NextResponse.json(
      { success: false, message: "Invalid comment data." },
      { status: 400 }
    );
  }
  const newComment = {
    id: comments.data.length + 1,
    text: comment.text,
  };
  comments.data.push(newComment);
  return NextResponse.json(
    { success: true, data: newComment },
    { status: 201 }
  );
}
