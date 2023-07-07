/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    mongo: 'mongodb+srv://tarasfrbslist:gWLUU6cHuXcYCryf@cluster0.f9btobk.mongodb.net/?retryWrites=true&w=majority',
    siteURL: 'http://localhost:3000'
  }
}

module.exports = nextConfig

//mongodb+srv://tarasfrbslist:<password>@cluster0.f9btobk.mongodb.net/?retryWrites=true&w=majority
