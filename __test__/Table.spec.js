import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'

import React, { Component } from "react";
import Table from '../src/containers/Table';



// Snapshot for Table React Component
describe('>>>Table --- Snapshot',()=>{
    it('+++capturing Snapshot of Table', () => {
        const renderedValue =  renderer.create(<Table/>).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
//*******************************************************************************************************
describe('>>>Table --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<Table />)
        
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('+++ contains table th', () => {
        expect(wrapper.contains(<th scope="col">Status</th>)).toBe(true)
    });
}