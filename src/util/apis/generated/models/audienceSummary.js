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
 * Audience definition.
 *
 */
class AudienceSummary {
  /**
   * Create a AudienceSummary.
   * @property {string} [name] Audience name.
   * @property {string} [description] Audience description.
   * @property {number} [estimatedCount] Estimated audience size.
   * @property {string} [definition] Audience definition in OData format.
   * @property {string} [state] Audience state. Possible values include:
   * 'Calculating', 'Ready', 'Disabled'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AudienceSummary
   *
   * @returns {object} metadata of AudienceSummary
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AudienceSummary',
      type: {
        name: 'Composite',
        className: 'AudienceSummary',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          estimatedCount: {
            required: false,
            serializedName: 'estimated_count',
            type: {
              name: 'Number'
            }
          },
          definition: {
            required: false,
            serializedName: 'definition',
            type: {
              name: 'String'
            }
          },
          state: {
            required: false,
            serializedName: 'state',
            type: {
              name: 'Enum',
              allowedValues: [ 'Calculating', 'Ready', 'Disabled' ]
            }
          }
        }
      }
    };
  }
}

module.exports = AudienceSummary;
