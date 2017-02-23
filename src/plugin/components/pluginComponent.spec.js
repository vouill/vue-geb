import Vue from 'vue'
import pluginComponent from './pluginComponent.vue'

describe('pluginComponent', () => {
  it('should render slot content', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(pluginComponent,[h('p','test')])
    })
    expect(vm.$el.querySelector('p').textContent).to.equal('test')
  })
})
