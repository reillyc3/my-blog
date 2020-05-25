// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "./assets/css/global.css";
import DefaultLayout from '~/layouts/Default.vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {config, library} from '@fortawesome/fontawesome-svg-core'
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import VueDisqus from 'vue-disqus'

config.autoAddCss = false;
library.add(faGithub, faTwitter)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.use(VueDisqus)
}
