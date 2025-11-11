import { NextResponse, NextRequest } from "next/server";
import { comments } from "../data";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id, 10);
  const comment = comments.data.find((c) => c.id === id);
  if (!comment) {
    return NextResponse.json(
      { success: false, message: "Comment not found." },
      { status: 404 }
    );
  }

  const updatedData = await request.json();
  if (!updatedData || !updatedData.text) {
    return NextResponse.json(
      { success: false, message: "Invalid comment data." },
      { status: 400 }
    );
  }

  comment.text = updatedData.text;

  return NextResponse.json({ success: true, data: comment }, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id, 10);

  const index = comments.data.findIndex((c) => c.id === id);

  if (index === -1) {
    return NextResponse.json(
      { success: false, message: "Comment not found." },
      { status: 404 }
    );
  }

  const deletedComment = comments.data.splice(index, 1)[0];

  return NextResponse.json(
    {
      success: true,
      data: deletedComment,
      message: "Comment deleted successfully.",
    },
    { status: 200 }
  );
}
