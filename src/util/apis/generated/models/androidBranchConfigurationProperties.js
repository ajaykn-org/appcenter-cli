/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AndroidBranchConfigurationProperties class.
 * @constructor
 * Build configuration for Android projects
 *
 * @member {string} [gradleWrapperPath] Path to the Gradle wrapper script
 * 
 * @member {string} gradleTasks The Gradle tasks to perform
 * 
 * @member {string} [module] The Gradle module to build
 * 
 * @member {string} [variant] The Android build variant to build
 * 
 */
function AndroidBranchConfigurationProperties() {
}

/**
 * Defines the metadata of AndroidBranchConfigurationProperties
 *
 * @returns {object} metadata of AndroidBranchConfigurationProperties
 *
 */
AndroidBranchConfigurationProperties.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AndroidBranchConfigurationProperties',
    type: {
      name: 'Composite',
      className: 'AndroidBranchConfigurationProperties',
      modelProperties: {
        gradleWrapperPath: {
          required: false,
          serializedName: 'gradleWrapperPath',
          type: {
            name: 'String'
          }
        },
        gradleTasks: {
          required: true,
          serializedName: 'gradleTasks',
          type: {
            name: 'String'
          }
        },
        module: {
          required: false,
          serializedName: 'module',
          type: {
            name: 'String'
          }
        },
        variant: {
          required: false,
          serializedName: 'variant',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = AndroidBranchConfigurationProperties;