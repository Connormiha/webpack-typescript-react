'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as View from './view';

import {generateRandom} from './generator';

let instance: App;

interface CardListParams {};

export default class App {
	public cardsCount: number;
	public MAX_CARDS_COUNT: number;
	private _$content: HTMLDivElement;
	//Разобраться, какой тут должен стоять тип
	private _cardList: React.ReactElement<CardListParams>;

	constructor () {
		if (instance) {
			return instance;
		}

		instance = this;

		this.cardsCount = 5;
		this.MAX_CARDS_COUNT = 52;
		this._$content = document.querySelector('#content') as HTMLDivElement;
	}

	public start (): void {
		this._cardList = <View.ItemsList />;

		ReactDOM.render(
		  this._cardList,
		  this._$content
		);

		ReactDOM.render(
			<View.AppName name='Empty Typescript+React project' />,
			document.querySelector('#app-name')
		);

		ReactDOM.render(
			<View.BtnGenerate value='Regenerate list' />,
			document.querySelector('#buttons')
		);
	}

}
