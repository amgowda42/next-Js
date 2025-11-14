import { NextResponse } from "next/server";

export const apiResponse = (
  success: boolean,
  message: string,
  data: unknown = null,
  status: number
) => {
  return NextResponse.json({ success, message, data, status });
};
