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
 * Class representing a RemoveUserOKResponseItem.
 */
class RemoveUserOKResponseItem {
  /**
   * Create a RemoveUserOKResponseItem.
   * @property {string} [code] The code of the result
   * @property {number} [message] The message of the result
   * @property {number} status The status code of the result
   * @property {string} [userEmail] The email of the user
   */
  constructor() {
  }

  /**
   * Defines the metadata of RemoveUserOKResponseItem
   *
   * @returns {object} metadata of RemoveUserOKResponseItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RemoveUserOKResponseItem',
      type: {
        name: 'Composite',
        className: 'RemoveUserOKResponseItem',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'Number'
            }
          },
          status: {
            required: true,
            serializedName: 'status',
            type: {
              name: 'Number'
            }
          },
          userEmail: {
            required: false,
            serializedName: 'user_email',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RemoveUserOKResponseItem;
