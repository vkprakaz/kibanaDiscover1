/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';

import { OrderviewGridEmbeddable } from '../angular/create_orderview_grid_directive';
import { OrderviewDocTableEmbeddable } from '../angular/doc_table/create_doc_table_embeddable';
import { OrderviewGridProps } from '../components/orderview_grid/orderview_grid';
import { SearchProps } from './saved_search_embeddable';

interface SavedSearchEmbeddableComponentProps {
  searchProps: SearchProps;
  useLegacyTable: boolean;
  refs: HTMLElement;
}

const OrderviewDocTableEmbeddableMemoized = React.memo(OrderviewDocTableEmbeddable);
const OrderviewGridEmbeddableMemoized = React.memo(OrderviewGridEmbeddable);

export function SavedSearchEmbeddableComponent({
  searchProps,
  useLegacyTable,
  refs,
}: SavedSearchEmbeddableComponentProps) {
  if (useLegacyTable) {
    const docTableProps = {
      ...searchProps,
      refs,
    };
    return <OrderviewDocTableEmbeddableMemoized {...docTableProps} />;
  }
  const orderviewGridProps = searchProps as OrderviewGridProps;
  return <OrderviewGridEmbeddableMemoized {...orderviewGridProps} className="dscOrderviewGrid" />;
}
