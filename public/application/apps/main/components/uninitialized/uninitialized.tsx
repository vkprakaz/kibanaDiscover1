/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { FormattedMessage, I18nProvider } from '@kbn/i18n/react';

import { EuiButton, EuiEmptyPrompt } from '@elastic/eui';

interface Props {
  onRefresh: () => void;
}

export const OrderviewUninitialized = ({ onRefresh }: Props) => {
  return (
    <I18nProvider>
      <EuiEmptyPrompt
        iconType="orderviewApp"
        title={
          <h2>
            <FormattedMessage id="orderview.uninitializedTitle" defaultMessage="Start searching" />
          </h2>
        }
        body={
          <p>
            <FormattedMessage
              id="orderview.uninitializedText"
              defaultMessage="Write a query, add some filters, or simply hit Refresh to retrieve results for the current query."
            />
          </p>
        }
        actions={
          <EuiButton color="primary" fill onClick={onRefresh}>
            <FormattedMessage
              id="orderview.uninitializedRefreshButtonText"
              defaultMessage="Refresh data"
            />
          </EuiButton>
        }
      />
    </I18nProvider>
  );
};
