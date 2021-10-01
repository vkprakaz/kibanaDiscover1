/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useState, useEffect } from 'react';
import { I18nProvider } from '@kbn/i18n/react';
import { SavedObject } from 'kibana/public';
import { IndexPattern, IndexPatternAttributes } from 'src/plugins/data/public';

import { IndexPatternRef } from './types';
import { ChangeIndexPattern } from './change_indexpattern';
export interface OrderviewIndexPatternProps {
  /**
   * list of available index patterns, if length > 1, component offers a "change" link
   */
  indexPatternList: Array<SavedObject<IndexPatternAttributes>>;
  /**
   * Callback function when changing an index pattern
   */
  onChangeIndexPattern: (id: string) => void;
  /**
   * currently selected index pattern, due to angular issues it's undefined at first rendering
   */
  selectedIndexPattern: IndexPattern;
}

/**
 * Component allows you to select an index pattern in orderviews side bar
 */
export function OrderviewIndexPattern({
  indexPatternList,
  onChangeIndexPattern,
  selectedIndexPattern,
}: OrderviewIndexPatternProps) {
  const options: IndexPatternRef[] = (indexPatternList || []).map((entity) => ({
    id: entity.id,
    title: entity.attributes!.title,
  }));
  const { id: selectedId, title: selectedTitle } = selectedIndexPattern || {};

  const [selected, setSelected] = useState({
    id: selectedId,
    title: selectedTitle || '',
  });
  useEffect(() => {
    const { id, title } = selectedIndexPattern;
    setSelected({ id, title });
  }, [selectedIndexPattern]);
  if (!selectedId) {
    return null;
  }

  return (
    <I18nProvider>
      <ChangeIndexPattern
        trigger={{
          label: selected.title,
          title: selected.title,
          'data-test-subj': 'indexPattern-switch-link',
        }}
        indexPatternId={selected.id}
        indexPatternRefs={options}
        onChangeIndexPattern={(id) => {
          const indexPattern = options.find((pattern) => pattern.id === id);
          if (indexPattern) {
            onChangeIndexPattern(id);
            setSelected(indexPattern);
          }
        }}
      />
    </I18nProvider>
  );
}
