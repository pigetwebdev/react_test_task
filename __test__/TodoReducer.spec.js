import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'

import calculatorReducers from '../src/js/reducers/calculatorReducers'
import { ADD_TODO} from '../actions/actionsTypes'

describe('>>>R E D U C E R --- Test TodoReducers',()=>{
    it('+++ reducer for ADD_TODO', () => {
        let state = [{id:20,text:"Now Only one"}]
        state = calculatorReducers(state,{type:ADD_TODO, id:21, text:"No two"});

        expect(state).toEqual([{id:20,text:"Now Only One"},{id:21,text:"No two"}]);
    });
});



