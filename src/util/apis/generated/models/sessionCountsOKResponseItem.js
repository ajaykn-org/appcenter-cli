/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a SessionCountsOKResponseItem.
 */
class SessionCountsOKResponseItem {
  /**
   * Create a SessionCountsOKResponseItem.
   * @property {string} [datetime] The ISO 8601 datetime.
   * @property {number} [count] Count of the object.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SessionCountsOKResponseItem
   *
   * @returns {object} metadata of SessionCountsOKResponseItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SessionCountsOKResponseItem',
      type: {
        name: 'Composite',
        className: 'SessionCountsOKResponseItem',
        modelProperties: {
          datetime: {
            required: false,
            serializedName: 'datetime',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = SessionCountsOKResponseItem;
