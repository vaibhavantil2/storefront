import Vue from 'vue'
import '@ecomplus/storefront-twbs'
import EcSearch from './components/EcSearch.vue'

export default (options = {}, elId = 'search-input') => {
  const $searchInput = document.getElementById(elId)

  if ($searchInput) {
    new Vue({
      components: {
        EcSearch
      },

      data () {
        return {
          options
        }
      },

      template: `
      <ec-search
        id="${elId}"
        v-bind="options.props"
      />`
    }).$mount($searchInput)
  }
}
