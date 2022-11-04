import { projects, clients } from "../sampleData.js";
import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } from "graphql";

// Client type.
const ClientType = new GraphQLObjectType({
    name: "Client",
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    }
});

// const ProjecType = new GraphQLObjectType({
//     name: "Project",
//     fields: () => ({
//         id: { type: GraphQLID },
//         clientId: { type: GraphQLID },
//         name: { type: GraphQLString },
//         description: { type: GraphQLString },
//         status: { type: GraphQLString }
//     })
// });

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => clients.find(client => client.id === args.id)
        }
    },
});

export default new GraphQLSchema({ query: RootQuery });