'use strict';

/**
 * non-it-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::non-it-service.non-it-service');
