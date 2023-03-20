import { mount } from "@vue/test-utils";
import HeaderComp from "@/components/HeaderComp.vue";



describe('HeaderComp', () => {
    test('montar', () => {
        const wrapper = mount(<HeaderComp />);
        expect(wrapper.findAll('.nav-item')).toHaveLength(2);
        
    });
})
