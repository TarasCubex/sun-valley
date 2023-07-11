/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    mongo: 'mongodb+srv://tarasfrbslist:gWLUU6cHuXcYCryf@cluster0.f9btobk.mongodb.net/?retryWrites=true&w=majority',
    siteURL: 'https://sun-valley.vercel.app',
  }
}

module.exports = nextConfig

//'https://sun-valley.vercel.app'
//'http://localhost:3000'

//mongodb+srv://tarasfrbslist:<password>@cluster0.f9btobk.mongodb.net/?retryWrites=true&w=majority
