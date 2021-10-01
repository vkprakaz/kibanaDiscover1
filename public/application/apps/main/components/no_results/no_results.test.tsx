/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { mountWithIntl } from '@kbn/test/jest';
import { findTestSubject } from '@elastic/eui/lib/test';

import { OrderviewNoResults, OrderviewNoResultsProps } from './no_results';

jest.mock('../../../../../kibana_services', () => {
  return {
    getServices: () => ({
      docLinks: {
        links: {
          query: {
            luceneQuerySyntax: 'documentation-link',
          },
        },
      },
    }),
  };
});

beforeEach(() => {
  jest.clearAllMocks();
});

function mountAndFindSubjects(props: OrderviewNoResultsProps) {
  const component = mountWithIntl(<OrderviewNoResults {...props} />);
  return {
    mainMsg: findTestSubject(component, 'orderviewNoResults').length > 0,
    timeFieldMsg: findTestSubject(component, 'orderviewNoResultsTimefilter').length > 0,
    luceneMsg: findTestSubject(component, 'orderviewNoResultsLucene').length > 0,
    errorMsg: findTestSubject(component, 'orderviewNoResultsError').length > 0,
  };
}

describe('OrderviewNoResults', () => {
  describe('props', () => {
    describe('no props', () => {
      test('renders default feedback', () => {
        const result = mountAndFindSubjects({});
        expect(result).toMatchInlineSnapshot(`
          Object {
            "errorMsg": false,
            "luceneMsg": false,
            "mainMsg": true,
            "timeFieldMsg": false,
          }
        `);
      });
    });
    describe('timeFieldName', () => {
      test('renders time range feedback', () => {
        const result = mountAndFindSubjects({
          timeFieldName: 'awesome_time_field',
        });
        expect(result).toMatchInlineSnapshot(`
          Object {
            "errorMsg": false,
            "luceneMsg": false,
            "mainMsg": true,
            "timeFieldMsg": true,
          }
        `);
      });
    });

    describe('queryLanguage', () => {
      test('supports lucene and renders doc link', () => {
        const result = mountAndFindSubjects({ queryLanguage: 'lucene' });
        expect(result).toMatchInlineSnapshot(`
          Object {
            "errorMsg": false,
            "luceneMsg": true,
            "mainMsg": true,
            "timeFieldMsg": false,
          }
        `);
      });
    });

    describe('error message', () => {
      test('renders error message', () => {
        const error = new Error('Fatal error');
        const result = mountAndFindSubjects({
          timeFieldName: 'awesome_time_field',
          error,
          queryLanguage: 'lucene',
        });
        expect(result).toMatchInlineSnapshot(`
          Object {
            "errorMsg": true,
            "luceneMsg": false,
            "mainMsg": false,
            "timeFieldMsg": false,
          }
        `);
      });
    });
  });
});
