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
 * Set of toolsets available for app
 *
 */
class Toolsets {
  /**
   * Create a Toolsets.
   * @property {array} [xamarin]
   * @property {array} [xcode]
   * @property {array} [node]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Toolsets
   *
   * @returns {object} metadata of Toolsets
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Toolsets',
      type: {
        name: 'Composite',
        className: 'Toolsets',
        modelProperties: {
          xamarin: {
            required: false,
            serializedName: 'xamarin',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'XamarinSDKBundleElementType',
                  type: {
                    name: 'Composite',
                    className: 'XamarinSDKBundle'
                  }
              }
            }
          },
          xcode: {
            required: false,
            serializedName: 'xcode',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'XcodeVersionElementType',
                  type: {
                    name: 'Composite',
                    className: 'XcodeVersion'
                  }
              }
            }
          },
          node: {
            required: false,
            serializedName: 'node',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NodeVersionElementType',
                  type: {
                    name: 'Composite',
                    className: 'NodeVersion'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Toolsets;