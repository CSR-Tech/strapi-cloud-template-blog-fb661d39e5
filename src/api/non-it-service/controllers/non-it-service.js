'use strict';

/**
 * non-it-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::non-it-service.non-it-service');
