'use strict';

import * as View from '../view';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Reflux from 'reflux';
import * as ReactTestUtils from 'react-addons-test-utils';

describe('Generator test', function () {
    it('Test ItemsList component', function () {
        const view: React.Component<any, any> = ReactTestUtils.renderIntoDocument(
          <View.ItemsList />
        );

        const elements: Array<Element> = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'items-list');
        expect(elements.length).toBe(1);
    });
});
