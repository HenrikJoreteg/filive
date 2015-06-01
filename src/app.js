import Router from './router'
import styles from './styles/main.styl'
import icons from '../node_modules/octicons/octicons/octicons.css'

window.app = {
  init () {
    this.router = new Router()
    this.router.history.start()
  }
}

window.app.init()
