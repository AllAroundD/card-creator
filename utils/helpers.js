// distinguishes Joi errors from custom Errors thrown
const parseError = err => {
    if (err.isJoi) return err.details[0]
    return JSON.stringify(err, Object.getOwnPropertyNames(err))
}
// returns object with session information to be saved to Redux store
const sessionizeUser = user => {
    return { userId: user.id, username: user.username }
}

module.exports = {
    parseError,
    sessionizeUser
}