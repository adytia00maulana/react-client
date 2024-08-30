import SchemaBuilder from "@pothos/core";
// 1
import { DateResolver } from "graphql-scalars";

// 2
export const builder = new SchemaBuilder<{
    Scalars: {
        Date: { Input: Date; Output: Date };
    };
}>({});

// 3
builder.addScalarType("Date", DateResolver, {});