import { builder } from "../builder";
import prisma from "../../libs/prisma"

builder.prismaObject("User", {
    fields: t => ({
        id: t.exposeID("id"),
        name: t.exposeString("name"),
        messages: t.relation("messages")
    })
});
// Example without using pothos
/* type User {
    id: ID!
    messages: [Message!]!
    name: String!
} */

builder.queryField("users", (t) =>
    t.prismaField({
        type: ["User"],
        resolve: async (query) => {
            return prisma.user.findMany({ ...query });
        },
    })
);

// Example without using pothos
/* type Query {
    users: [User!]!
} */