import React from 'react';
import {shallow} from 'enzyme';
import PostPreview from '../components/PostPreview';


describe("<PostPreview/>", ()=> {

    it("Simple Render Works", ()=> {
        const component = shallow(<PostPreview />);
        expect(component).toMatchSnapshot();
    });

    it("Render with props works", () => {
        const component = shallow(
            <PostPreview _id={"74882978478"} title={"Test Post"} />
        );
        expect(component.find('.post-title').text()).toBe('Test Post');
    });
})