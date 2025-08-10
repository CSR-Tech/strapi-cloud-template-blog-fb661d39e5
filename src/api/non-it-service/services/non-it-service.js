'use strict';

/**
 * non-it-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::non-it-service.non-it-service');
