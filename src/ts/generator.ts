'use strict';

const NAMES: Array<string> = [
	'Alena', 'Anya', 'Lena', 'Marina', 'Dasha', 'Olya', 'Natasha',
	'Vera', 'Polina', 'Katya', 'Nastya', 'Nadya'];
const NAMES_PROFFESSIONS: Array<string> = ['Lawyer', 'Animator', 'Accountant', 'Teacher', 'Programmer', 'Guide',
	'Manager', 'Engineer', 'Doctor', 'Cosmetologist', 'Nurse', 'Stewardess'];

const ITEMS: Array<Object> = [];

let id: number = 0;

for (let name of NAMES) {
	for (let job of NAMES_PROFFESSIONS) {
		ITEMS.push({
			id: id++,
			name,
			job
		});
	}
}

export function generateRandom(count: number): Array<Object> {
	let data: Array<Object> = [];
	let acceptedList: Array<Object> = ITEMS.slice();

	for (let i: number = count; i > 0; i--) {
		let index: number = Math.round(Math.random() * (acceptedList.length - 1));
		data.push(acceptedList[index]);
		acceptedList.splice(index, 1);
	}

	return data;
}
