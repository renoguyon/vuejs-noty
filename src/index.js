import Noty from 'noty'

const defaults = {
  layout: 'topRight',
  theme: 'mint',
  timeout: 5000,
  progressBar: true,
  closeWith: ['click'],
}

const VueNoty = {
  options: {},

  setOptions (opts) {
    this.options = Object.assign({}, defaults, opts)
    return this
  },

  show (text, type = 'alert', opts = {}) {
    const params = Object.assign({}, this.options, opts, {
      type,
      text
    })

    new Noty(params).show()
  },

  success (text, opts = {}) {
    this.show(text, 'success', opts)
  },

  error (text, opts = {}) {
    this.show(text, 'error', opts)
  },

  warning (text, opts = {}) {
    this.show(text, 'warning', opts)
  },

  info (text, opts = {}) {
    this.show(text, 'info', opts)
  }
}

export default {
  install: function (Vue, opts) {
    Vue.prototype.$noty = VueNoty.setOptions(opts)
  }
}
