export function asyncHandler(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res)
    } catch (e) {
      console.log('에러발생했다.')
      next(e)
    }
  }
}
