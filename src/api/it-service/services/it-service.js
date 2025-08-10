'use strict';

/**
 * it-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::it-service.it-service');
