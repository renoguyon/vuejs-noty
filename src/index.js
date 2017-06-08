import Noty from 'noty'

const VueNoty = {
  show (text, type = null) {
    new Noty({
      text,
      theme: 'mint',
      type: 'warning'
    }).show()
  }
}

export default {
  install: function (Vue) {
    Vue.prototype.$noty = VueNoty
  }
}
