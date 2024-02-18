const express = require("express");

/**
 * BaseRoutes class for handling common route functionalities.
 */
class BaseRoutes {
  /**
   * Creates an instance of BaseRoutes.
   * @param {Object} controller - Controller object responsible for handling route logic.
   */
  constructor(controller) {
    this.router = express.Router();
    this.controller = controller;
  }

  /**
   * Registers a route for retrieving all resources.
   */
  getAll() {
    this.router.get("/", this.controller.getAll.bind(this.controller));
  }

  /**
   * Registers a route for retrieving a single resource by ID.
   */
  getOne() {
    this.router.get("/:id", this.controller.getOne.bind(this.controller));
  }

  /**
   * Registers a route for creating a new resource.
   */
  create() {
    this.router.post("/", this.controller.create.bind(this.controller));
  }

  /**
   * Registers a route for updating an existing resource by ID.
   */
  update() {
    this.router.put("/:id", this.controller.update.bind(this.controller));
  }

  /**
   * Registers a route for deleting an existing resource by ID.
   */
  delete() {
    this.router.delete("/:id", this.controller.delete.bind(this.controller));
  }

  /**
   * Registers a route to get the schema definition of the associated model.
   */
  getSchema() {
    this.router.get("/schema", this.controller.getSchema.bind(this.controller));
  }

  /**
   * Extends the base routes with additional routes provided by a callback function.
   * @param {Function} callback - Callback function that extends the routes.
   */
  extendRoutes(callback) {
    callback(this.router);
  }

  /**
   * Returns the Express router instance.
   * @returns {Object} Express router instance.
   */
  getRouter() {
    return this.router;
  }
}

module.exports = BaseRoutes;
