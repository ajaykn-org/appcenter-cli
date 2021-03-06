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
 * Class representing a ParamsModel.
 */
class ParamsModel {
  /**
   * Create a ParamsModel.
   * @property {string} [sourceVersion] Version to build which represents the
   * full Git commit reference
   * @property {boolean} [debug] Run build in debug mode
   */
  constructor() {
  }

  /**
   * Defines the metadata of ParamsModel
   *
   * @returns {object} metadata of ParamsModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'params',
      type: {
        name: 'Composite',
        className: 'ParamsModel',
        modelProperties: {
          sourceVersion: {
            required: false,
            serializedName: 'sourceVersion',
            type: {
              name: 'String'
            }
          },
          debug: {
            required: false,
            serializedName: 'debug',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ParamsModel;
