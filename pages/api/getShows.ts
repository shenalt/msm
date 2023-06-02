import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try{
        // Get prisma to fetch the data
        const data = await prisma.show.findMany({
            include: {
                castMembers: true,
            },
        })
        return res.status(200).json(data)
    } catch(error){
        return res.status(500).json(error)
    }
}