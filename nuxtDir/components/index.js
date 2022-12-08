export { default as BlogProto } from '../../components/BlogProto.vue'
export { default as Card } from '../../components/Card.vue'
export { default as DropDownMunu } from '../../components/DropDownMunu.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as LoadingAnimation } from '../../components/LoadingAnimation.vue'
export { default as NavBar } from '../../components/NavBar.vue'
export { default as OverImage } from '../../components/OverImage.vue'
export { default as Segments } from '../../components/Segments.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
