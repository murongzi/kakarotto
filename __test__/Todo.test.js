import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import TodoItem from '../src/components/TodoItem';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('todoItem 初始状态', () => {
    const todoItemData = {id: 0, name: 'Todo one', done: false};
    const todoItem = shallow(<TodoItem todo={todoItemData} />);

    it('初始化列表项组件，li > span 无todo-done classname', () => {
        expect(todoItem.childAt(0).hasClass('todo-done')).toEqual(false);
    });

    it('点击刚添加的项li > span的classname添加todo-done', () => {
        todoItem.setProps({todo: Object.assign({}, todoItemData, {done: true})});
 
        expect(todoItem.childAt(0).hasClass('todo-done')).toEqual(true);
    });

});