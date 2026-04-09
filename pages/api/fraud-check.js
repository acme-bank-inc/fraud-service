export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { transactionId } = req.body
  res.status(200).json({
    status: 'clear',
    transactionId,
    risk: 'low',
    timestamp: new Date().toISOString()
  })
}
