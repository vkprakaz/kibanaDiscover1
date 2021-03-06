/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { SavedObjectsType } from 'kibana/server';
import { searchMigrations } from './search_migrations';

export const searchSavedObjectType: SavedObjectsType = {
  name: 'searchNew',
  hidden: false,
  namespaceType: 'single',
  management: {
    icon: 'orderviewApp',
    defaultSearchField: 'title',
    importableAndExportable: true,
    getTitle(obj) {
      return obj.attributes.title;
    },
    getEditUrl(obj) {
      return `/management/kibana/objects/savedSearches/${encodeURIComponent(obj.id)}`;
    },
    getInAppUrl(obj) {
      return {
        path: `/app/orderview#/view/${encodeURIComponent(obj.id)}`,
        uiCapabilitiesPath: 'orderview.show',
      };
    },
  },
  mappings: {
    properties: {
      columns: { type: 'keyword', index: false, doc_values: false },
      description: { type: 'text' },
      hideChart: { type: 'boolean', index: false, doc_values: false },
      hits: { type: 'integer', index: false, doc_values: false },
      kibanaSavedObjectMeta: {
        properties: {
          searchSourceJSON: { type: 'text', index: false },
        },
      },
      sort: { type: 'keyword', index: false, doc_values: false },
      title: { type: 'text' },
      grid: { type: 'object', enabled: false },
      version: { type: 'integer' },
    },
  },
  migrations: searchMigrations,
};
