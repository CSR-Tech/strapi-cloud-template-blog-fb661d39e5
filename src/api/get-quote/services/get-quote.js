'use strict';

/**
 * get-quote service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::get-quote.get-quote');
