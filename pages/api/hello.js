// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// this api folder essentially serves the entire back end of our application. the part that's written inside of the api is going to be our server, and that's not going to be rendered on the front end, so inside of a next.js app we don't have a need for a special node and express server. we can do everything inside of this api folder.

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
