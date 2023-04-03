import { mount } from '@vue/test-utils'
import DiarioPrincipalDeporte from '@/components/DiarioPrincipalDeporte.vue'



describe('gifBuscar', () => {
  it('el componente existe', () => {
    const wrapper = mount(DiarioPrincipalDeporte)
    const gif = wrapper.find('.gifBuscar')
    expect(gifBuscar.exists()).toBeTruthy()
  })
})

