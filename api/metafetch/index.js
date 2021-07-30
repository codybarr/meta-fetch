const metafetch = require('metafetch')

module.exports = (req, res) => {
  const { url } = req.body

  if (!url) {
    return res.status(400).json({ error: `You must include a valid URL.` })
  }

  metafetch
    .fetch(url)
    .then((meta) => {
      const { title, description, url, image } = meta
      return res.status(200).json({ title, description, url, image })
    })
    .catch((err) =>
      res.status(500).json({ error: `Something went wrong with the request.` })
    )
}
