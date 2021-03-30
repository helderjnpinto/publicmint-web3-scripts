require('dotenv').config()

const validate = () => {
  if (!process.env.PK) throw new Error('Missing PK in .env')
  if (!process.env.ADDR) throw new Error('Missing ADDR in .env')

  return {
    PK: process.env.PK,
    ADDR: process.env.ADDR
  }
}

module.exports = validate
