function errorHandler(err, req, res, next) {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ message: err.message })
  }

  res.status(500).json(어떤것)
}
