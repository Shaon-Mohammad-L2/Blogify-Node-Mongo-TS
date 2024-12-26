import { Server } from 'http'
import mongoose from 'mongoose'
import config from './app/config'
import app from './app'

let server: Server

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Error From Server', err)
  }
}

main()
