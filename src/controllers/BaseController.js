const { NotFoundError } = require("../../utils/errors");

/**
 * Base controller class for handling common CRUD operations.
 */
class BaseController {
  /**
   * Creates an instance of BaseController.
   * @param {Object} Model - The Mongoose model to be used for CRUD operations.
   */
  constructor(Model) {
    this.Model = Model;
  }

  /**
   * Retrieves a list of resources.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async getAll(req, res, next) {
    try {
      const { page = "1", limit = "10", ...query } = req.query;
      const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);

      // Find resources with pagination
      const resources = await this.Model.find(query)
        .skip(skip)
        .limit(parseInt(limit, 10));

      // Count total number of resources
      const totalResources = await this.Model.countDocuments(query);

      // Calculate total pages
      const totalPages = Math.ceil(totalResources / parseInt(limit, 10));

      // Send success response with pagination metadata
      res.locals.sendSuccessResponse(res, resources, {
        totalPages,
        totalResources,
        currentPage: parseInt(page, 10),
      });
    } catch (error) {
      // Pass error to error handling middleware
      next(error);
    }
  }

  /**
   * Retrieves a single resource by ID.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async getOne(req, res, next) {
    try {
      // Find resource by ID or throw NotFoundError
      const resource = await this.Model.findById(req.params.id).orFail(
        new NotFoundError(),
      );

      // Send success response with the retrieved resource
      res.locals.sendSuccessResponse(res, resource);
    } catch (error) {
      // Pass error to error handling middleware
      next(error);
    }
  }

  /**
   * Creates a new resource.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async create(req, res, next) {
    try {
      // Create a new resource using request body
      const address = await this.Model.create(req.body);

      // Send success response with the created resource
      res.locals.sendSuccessResponse(res, address);
    } catch (error) {
      // Pass error to error handling middleware
      next(error);
    }
  }

  /**
   * Updates an existing resource by ID.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async update(req, res, next) {
    try {
      // Find and update resource by ID, or throw NotFoundError
      const address = await this.Model.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        },
      ).orFail(new NotFoundError());

      // Send success response with the updated resource
      res.locals.sendSuccessResponse(res, address);
    } catch (error) {
      // Pass error to error handling middleware
      next(error);
    }
  }

  /**
   * Deletes an existing resource by ID.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async delete(req, res, next) {
    try {
      // Find and delete resource by ID, or throw NotFoundError
      await this.Model.findByIdAndDelete(req.params.id).orFail(
        new NotFoundError(),
      );

      // Send success response
      res.locals.sendSuccessResponse(res);
    } catch (error) {
      // Pass error to error handling middleware
      next(error);
    }
  }

  /**
   * Get the schema definition of the model associated with the controller.
   * @param {Object} req - The Express request object.
   * @param {Object} res - The Express response object.
   * @param {Function} next - The next middleware function.
   * @returns {Promise<void>} - A promise that resolves after handling the request.
   */
  async getSchema(req, res, next) {
    try {
      // Get the schema definition from the model
      const schemaDefinition = this.Model.schema.obj;

      // Initialize an object to store field names and types
      const schemaWithDetails = {};

      // Iterate through the schema definition
      for (const fieldName in schemaDefinition) {
        // Get the type of each field
        const fieldInfo = {};

        // Check if the field has an enum defined
        if (schemaDefinition[fieldName].enum) {
          fieldInfo.type = "enum";
          fieldInfo.enumValues = schemaDefinition[fieldName].enum;
        } else {
          // If no enum, store the field type
          fieldInfo.type = schemaDefinition[fieldName].type.name;
        }

        // Store the field details in the result object
        schemaWithDetails[fieldName] = fieldInfo;
      }

      // Send success response
      res.locals.sendSuccessResponse(res, schemaWithDetails);
    } catch (error) {
      // Pass error to error handling middleware
      next(error);
    }
  }
}

module.exports = BaseController;
