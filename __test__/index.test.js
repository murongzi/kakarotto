import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import App from '../src/components/AppMain';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('shallow应用标题是否正确', () => {
    const AppComponent = shallow(<App />);

    it('应用标题期望是Todos', () => {
        //expect(AppComponent.childAt(0).type()).toEqual('h1');
        expect(AppComponent.find('h1').text()).toEqual('Todos')
    })
});

describe('mount删除某一个', () => {
    it('delete todo', () => {
        const AppComponent = mount(<App />);
    
        let li = AppComponent.find('li');

        let deleteDOM = li.find('.delete').at(0);
        deleteDOM.simulate('click'); 
        //console.log(li.find('span').at(0).html());

        expect(AppComponent.find('li').length).toEqual(li.length - 1);
    });

    it('turn a todo item into done', () => {
        const AppComponent = mount(<App />);

        let todoItem = AppComponent.find('.todo-text').first();

        todoItem.simulate('click');
        /* AppComponent.update();
        console.log(todoItem.html());
        console.log(todoItem.prop('className'));
        console.log(todoItem.getDOMNode().className); */

        expect(todoItem.getDOMNode().className).toMatch(/todo\-done/);
    });

});
