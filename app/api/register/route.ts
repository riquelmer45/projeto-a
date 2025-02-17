/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();
    const hashed = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        name,
      },
    });

    return NextResponse.json({
      user: {
        email: user.email,
      },
    });
  } catch (err: any) {
    if (err.code === "P2002") {
      return new NextResponse(
        JSON.stringify({
          error: "Email já cadastrado! Tente outro ou faça login.",
        }),
        {
          status: 400,
        }
      );
    }
    return new NextResponse(
      JSON.stringify({
        error: err.message,
      }),
      {
        status: 500,
      }
    );
  }
}
