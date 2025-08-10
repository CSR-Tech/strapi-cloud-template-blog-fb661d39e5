'use strict';

/**
 * send-message router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::send-message.send-message');
