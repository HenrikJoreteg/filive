import Router from './router'
import styles from './styles/main.styl'
import icons from '../node_modules/octicons/octicons/octicons.css'
import Me from './models/me'

window.app = {
  init () {
    this.me = new Me()
    this.router = new Router()
    this.router.history.start()
  }
}

window.app.init()
