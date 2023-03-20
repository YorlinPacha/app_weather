import { mount } from "@vue/test-utils";
import HeaderComp from "@/components/HeaderComp.vue";



describe('HeaderComp', () => {
    it('montar', () => {
        const wrapper = mount(<HeaderComp />); 
        const navegador = wrapper.findAll('.nav-item');
        expect(navegador).toHaveLength(2);
        
    });
    it('tiene un logo', () => {
        const wrapper = mount(<HeaderComp />);
        const logo = wrapper.find('.logo');
        expect (logo).toBeTruthy();
    });
    it("Tiene un input", ()=>{
        const wrapper= mount(<HeaderComp />);
        expect(wrapper.find(".form-control").text()).toBe("")
    });
})
