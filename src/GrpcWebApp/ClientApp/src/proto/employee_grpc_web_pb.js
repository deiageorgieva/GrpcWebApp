/**
 * @fileoverview gRPC-Web generated client stub for employeeService
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.employeeService = require('./employee_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.employeeService.EmployeeServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.employeeService.EmployeeServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.employeeService.Empty,
 *   !proto.employeeService.Employees>}
 */
const methodDescriptor_EmployeeService_SelectAll = new grpc.web.MethodDescriptor(
  '/employeeService.EmployeeService/SelectAll',
  grpc.web.MethodType.UNARY,
  proto.employeeService.Empty,
  proto.employeeService.Employees,
  /**
   * @param {!proto.employeeService.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.employeeService.Employees.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.employeeService.Empty,
 *   !proto.employeeService.Employees>}
 */
const methodInfo_EmployeeService_SelectAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.employeeService.Employees,
  /**
   * @param {!proto.employeeService.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.employeeService.Employees.deserializeBinary
);


/**
 * @param {!proto.employeeService.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.employeeService.Employees)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.employeeService.Employees>|undefined}
 *     The XHR Node Readable Stream
 */
proto.employeeService.EmployeeServiceClient.prototype.selectAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/employeeService.EmployeeService/SelectAll',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_SelectAll,
      callback);
};


/**
 * @param {!proto.employeeService.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.employeeService.Employees>}
 *     A native promise that resolves to the response
 */
proto.employeeService.EmployeeServicePromiseClient.prototype.selectAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/employeeService.EmployeeService/SelectAll',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_SelectAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.employeeService.EmployeeFilter,
 *   !proto.employeeService.Employee>}
 */
const methodDescriptor_EmployeeService_SelectById = new grpc.web.MethodDescriptor(
  '/employeeService.EmployeeService/SelectById',
  grpc.web.MethodType.UNARY,
  proto.employeeService.EmployeeFilter,
  proto.employeeService.Employee,
  /**
   * @param {!proto.employeeService.EmployeeFilter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.employeeService.Employee.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.employeeService.EmployeeFilter,
 *   !proto.employeeService.Employee>}
 */
const methodInfo_EmployeeService_SelectById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.employeeService.Employee,
  /**
   * @param {!proto.employeeService.EmployeeFilter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.employeeService.Employee.deserializeBinary
);


/**
 * @param {!proto.employeeService.EmployeeFilter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.employeeService.Employee)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.employeeService.Employee>|undefined}
 *     The XHR Node Readable Stream
 */
proto.employeeService.EmployeeServiceClient.prototype.selectById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/employeeService.EmployeeService/SelectById',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_SelectById,
      callback);
};


/**
 * @param {!proto.employeeService.EmployeeFilter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.employeeService.Employee>}
 *     A native promise that resolves to the response
 */
proto.employeeService.EmployeeServicePromiseClient.prototype.selectById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/employeeService.EmployeeService/SelectById',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_SelectById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.employeeService.Employee,
 *   !proto.employeeService.Result>}
 */
const methodDescriptor_EmployeeService_Insert = new grpc.web.MethodDescriptor(
  '/employeeService.EmployeeService/Insert',
  grpc.web.MethodType.UNARY,
  proto.employeeService.Employee,
  proto.employeeService.Result,
  /**
   * @param {!proto.employeeService.Employee} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.employeeService.Result.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.employeeService.Employee,
 *   !proto.employeeService.Result>}
 */
const methodInfo_EmployeeService_Insert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.employeeService.Result,
  /**
   * @param {!proto.employeeService.Employee} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.employeeService.Result.deserializeBinary
);


/**
 * @param {!proto.employeeService.Employee} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.employeeService.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.employeeService.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.employeeService.EmployeeServiceClient.prototype.insert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/employeeService.EmployeeService/Insert',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_Insert,
      callback);
};


/**
 * @param {!proto.employeeService.Employee} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.employeeService.Result>}
 *     A native promise that resolves to the response
 */
proto.employeeService.EmployeeServicePromiseClient.prototype.insert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/employeeService.EmployeeService/Insert',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_Insert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.employeeService.Employee,
 *   !proto.employeeService.Result>}
 */
const methodDescriptor_EmployeeService_Update = new grpc.web.MethodDescriptor(
  '/employeeService.EmployeeService/Update',
  grpc.web.MethodType.UNARY,
  proto.employeeService.Employee,
  proto.employeeService.Result,
  /**
   * @param {!proto.employeeService.Employee} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.employeeService.Result.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.employeeService.Employee,
 *   !proto.employeeService.Result>}
 */
const methodInfo_EmployeeService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.employeeService.Result,
  /**
   * @param {!proto.employeeService.Employee} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.employeeService.Result.deserializeBinary
);


/**
 * @param {!proto.employeeService.Employee} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.employeeService.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.employeeService.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.employeeService.EmployeeServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/employeeService.EmployeeService/Update',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_Update,
      callback);
};


/**
 * @param {!proto.employeeService.Employee} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.employeeService.Result>}
 *     A native promise that resolves to the response
 */
proto.employeeService.EmployeeServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/employeeService.EmployeeService/Update',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.employeeService.EmployeeFilter,
 *   !proto.employeeService.Result>}
 */
const methodDescriptor_EmployeeService_Delete = new grpc.web.MethodDescriptor(
  '/employeeService.EmployeeService/Delete',
  grpc.web.MethodType.UNARY,
  proto.employeeService.EmployeeFilter,
  proto.employeeService.Result,
  /**
   * @param {!proto.employeeService.EmployeeFilter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.employeeService.Result.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.employeeService.EmployeeFilter,
 *   !proto.employeeService.Result>}
 */
const methodInfo_EmployeeService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.employeeService.Result,
  /**
   * @param {!proto.employeeService.EmployeeFilter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.employeeService.Result.deserializeBinary
);


/**
 * @param {!proto.employeeService.EmployeeFilter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.employeeService.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.employeeService.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.employeeService.EmployeeServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/employeeService.EmployeeService/Delete',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_Delete,
      callback);
};


/**
 * @param {!proto.employeeService.EmployeeFilter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.employeeService.Result>}
 *     A native promise that resolves to the response
 */
proto.employeeService.EmployeeServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/employeeService.EmployeeService/Delete',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_Delete);
};


module.exports = proto.employeeService;

