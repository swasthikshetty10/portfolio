// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body)
    res.json({ Hi })
  } else {

  }
}