import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
dotenv.config()

export async function  coneccion() {
    try {
        const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@clusterdb.hicawdu.mongodb.net/${process.env.ATLAS_DB}`
        const client = await MongoClient.connect(uri);
        return client.db();
    } catch (error) {
        return {status: 500, message: error};        
    }
}