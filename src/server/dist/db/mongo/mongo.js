"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const mongodb_1 = require("mongodb");
const mongoDbConfig_1 = require("./mongoDbConfig");
function create() {
    const getDbCtxt = async () => {
        const dbName = "antiGaspiDb";
        const cnxStr = 'mongodb+srv://AdminUser:UjD91xXOCYWtPVrj@cluster0.tadkbeh.mongodb.net/?retryWrites=true&w=majority';
        const client = new mongodb_1.MongoClient(cnxStr, mongoDbConfig_1.mongoDbConfig);
        const connectDb = await client.connect();
        return { /* client,  */ db: connectDb.db(dbName) };
    };
    return { getDbCtxt };
}
exports.create = create;