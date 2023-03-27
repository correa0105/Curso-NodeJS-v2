const { MongoClient } = require('mongodb')
const uri = "mongodb+srv://correalucas0105:nBXcUM2Xp2cNvFKE@clusternodemongov2.85orgum.mongodb.net/test"

const client = new MongoClient(uri)

async function run() {
    try {
        await client.connect
        console.log("Conectado a Base de Dados!")
    } catch (err) {
        console.log(err)
    }
}

run()

module.exports = client