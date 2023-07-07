import {MongoClient} from 'mongodb'

const URI = process.env.mongo
const options = {}

if(!URI) throw new Error('Please add Mongo URI')

const client = new MongoClient(URI, options)
const clientPromise = client.connect()

export default clientPromise