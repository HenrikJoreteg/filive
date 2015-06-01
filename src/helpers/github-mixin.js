export default {
  ajaxConfig () {
    return {
      headers: {
        'Authorization': 'token ' + app.me.token
      }
    }
  }
}
