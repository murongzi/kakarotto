import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import App from '../src/components/AppMain';
import TodoStore from '../stores/TodoStore';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('AddTodo 添加一个项目', () => {
    it('add a new Todo item', () => {
        const app = mount(<App/>);
        const todoLength = app.find('li').length;
        const appInput = app.find('input').at(0).getDOMNode();
        appInput.value = 'TodoFour';

        app.find('.add-button').at(0).simulate('click');

        expect(app.find('li').length).toEqual(todoLength + 1);

        const li = app.find('li').at(todoLength);

        expect(li.find('span').text()).toEqual('TodoFour');

        let warper = li.parent().props().todo;
        expect(warper.name).toEqual('TodoFour');
        expect(warper.id).toEqual(TodoStore.nextId - 1);
    });
});
