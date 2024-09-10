import { NextResponse } from "next/server"

// https://stackoverflow.com/questions/72663673/how-do-i-get-uploaded-image-in-next-js-and-save-it
const imgToPDF = require("image-to-pdf");

// export default async function handler(req, res) {
//     console.log(req)
//     res.status(200).json({ text: 'Hello' });
// }

// export async function POST(request) {
//     // console.log(request)
//     // return new Response('Hello, Next.js!', {
//     //     status: 200,           
//     // });
//     const res = await request.json()
//     return Response.json({ res })
// }

export const POST = async (req, res) => {        
    return NextResponse.json({ Message: "Success", status: 201 });
}