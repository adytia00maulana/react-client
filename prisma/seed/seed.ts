import { PrismaClient } from "@prisma/client";
import {usersAndMessages} from "./data/usersAndMessages";
const prisma = new PrismaClient();

async function main() {
    // Delete all `User` and `Message` records
    await prisma.message.deleteMany({});
    await prisma.user.deleteMany({});
    // (Re-)Create dummy `User` and `Message` records
    await prisma.user.createMany({
        data: usersAndMessages
    });
    await prisma.user.create({
        data: usersAndMessages[0]
    });
    await prisma.user.create({
        data: usersAndMessages[1]
    });
    await prisma.user.create({
        data: usersAndMessages[2]
    });
}

main().catch(e => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})