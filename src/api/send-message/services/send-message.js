'use strict';

/**
 * send-message service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::send-message.send-message');
