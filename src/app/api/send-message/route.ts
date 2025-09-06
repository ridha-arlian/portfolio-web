import sgMail from "@sendgrid/mail"
import { NextRequest, NextResponse } from "next/server"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Data kurang lengkap" }, { status: 400 })
    }

    await sgMail.send({
      to: process.env.MY_EMAIL!,
      from: process.env.MY_EMAIL!,
      subject: `Pesan dari ${name}`,
      text: `Dari: ${name} <${email}>\n\n${message}`,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Gagal kirim email" }, { status: 500 })
  }
}
