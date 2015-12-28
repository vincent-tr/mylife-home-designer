'use strict';

import EntityType from './entity-type.js';
import Entity from './entity.js';

export default class EntityResources extends Entity {
  constructor(id, host) {
    super(id, host);
  }

  get type() {
    return EntityType.RESOURCES;
  }
};