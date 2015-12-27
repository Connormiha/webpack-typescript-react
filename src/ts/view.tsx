'use strict';

import * as React from 'react';
import * as Reflux from 'reflux';
import * as Store from './store';

const STORE_MIXINS = Reflux.connect(Store.eventStore, 'list');

export const ItemsList = React.createClass({
    mixins: [STORE_MIXINS],

    render () {
        const items = this.state.list.map(function(item) {
            return (
                <Item name={item.name} job={item.job} key={item.id} id={item.id}></Item>
            );
        });
        return (
            <ul className='items-list'>
                {items}
            </ul>
        );
    }
});

export class Item extends React.Component<any, any>{
    render () {
        return (
            <div className='item'>
                <li className="item__text">
                    {this.props.name} <i>{this.props.job}</i>
                </li>
            </div>
        );
    }
};

export class AppName extends React.Component<any, any>{
    render () {
        return (
            <h1>{this.props.name}</h1>
        );
    }
};

export class BtnGenerate extends React.Component<any, any>{
    handleClick (): void {
        Store.actions.generateClick();
    }

    render () {
        return (
            <input type='button' value={this.props.value} onClick={this.handleClick.bind(this)} />
        );
    }
};
