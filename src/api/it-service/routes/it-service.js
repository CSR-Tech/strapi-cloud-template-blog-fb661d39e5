'use strict';

/**
 * it-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::it-service.it-service');
