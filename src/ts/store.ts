'use strict';

import * as Reflux from 'reflux';
import {generateRandom} from './generator';

export const actions = Reflux.createActions(['generateClick']);
export const eventStore: Reflux.Store = Reflux.createStore({
	listenables: [actions],
	onGenerateClick (): void {
		this.updateList();
	},
	_generateList (): void {
		this.list = generateRandom(5);
	},
	// called whenever we change a list. normally this would mean a database API call
	updateList (): void {
		// localStorage.setItem(localStorageKey, JSON.stringify(list));
		// if we used a real database, we would likely do the below in a callback
		this._generateList();
		this.trigger(this.list); // sends the updated list to all listening components (TodoApp)
	},
	getInitialState (): Array<any> {
		if (!this.list) {
			this._generateList();
		}
		return this.list;
	}
});
