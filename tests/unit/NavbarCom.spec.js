import { mount } from '@vue/test-utils'
import HeaderComp from '@/components/HeaderComp.vue'



describe('Header', () => {
  it('el componente existe', () => {
    const wrapper = mount(HeaderComp)
    expect(wrapper.exists()).toBe(true)
  })

  it('los links contiene la rutas', () => {
    const wrapper = mount(HeaderComp)
    const links = wrapper.findAll('.nav-link')
    expect(links).toHaveLength(2)
    expect(links[0].text()).toContain('Semanal')
    expect(links[1].text()).toContain('Diario')
  })
  



  it(" doSearch funciona cuando submit el formulario", async () => {
    const doSearchMock = jest.fn();
    const wrapper = mount(HeaderComp, {
   
      setup() {
        return {
          doSearch: doSearchMock,
        };
      },
    });

    const input = wrapper.find("input[type='search']");
    await input.setValue("Bilbao");

    const form = wrapper.find("form");
    await form.trigger("submit");

    expect(doSearchMock).toHaveBeenCalled();
  
});


})
