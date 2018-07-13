/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.address = (function() {

    /**
     * Namespace address.
     * @exports address
     * @namespace
     */
    var address = {};

    address.AddressService = (function() {

        /**
         * Constructs a new AddressService service.
         * @memberof address
         * @classdesc Represents an AddressService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AddressService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AddressService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AddressService;

        /**
         * Creates new AddressService service using the specified rpc implementation.
         * @function create
         * @memberof address.AddressService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {AddressService} RPC service. Useful where requests and/or responses are streamed.
         */
        AddressService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link address.AddressService#create}.
         * @memberof address.AddressService
         * @typedef CreateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.AddressResponse} [response] AddressResponse
         */

        /**
         * Calls Create.
         * @function create
         * @memberof address.AddressService
         * @instance
         * @param {address.ICreateAddressRequest} request CreateAddressRequest message or plain object
         * @param {address.AddressService.CreateCallback} callback Node-style callback called with the error, if any, and AddressResponse
         * @returns {undefined}
         * @variation 1
         */
        AddressService.prototype.create = function create(request, callback) {
            return this.rpcCall(create, $root.address.CreateAddressRequest, $root.common.AddressResponse, request, callback);
        };

        /**
         * Calls Create.
         * @function create
         * @memberof address.AddressService
         * @instance
         * @param {address.ICreateAddressRequest} request CreateAddressRequest message or plain object
         * @returns {Promise<common.AddressResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link address.AddressService#update}.
         * @memberof address.AddressService
         * @typedef UpdateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.AddressResponse} [response] AddressResponse
         */

        /**
         * Calls Update.
         * @function update
         * @memberof address.AddressService
         * @instance
         * @param {address.IUpdateAddressRequest} request UpdateAddressRequest message or plain object
         * @param {address.AddressService.UpdateCallback} callback Node-style callback called with the error, if any, and AddressResponse
         * @returns {undefined}
         * @variation 1
         */
        AddressService.prototype.update = function update(request, callback) {
            return this.rpcCall(update, $root.address.UpdateAddressRequest, $root.common.AddressResponse, request, callback);
        };

        /**
         * Calls Update.
         * @function update
         * @memberof address.AddressService
         * @instance
         * @param {address.IUpdateAddressRequest} request UpdateAddressRequest message or plain object
         * @returns {Promise<common.AddressResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link address.AddressService#delete_}.
         * @memberof address.AddressService
         * @typedef DeleteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Empty} [response] Empty
         */

        /**
         * Calls Delete.
         * @function delete
         * @memberof address.AddressService
         * @instance
         * @param {address.IAddressID} request AddressID message or plain object
         * @param {address.AddressService.DeleteCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        AddressService.prototype["delete"] = function delete_(request, callback) {
            return this.rpcCall(delete_, $root.address.AddressID, $root.common.Empty, request, callback);
        };

        /**
         * Calls Delete.
         * @function delete
         * @memberof address.AddressService
         * @instance
         * @param {address.IAddressID} request AddressID message or plain object
         * @returns {Promise<common.Empty>} Promise
         * @variation 2
         */

        return AddressService;
    })();

    address.AddressID = (function() {

        /**
         * Properties of an AddressID.
         * @memberof address
         * @interface IAddressID
         * @property {string|null} [addressId] AddressID addressId
         */

        /**
         * Constructs a new AddressID.
         * @memberof address
         * @classdesc Represents an AddressID.
         * @implements IAddressID
         * @constructor
         * @param {address.IAddressID=} [properties] Properties to set
         */
        function AddressID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddressID addressId.
         * @member {string} addressId
         * @memberof address.AddressID
         * @instance
         */
        AddressID.prototype.addressId = "";

        /**
         * Creates a new AddressID instance using the specified properties.
         * @function create
         * @memberof address.AddressID
         * @static
         * @param {address.IAddressID=} [properties] Properties to set
         * @returns {address.AddressID} AddressID instance
         */
        AddressID.create = function create(properties) {
            return new AddressID(properties);
        };

        /**
         * Encodes the specified AddressID message. Does not implicitly {@link address.AddressID.verify|verify} messages.
         * @function encode
         * @memberof address.AddressID
         * @static
         * @param {address.IAddressID} message AddressID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.addressId != null && message.hasOwnProperty("addressId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.addressId);
            return writer;
        };

        /**
         * Encodes the specified AddressID message, length delimited. Does not implicitly {@link address.AddressID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof address.AddressID
         * @static
         * @param {address.IAddressID} message AddressID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddressID message from the specified reader or buffer.
         * @function decode
         * @memberof address.AddressID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {address.AddressID} AddressID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.address.AddressID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddressID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof address.AddressID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {address.AddressID} AddressID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddressID message.
         * @function verify
         * @memberof address.AddressID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddressID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.addressId != null && message.hasOwnProperty("addressId"))
                if (!$util.isString(message.addressId))
                    return "addressId: string expected";
            return null;
        };

        /**
         * Creates an AddressID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof address.AddressID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {address.AddressID} AddressID
         */
        AddressID.fromObject = function fromObject(object) {
            if (object instanceof $root.address.AddressID)
                return object;
            var message = new $root.address.AddressID();
            if (object.addressId != null)
                message.addressId = String(object.addressId);
            return message;
        };

        /**
         * Creates a plain object from an AddressID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof address.AddressID
         * @static
         * @param {address.AddressID} message AddressID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddressID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.addressId = "";
            if (message.addressId != null && message.hasOwnProperty("addressId"))
                object.addressId = message.addressId;
            return object;
        };

        /**
         * Converts this AddressID to JSON.
         * @function toJSON
         * @memberof address.AddressID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddressID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddressID;
    })();

    address.CreateAddressRequest = (function() {

        /**
         * Properties of a CreateAddressRequest.
         * @memberof address
         * @interface ICreateAddressRequest
         * @property {string|null} [currencyCode] CreateAddressRequest currencyCode
         * @property {string|null} [value] CreateAddressRequest value
         */

        /**
         * Constructs a new CreateAddressRequest.
         * @memberof address
         * @classdesc Represents a CreateAddressRequest.
         * @implements ICreateAddressRequest
         * @constructor
         * @param {address.ICreateAddressRequest=} [properties] Properties to set
         */
        function CreateAddressRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAddressRequest currencyCode.
         * @member {string} currencyCode
         * @memberof address.CreateAddressRequest
         * @instance
         */
        CreateAddressRequest.prototype.currencyCode = "";

        /**
         * CreateAddressRequest value.
         * @member {string} value
         * @memberof address.CreateAddressRequest
         * @instance
         */
        CreateAddressRequest.prototype.value = "";

        /**
         * Creates a new CreateAddressRequest instance using the specified properties.
         * @function create
         * @memberof address.CreateAddressRequest
         * @static
         * @param {address.ICreateAddressRequest=} [properties] Properties to set
         * @returns {address.CreateAddressRequest} CreateAddressRequest instance
         */
        CreateAddressRequest.create = function create(properties) {
            return new CreateAddressRequest(properties);
        };

        /**
         * Encodes the specified CreateAddressRequest message. Does not implicitly {@link address.CreateAddressRequest.verify|verify} messages.
         * @function encode
         * @memberof address.CreateAddressRequest
         * @static
         * @param {address.ICreateAddressRequest} message CreateAddressRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAddressRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.currencyCode);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified CreateAddressRequest message, length delimited. Does not implicitly {@link address.CreateAddressRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof address.CreateAddressRequest
         * @static
         * @param {address.ICreateAddressRequest} message CreateAddressRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAddressRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAddressRequest message from the specified reader or buffer.
         * @function decode
         * @memberof address.CreateAddressRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {address.CreateAddressRequest} CreateAddressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAddressRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.address.CreateAddressRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.currencyCode = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateAddressRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof address.CreateAddressRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {address.CreateAddressRequest} CreateAddressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAddressRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAddressRequest message.
         * @function verify
         * @memberof address.CreateAddressRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAddressRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                if (!$util.isString(message.currencyCode))
                    return "currencyCode: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a CreateAddressRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof address.CreateAddressRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {address.CreateAddressRequest} CreateAddressRequest
         */
        CreateAddressRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.address.CreateAddressRequest)
                return object;
            var message = new $root.address.CreateAddressRequest();
            if (object.currencyCode != null)
                message.currencyCode = String(object.currencyCode);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a CreateAddressRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof address.CreateAddressRequest
         * @static
         * @param {address.CreateAddressRequest} message CreateAddressRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAddressRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.currencyCode = "";
                object.value = "";
            }
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                object.currencyCode = message.currencyCode;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this CreateAddressRequest to JSON.
         * @function toJSON
         * @memberof address.CreateAddressRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAddressRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateAddressRequest;
    })();

    address.UpdateAddressRequest = (function() {

        /**
         * Properties of an UpdateAddressRequest.
         * @memberof address
         * @interface IUpdateAddressRequest
         * @property {string|null} [addressId] UpdateAddressRequest addressId
         * @property {string|null} [value] UpdateAddressRequest value
         */

        /**
         * Constructs a new UpdateAddressRequest.
         * @memberof address
         * @classdesc Represents an UpdateAddressRequest.
         * @implements IUpdateAddressRequest
         * @constructor
         * @param {address.IUpdateAddressRequest=} [properties] Properties to set
         */
        function UpdateAddressRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateAddressRequest addressId.
         * @member {string} addressId
         * @memberof address.UpdateAddressRequest
         * @instance
         */
        UpdateAddressRequest.prototype.addressId = "";

        /**
         * UpdateAddressRequest value.
         * @member {string} value
         * @memberof address.UpdateAddressRequest
         * @instance
         */
        UpdateAddressRequest.prototype.value = "";

        /**
         * Creates a new UpdateAddressRequest instance using the specified properties.
         * @function create
         * @memberof address.UpdateAddressRequest
         * @static
         * @param {address.IUpdateAddressRequest=} [properties] Properties to set
         * @returns {address.UpdateAddressRequest} UpdateAddressRequest instance
         */
        UpdateAddressRequest.create = function create(properties) {
            return new UpdateAddressRequest(properties);
        };

        /**
         * Encodes the specified UpdateAddressRequest message. Does not implicitly {@link address.UpdateAddressRequest.verify|verify} messages.
         * @function encode
         * @memberof address.UpdateAddressRequest
         * @static
         * @param {address.IUpdateAddressRequest} message UpdateAddressRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAddressRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.addressId != null && message.hasOwnProperty("addressId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.addressId);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified UpdateAddressRequest message, length delimited. Does not implicitly {@link address.UpdateAddressRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof address.UpdateAddressRequest
         * @static
         * @param {address.IUpdateAddressRequest} message UpdateAddressRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAddressRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateAddressRequest message from the specified reader or buffer.
         * @function decode
         * @memberof address.UpdateAddressRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {address.UpdateAddressRequest} UpdateAddressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAddressRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.address.UpdateAddressRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateAddressRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof address.UpdateAddressRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {address.UpdateAddressRequest} UpdateAddressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAddressRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateAddressRequest message.
         * @function verify
         * @memberof address.UpdateAddressRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateAddressRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.addressId != null && message.hasOwnProperty("addressId"))
                if (!$util.isString(message.addressId))
                    return "addressId: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates an UpdateAddressRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof address.UpdateAddressRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {address.UpdateAddressRequest} UpdateAddressRequest
         */
        UpdateAddressRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.address.UpdateAddressRequest)
                return object;
            var message = new $root.address.UpdateAddressRequest();
            if (object.addressId != null)
                message.addressId = String(object.addressId);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from an UpdateAddressRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof address.UpdateAddressRequest
         * @static
         * @param {address.UpdateAddressRequest} message UpdateAddressRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateAddressRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.addressId = "";
                object.value = "";
            }
            if (message.addressId != null && message.hasOwnProperty("addressId"))
                object.addressId = message.addressId;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this UpdateAddressRequest to JSON.
         * @function toJSON
         * @memberof address.UpdateAddressRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateAddressRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateAddressRequest;
    })();

    return address;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof common
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof common
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {common.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof common.Empty
         * @static
         * @param {common.IEmpty=} [properties] Properties to set
         * @returns {common.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @function encode
         * @memberof common.Empty
         * @static
         * @param {common.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Empty
         * @static
         * @param {common.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof common.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof common.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Empty)
                return object;
            return new $root.common.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Empty
         * @static
         * @param {common.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof common.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Empty;
    })();

    common.UploadURL = (function() {

        /**
         * Properties of an UploadURL.
         * @memberof common
         * @interface IUploadURL
         * @property {string|null} [url] UploadURL url
         */

        /**
         * Constructs a new UploadURL.
         * @memberof common
         * @classdesc Represents an UploadURL.
         * @implements IUploadURL
         * @constructor
         * @param {common.IUploadURL=} [properties] Properties to set
         */
        function UploadURL(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadURL url.
         * @member {string} url
         * @memberof common.UploadURL
         * @instance
         */
        UploadURL.prototype.url = "";

        /**
         * Creates a new UploadURL instance using the specified properties.
         * @function create
         * @memberof common.UploadURL
         * @static
         * @param {common.IUploadURL=} [properties] Properties to set
         * @returns {common.UploadURL} UploadURL instance
         */
        UploadURL.create = function create(properties) {
            return new UploadURL(properties);
        };

        /**
         * Encodes the specified UploadURL message. Does not implicitly {@link common.UploadURL.verify|verify} messages.
         * @function encode
         * @memberof common.UploadURL
         * @static
         * @param {common.IUploadURL} message UploadURL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadURL.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && message.hasOwnProperty("url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified UploadURL message, length delimited. Does not implicitly {@link common.UploadURL.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.UploadURL
         * @static
         * @param {common.IUploadURL} message UploadURL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadURL.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadURL message from the specified reader or buffer.
         * @function decode
         * @memberof common.UploadURL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.UploadURL} UploadURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadURL.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.UploadURL();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UploadURL message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.UploadURL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.UploadURL} UploadURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadURL.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadURL message.
         * @function verify
         * @memberof common.UploadURL
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadURL.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates an UploadURL message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.UploadURL
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.UploadURL} UploadURL
         */
        UploadURL.fromObject = function fromObject(object) {
            if (object instanceof $root.common.UploadURL)
                return object;
            var message = new $root.common.UploadURL();
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from an UploadURL message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.UploadURL
         * @static
         * @param {common.UploadURL} message UploadURL
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadURL.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.url = "";
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this UploadURL to JSON.
         * @function toJSON
         * @memberof common.UploadURL
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadURL.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UploadURL;
    })();

    common.CurrencyCode = (function() {

        /**
         * Properties of a CurrencyCode.
         * @memberof common
         * @interface ICurrencyCode
         * @property {string|null} [currencyCode] CurrencyCode currencyCode
         */

        /**
         * Constructs a new CurrencyCode.
         * @memberof common
         * @classdesc Represents a CurrencyCode.
         * @implements ICurrencyCode
         * @constructor
         * @param {common.ICurrencyCode=} [properties] Properties to set
         */
        function CurrencyCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurrencyCode currencyCode.
         * @member {string} currencyCode
         * @memberof common.CurrencyCode
         * @instance
         */
        CurrencyCode.prototype.currencyCode = "";

        /**
         * Creates a new CurrencyCode instance using the specified properties.
         * @function create
         * @memberof common.CurrencyCode
         * @static
         * @param {common.ICurrencyCode=} [properties] Properties to set
         * @returns {common.CurrencyCode} CurrencyCode instance
         */
        CurrencyCode.create = function create(properties) {
            return new CurrencyCode(properties);
        };

        /**
         * Encodes the specified CurrencyCode message. Does not implicitly {@link common.CurrencyCode.verify|verify} messages.
         * @function encode
         * @memberof common.CurrencyCode
         * @static
         * @param {common.ICurrencyCode} message CurrencyCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrencyCode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.currencyCode);
            return writer;
        };

        /**
         * Encodes the specified CurrencyCode message, length delimited. Does not implicitly {@link common.CurrencyCode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.CurrencyCode
         * @static
         * @param {common.ICurrencyCode} message CurrencyCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrencyCode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CurrencyCode message from the specified reader or buffer.
         * @function decode
         * @memberof common.CurrencyCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.CurrencyCode} CurrencyCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrencyCode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.CurrencyCode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.currencyCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CurrencyCode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.CurrencyCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.CurrencyCode} CurrencyCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrencyCode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CurrencyCode message.
         * @function verify
         * @memberof common.CurrencyCode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CurrencyCode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                if (!$util.isString(message.currencyCode))
                    return "currencyCode: string expected";
            return null;
        };

        /**
         * Creates a CurrencyCode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.CurrencyCode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.CurrencyCode} CurrencyCode
         */
        CurrencyCode.fromObject = function fromObject(object) {
            if (object instanceof $root.common.CurrencyCode)
                return object;
            var message = new $root.common.CurrencyCode();
            if (object.currencyCode != null)
                message.currencyCode = String(object.currencyCode);
            return message;
        };

        /**
         * Creates a plain object from a CurrencyCode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.CurrencyCode
         * @static
         * @param {common.CurrencyCode} message CurrencyCode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CurrencyCode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.currencyCode = "";
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                object.currencyCode = message.currencyCode;
            return object;
        };

        /**
         * Converts this CurrencyCode to JSON.
         * @function toJSON
         * @memberof common.CurrencyCode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CurrencyCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CurrencyCode;
    })();

    common.UserID = (function() {

        /**
         * Properties of a UserID.
         * @memberof common
         * @interface IUserID
         * @property {string|null} [userId] UserID userId
         */

        /**
         * Constructs a new UserID.
         * @memberof common
         * @classdesc Represents a UserID.
         * @implements IUserID
         * @constructor
         * @param {common.IUserID=} [properties] Properties to set
         */
        function UserID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserID userId.
         * @member {string} userId
         * @memberof common.UserID
         * @instance
         */
        UserID.prototype.userId = "";

        /**
         * Creates a new UserID instance using the specified properties.
         * @function create
         * @memberof common.UserID
         * @static
         * @param {common.IUserID=} [properties] Properties to set
         * @returns {common.UserID} UserID instance
         */
        UserID.create = function create(properties) {
            return new UserID(properties);
        };

        /**
         * Encodes the specified UserID message. Does not implicitly {@link common.UserID.verify|verify} messages.
         * @function encode
         * @memberof common.UserID
         * @static
         * @param {common.IUserID} message UserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            return writer;
        };

        /**
         * Encodes the specified UserID message, length delimited. Does not implicitly {@link common.UserID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.UserID
         * @static
         * @param {common.IUserID} message UserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserID message from the specified reader or buffer.
         * @function decode
         * @memberof common.UserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.UserID} UserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.UserID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.UserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.UserID} UserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserID message.
         * @function verify
         * @memberof common.UserID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            return null;
        };

        /**
         * Creates a UserID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.UserID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.UserID} UserID
         */
        UserID.fromObject = function fromObject(object) {
            if (object instanceof $root.common.UserID)
                return object;
            var message = new $root.common.UserID();
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        /**
         * Creates a plain object from a UserID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.UserID
         * @static
         * @param {common.UserID} message UserID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this UserID to JSON.
         * @function toJSON
         * @memberof common.UserID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserID;
    })();

    common.AddressListResponse = (function() {

        /**
         * Properties of an AddressListResponse.
         * @memberof common
         * @interface IAddressListResponse
         * @property {Array.<common.IAddressResponse>|null} [items] AddressListResponse items
         */

        /**
         * Constructs a new AddressListResponse.
         * @memberof common
         * @classdesc Represents an AddressListResponse.
         * @implements IAddressListResponse
         * @constructor
         * @param {common.IAddressListResponse=} [properties] Properties to set
         */
        function AddressListResponse(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddressListResponse items.
         * @member {Array.<common.IAddressResponse>} items
         * @memberof common.AddressListResponse
         * @instance
         */
        AddressListResponse.prototype.items = $util.emptyArray;

        /**
         * Creates a new AddressListResponse instance using the specified properties.
         * @function create
         * @memberof common.AddressListResponse
         * @static
         * @param {common.IAddressListResponse=} [properties] Properties to set
         * @returns {common.AddressListResponse} AddressListResponse instance
         */
        AddressListResponse.create = function create(properties) {
            return new AddressListResponse(properties);
        };

        /**
         * Encodes the specified AddressListResponse message. Does not implicitly {@link common.AddressListResponse.verify|verify} messages.
         * @function encode
         * @memberof common.AddressListResponse
         * @static
         * @param {common.IAddressListResponse} message AddressListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.common.AddressResponse.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddressListResponse message, length delimited. Does not implicitly {@link common.AddressListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.AddressListResponse
         * @static
         * @param {common.IAddressListResponse} message AddressListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddressListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof common.AddressListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.AddressListResponse} AddressListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.AddressListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.common.AddressResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddressListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.AddressListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.AddressListResponse} AddressListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddressListResponse message.
         * @function verify
         * @memberof common.AddressListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddressListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.common.AddressResponse.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AddressListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.AddressListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.AddressListResponse} AddressListResponse
         */
        AddressListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.common.AddressListResponse)
                return object;
            var message = new $root.common.AddressListResponse();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".common.AddressListResponse.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".common.AddressListResponse.items: object expected");
                    message.items[i] = $root.common.AddressResponse.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AddressListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.AddressListResponse
         * @static
         * @param {common.AddressListResponse} message AddressListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddressListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.common.AddressResponse.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this AddressListResponse to JSON.
         * @function toJSON
         * @memberof common.AddressListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddressListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddressListResponse;
    })();

    common.AddressResponse = (function() {

        /**
         * Properties of an AddressResponse.
         * @memberof common
         * @interface IAddressResponse
         * @property {string|null} [id] AddressResponse id
         * @property {string|null} [userId] AddressResponse userId
         * @property {string|null} [currencyCode] AddressResponse currencyCode
         * @property {string|null} [value] AddressResponse value
         */

        /**
         * Constructs a new AddressResponse.
         * @memberof common
         * @classdesc Represents an AddressResponse.
         * @implements IAddressResponse
         * @constructor
         * @param {common.IAddressResponse=} [properties] Properties to set
         */
        function AddressResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddressResponse id.
         * @member {string} id
         * @memberof common.AddressResponse
         * @instance
         */
        AddressResponse.prototype.id = "";

        /**
         * AddressResponse userId.
         * @member {string} userId
         * @memberof common.AddressResponse
         * @instance
         */
        AddressResponse.prototype.userId = "";

        /**
         * AddressResponse currencyCode.
         * @member {string} currencyCode
         * @memberof common.AddressResponse
         * @instance
         */
        AddressResponse.prototype.currencyCode = "";

        /**
         * AddressResponse value.
         * @member {string} value
         * @memberof common.AddressResponse
         * @instance
         */
        AddressResponse.prototype.value = "";

        /**
         * Creates a new AddressResponse instance using the specified properties.
         * @function create
         * @memberof common.AddressResponse
         * @static
         * @param {common.IAddressResponse=} [properties] Properties to set
         * @returns {common.AddressResponse} AddressResponse instance
         */
        AddressResponse.create = function create(properties) {
            return new AddressResponse(properties);
        };

        /**
         * Encodes the specified AddressResponse message. Does not implicitly {@link common.AddressResponse.verify|verify} messages.
         * @function encode
         * @memberof common.AddressResponse
         * @static
         * @param {common.IAddressResponse} message AddressResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.currencyCode);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified AddressResponse message, length delimited. Does not implicitly {@link common.AddressResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.AddressResponse
         * @static
         * @param {common.IAddressResponse} message AddressResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddressResponse message from the specified reader or buffer.
         * @function decode
         * @memberof common.AddressResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.AddressResponse} AddressResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.AddressResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.userId = reader.string();
                    break;
                case 3:
                    message.currencyCode = reader.string();
                    break;
                case 4:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddressResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.AddressResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.AddressResponse} AddressResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddressResponse message.
         * @function verify
         * @memberof common.AddressResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddressResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                if (!$util.isString(message.currencyCode))
                    return "currencyCode: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates an AddressResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.AddressResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.AddressResponse} AddressResponse
         */
        AddressResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.common.AddressResponse)
                return object;
            var message = new $root.common.AddressResponse();
            if (object.id != null)
                message.id = String(object.id);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.currencyCode != null)
                message.currencyCode = String(object.currencyCode);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from an AddressResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.AddressResponse
         * @static
         * @param {common.AddressResponse} message AddressResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddressResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.userId = "";
                object.currencyCode = "";
                object.value = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                object.currencyCode = message.currencyCode;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this AddressResponse to JSON.
         * @function toJSON
         * @memberof common.AddressResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddressResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddressResponse;
    })();

    return common;
})();

$root.currency = (function() {

    /**
     * Namespace currency.
     * @exports currency
     * @namespace
     */
    var currency = {};

    currency.CurrencyService = (function() {

        /**
         * Constructs a new CurrencyService service.
         * @memberof currency
         * @classdesc Represents a CurrencyService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function CurrencyService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (CurrencyService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CurrencyService;

        /**
         * Creates new CurrencyService service using the specified rpc implementation.
         * @function create
         * @memberof currency.CurrencyService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {CurrencyService} RPC service. Useful where requests and/or responses are streamed.
         */
        CurrencyService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link currency.CurrencyService#getAll}.
         * @memberof currency.CurrencyService
         * @typedef GetAllCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {currency.CurrencyListResponse} [response] CurrencyListResponse
         */

        /**
         * Calls GetAll.
         * @function getAll
         * @memberof currency.CurrencyService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @param {currency.CurrencyService.GetAllCallback} callback Node-style callback called with the error, if any, and CurrencyListResponse
         * @returns {undefined}
         * @variation 1
         */
        CurrencyService.prototype.getAll = function getAll(request, callback) {
            return this.rpcCall(getAll, $root.common.Empty, $root.currency.CurrencyListResponse, request, callback);
        };

        /**
         * Calls GetAll.
         * @function getAll
         * @memberof currency.CurrencyService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @returns {Promise<currency.CurrencyListResponse>} Promise
         * @variation 2
         */

        return CurrencyService;
    })();

    currency.CurrencyListResponse = (function() {

        /**
         * Properties of a CurrencyListResponse.
         * @memberof currency
         * @interface ICurrencyListResponse
         * @property {Array.<currency.ICurrencyResponse>|null} [items] CurrencyListResponse items
         */

        /**
         * Constructs a new CurrencyListResponse.
         * @memberof currency
         * @classdesc Represents a CurrencyListResponse.
         * @implements ICurrencyListResponse
         * @constructor
         * @param {currency.ICurrencyListResponse=} [properties] Properties to set
         */
        function CurrencyListResponse(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurrencyListResponse items.
         * @member {Array.<currency.ICurrencyResponse>} items
         * @memberof currency.CurrencyListResponse
         * @instance
         */
        CurrencyListResponse.prototype.items = $util.emptyArray;

        /**
         * Creates a new CurrencyListResponse instance using the specified properties.
         * @function create
         * @memberof currency.CurrencyListResponse
         * @static
         * @param {currency.ICurrencyListResponse=} [properties] Properties to set
         * @returns {currency.CurrencyListResponse} CurrencyListResponse instance
         */
        CurrencyListResponse.create = function create(properties) {
            return new CurrencyListResponse(properties);
        };

        /**
         * Encodes the specified CurrencyListResponse message. Does not implicitly {@link currency.CurrencyListResponse.verify|verify} messages.
         * @function encode
         * @memberof currency.CurrencyListResponse
         * @static
         * @param {currency.ICurrencyListResponse} message CurrencyListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrencyListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.currency.CurrencyResponse.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CurrencyListResponse message, length delimited. Does not implicitly {@link currency.CurrencyListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof currency.CurrencyListResponse
         * @static
         * @param {currency.ICurrencyListResponse} message CurrencyListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrencyListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CurrencyListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof currency.CurrencyListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {currency.CurrencyListResponse} CurrencyListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrencyListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.currency.CurrencyListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.currency.CurrencyResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CurrencyListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof currency.CurrencyListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {currency.CurrencyListResponse} CurrencyListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrencyListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CurrencyListResponse message.
         * @function verify
         * @memberof currency.CurrencyListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CurrencyListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.currency.CurrencyResponse.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CurrencyListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof currency.CurrencyListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {currency.CurrencyListResponse} CurrencyListResponse
         */
        CurrencyListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.currency.CurrencyListResponse)
                return object;
            var message = new $root.currency.CurrencyListResponse();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".currency.CurrencyListResponse.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".currency.CurrencyListResponse.items: object expected");
                    message.items[i] = $root.currency.CurrencyResponse.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CurrencyListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof currency.CurrencyListResponse
         * @static
         * @param {currency.CurrencyListResponse} message CurrencyListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CurrencyListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.currency.CurrencyResponse.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this CurrencyListResponse to JSON.
         * @function toJSON
         * @memberof currency.CurrencyListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CurrencyListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CurrencyListResponse;
    })();

    currency.CurrencyResponse = (function() {

        /**
         * Properties of a CurrencyResponse.
         * @memberof currency
         * @interface ICurrencyResponse
         * @property {string|null} [code] CurrencyResponse code
         * @property {string|null} [name] CurrencyResponse name
         * @property {string|null} [iconURL] CurrencyResponse iconURL
         */

        /**
         * Constructs a new CurrencyResponse.
         * @memberof currency
         * @classdesc Represents a CurrencyResponse.
         * @implements ICurrencyResponse
         * @constructor
         * @param {currency.ICurrencyResponse=} [properties] Properties to set
         */
        function CurrencyResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurrencyResponse code.
         * @member {string} code
         * @memberof currency.CurrencyResponse
         * @instance
         */
        CurrencyResponse.prototype.code = "";

        /**
         * CurrencyResponse name.
         * @member {string} name
         * @memberof currency.CurrencyResponse
         * @instance
         */
        CurrencyResponse.prototype.name = "";

        /**
         * CurrencyResponse iconURL.
         * @member {string} iconURL
         * @memberof currency.CurrencyResponse
         * @instance
         */
        CurrencyResponse.prototype.iconURL = "";

        /**
         * Creates a new CurrencyResponse instance using the specified properties.
         * @function create
         * @memberof currency.CurrencyResponse
         * @static
         * @param {currency.ICurrencyResponse=} [properties] Properties to set
         * @returns {currency.CurrencyResponse} CurrencyResponse instance
         */
        CurrencyResponse.create = function create(properties) {
            return new CurrencyResponse(properties);
        };

        /**
         * Encodes the specified CurrencyResponse message. Does not implicitly {@link currency.CurrencyResponse.verify|verify} messages.
         * @function encode
         * @memberof currency.CurrencyResponse
         * @static
         * @param {currency.ICurrencyResponse} message CurrencyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrencyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.iconURL != null && message.hasOwnProperty("iconURL"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.iconURL);
            return writer;
        };

        /**
         * Encodes the specified CurrencyResponse message, length delimited. Does not implicitly {@link currency.CurrencyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof currency.CurrencyResponse
         * @static
         * @param {currency.ICurrencyResponse} message CurrencyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrencyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CurrencyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof currency.CurrencyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {currency.CurrencyResponse} CurrencyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrencyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.currency.CurrencyResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.iconURL = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CurrencyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof currency.CurrencyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {currency.CurrencyResponse} CurrencyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrencyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CurrencyResponse message.
         * @function verify
         * @memberof currency.CurrencyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CurrencyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.iconURL != null && message.hasOwnProperty("iconURL"))
                if (!$util.isString(message.iconURL))
                    return "iconURL: string expected";
            return null;
        };

        /**
         * Creates a CurrencyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof currency.CurrencyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {currency.CurrencyResponse} CurrencyResponse
         */
        CurrencyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.currency.CurrencyResponse)
                return object;
            var message = new $root.currency.CurrencyResponse();
            if (object.code != null)
                message.code = String(object.code);
            if (object.name != null)
                message.name = String(object.name);
            if (object.iconURL != null)
                message.iconURL = String(object.iconURL);
            return message;
        };

        /**
         * Creates a plain object from a CurrencyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof currency.CurrencyResponse
         * @static
         * @param {currency.CurrencyResponse} message CurrencyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CurrencyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = "";
                object.name = "";
                object.iconURL = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.iconURL != null && message.hasOwnProperty("iconURL"))
                object.iconURL = message.iconURL;
            return object;
        };

        /**
         * Converts this CurrencyResponse to JSON.
         * @function toJSON
         * @memberof currency.CurrencyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CurrencyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CurrencyResponse;
    })();

    return currency;
})();

$root.currency_price = (function() {

    /**
     * Namespace currency_price.
     * @exports currency_price
     * @namespace
     */
    var currency_price = {};

    currency_price.CurrencyPriceService = (function() {

        /**
         * Constructs a new CurrencyPriceService service.
         * @memberof currency_price
         * @classdesc Represents a CurrencyPriceService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function CurrencyPriceService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (CurrencyPriceService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CurrencyPriceService;

        /**
         * Creates new CurrencyPriceService service using the specified rpc implementation.
         * @function create
         * @memberof currency_price.CurrencyPriceService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {CurrencyPriceService} RPC service. Useful where requests and/or responses are streamed.
         */
        CurrencyPriceService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link currency_price.CurrencyPriceService#getLast}.
         * @memberof currency_price.CurrencyPriceService
         * @typedef GetLastCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {currency_price.CurrencyPriceListResponse} [response] CurrencyPriceListResponse
         */

        /**
         * Calls GetLast.
         * @function getLast
         * @memberof currency_price.CurrencyPriceService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @param {currency_price.CurrencyPriceService.GetLastCallback} callback Node-style callback called with the error, if any, and CurrencyPriceListResponse
         * @returns {undefined}
         * @variation 1
         */
        CurrencyPriceService.prototype.getLast = function getLast(request, callback) {
            return this.rpcCall(getLast, $root.common.Empty, $root.currency_price.CurrencyPriceListResponse, request, callback);
        };

        /**
         * Calls GetLast.
         * @function getLast
         * @memberof currency_price.CurrencyPriceService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @returns {Promise<currency_price.CurrencyPriceListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link currency_price.CurrencyPriceService#getByCurrency}.
         * @memberof currency_price.CurrencyPriceService
         * @typedef GetByCurrencyCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {currency_price.CurrencyPriceListResponse} [response] CurrencyPriceListResponse
         */

        /**
         * Calls GetByCurrency.
         * @function getByCurrency
         * @memberof currency_price.CurrencyPriceService
         * @instance
         * @param {common.ICurrencyCode} request CurrencyCode message or plain object
         * @param {currency_price.CurrencyPriceService.GetByCurrencyCallback} callback Node-style callback called with the error, if any, and CurrencyPriceListResponse
         * @returns {undefined}
         * @variation 1
         */
        CurrencyPriceService.prototype.getByCurrency = function getByCurrency(request, callback) {
            return this.rpcCall(getByCurrency, $root.common.CurrencyCode, $root.currency_price.CurrencyPriceListResponse, request, callback);
        };

        /**
         * Calls GetByCurrency.
         * @function getByCurrency
         * @memberof currency_price.CurrencyPriceService
         * @instance
         * @param {common.ICurrencyCode} request CurrencyCode message or plain object
         * @returns {Promise<currency_price.CurrencyPriceListResponse>} Promise
         * @variation 2
         */

        return CurrencyPriceService;
    })();

    currency_price.CurrencyPriceListResponse = (function() {

        /**
         * Properties of a CurrencyPriceListResponse.
         * @memberof currency_price
         * @interface ICurrencyPriceListResponse
         * @property {Array.<currency_price.ICurrencyPriceResponse>|null} [items] CurrencyPriceListResponse items
         */

        /**
         * Constructs a new CurrencyPriceListResponse.
         * @memberof currency_price
         * @classdesc Represents a CurrencyPriceListResponse.
         * @implements ICurrencyPriceListResponse
         * @constructor
         * @param {currency_price.ICurrencyPriceListResponse=} [properties] Properties to set
         */
        function CurrencyPriceListResponse(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurrencyPriceListResponse items.
         * @member {Array.<currency_price.ICurrencyPriceResponse>} items
         * @memberof currency_price.CurrencyPriceListResponse
         * @instance
         */
        CurrencyPriceListResponse.prototype.items = $util.emptyArray;

        /**
         * Creates a new CurrencyPriceListResponse instance using the specified properties.
         * @function create
         * @memberof currency_price.CurrencyPriceListResponse
         * @static
         * @param {currency_price.ICurrencyPriceListResponse=} [properties] Properties to set
         * @returns {currency_price.CurrencyPriceListResponse} CurrencyPriceListResponse instance
         */
        CurrencyPriceListResponse.create = function create(properties) {
            return new CurrencyPriceListResponse(properties);
        };

        /**
         * Encodes the specified CurrencyPriceListResponse message. Does not implicitly {@link currency_price.CurrencyPriceListResponse.verify|verify} messages.
         * @function encode
         * @memberof currency_price.CurrencyPriceListResponse
         * @static
         * @param {currency_price.ICurrencyPriceListResponse} message CurrencyPriceListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrencyPriceListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.currency_price.CurrencyPriceResponse.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CurrencyPriceListResponse message, length delimited. Does not implicitly {@link currency_price.CurrencyPriceListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof currency_price.CurrencyPriceListResponse
         * @static
         * @param {currency_price.ICurrencyPriceListResponse} message CurrencyPriceListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrencyPriceListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CurrencyPriceListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof currency_price.CurrencyPriceListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {currency_price.CurrencyPriceListResponse} CurrencyPriceListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrencyPriceListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.currency_price.CurrencyPriceListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.currency_price.CurrencyPriceResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CurrencyPriceListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof currency_price.CurrencyPriceListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {currency_price.CurrencyPriceListResponse} CurrencyPriceListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrencyPriceListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CurrencyPriceListResponse message.
         * @function verify
         * @memberof currency_price.CurrencyPriceListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CurrencyPriceListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.currency_price.CurrencyPriceResponse.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CurrencyPriceListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof currency_price.CurrencyPriceListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {currency_price.CurrencyPriceListResponse} CurrencyPriceListResponse
         */
        CurrencyPriceListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.currency_price.CurrencyPriceListResponse)
                return object;
            var message = new $root.currency_price.CurrencyPriceListResponse();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".currency_price.CurrencyPriceListResponse.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".currency_price.CurrencyPriceListResponse.items: object expected");
                    message.items[i] = $root.currency_price.CurrencyPriceResponse.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CurrencyPriceListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof currency_price.CurrencyPriceListResponse
         * @static
         * @param {currency_price.CurrencyPriceListResponse} message CurrencyPriceListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CurrencyPriceListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.currency_price.CurrencyPriceResponse.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this CurrencyPriceListResponse to JSON.
         * @function toJSON
         * @memberof currency_price.CurrencyPriceListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CurrencyPriceListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CurrencyPriceListResponse;
    })();

    currency_price.CurrencyPriceResponse = (function() {

        /**
         * Properties of a CurrencyPriceResponse.
         * @memberof currency_price
         * @interface ICurrencyPriceResponse
         * @property {string|null} [id] CurrencyPriceResponse id
         * @property {string|null} [currencyCode] CurrencyPriceResponse currencyCode
         * @property {number|null} [usd] CurrencyPriceResponse usd
         * @property {number|Long|null} [jpy] CurrencyPriceResponse jpy
         * @property {string|null} [datetime] CurrencyPriceResponse datetime
         */

        /**
         * Constructs a new CurrencyPriceResponse.
         * @memberof currency_price
         * @classdesc Represents a CurrencyPriceResponse.
         * @implements ICurrencyPriceResponse
         * @constructor
         * @param {currency_price.ICurrencyPriceResponse=} [properties] Properties to set
         */
        function CurrencyPriceResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurrencyPriceResponse id.
         * @member {string} id
         * @memberof currency_price.CurrencyPriceResponse
         * @instance
         */
        CurrencyPriceResponse.prototype.id = "";

        /**
         * CurrencyPriceResponse currencyCode.
         * @member {string} currencyCode
         * @memberof currency_price.CurrencyPriceResponse
         * @instance
         */
        CurrencyPriceResponse.prototype.currencyCode = "";

        /**
         * CurrencyPriceResponse usd.
         * @member {number} usd
         * @memberof currency_price.CurrencyPriceResponse
         * @instance
         */
        CurrencyPriceResponse.prototype.usd = 0;

        /**
         * CurrencyPriceResponse jpy.
         * @member {number|Long} jpy
         * @memberof currency_price.CurrencyPriceResponse
         * @instance
         */
        CurrencyPriceResponse.prototype.jpy = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CurrencyPriceResponse datetime.
         * @member {string} datetime
         * @memberof currency_price.CurrencyPriceResponse
         * @instance
         */
        CurrencyPriceResponse.prototype.datetime = "";

        /**
         * Creates a new CurrencyPriceResponse instance using the specified properties.
         * @function create
         * @memberof currency_price.CurrencyPriceResponse
         * @static
         * @param {currency_price.ICurrencyPriceResponse=} [properties] Properties to set
         * @returns {currency_price.CurrencyPriceResponse} CurrencyPriceResponse instance
         */
        CurrencyPriceResponse.create = function create(properties) {
            return new CurrencyPriceResponse(properties);
        };

        /**
         * Encodes the specified CurrencyPriceResponse message. Does not implicitly {@link currency_price.CurrencyPriceResponse.verify|verify} messages.
         * @function encode
         * @memberof currency_price.CurrencyPriceResponse
         * @static
         * @param {currency_price.ICurrencyPriceResponse} message CurrencyPriceResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrencyPriceResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.currencyCode);
            if (message.usd != null && message.hasOwnProperty("usd"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.usd);
            if (message.jpy != null && message.hasOwnProperty("jpy"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.jpy);
            if (message.datetime != null && message.hasOwnProperty("datetime"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.datetime);
            return writer;
        };

        /**
         * Encodes the specified CurrencyPriceResponse message, length delimited. Does not implicitly {@link currency_price.CurrencyPriceResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof currency_price.CurrencyPriceResponse
         * @static
         * @param {currency_price.ICurrencyPriceResponse} message CurrencyPriceResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrencyPriceResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CurrencyPriceResponse message from the specified reader or buffer.
         * @function decode
         * @memberof currency_price.CurrencyPriceResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {currency_price.CurrencyPriceResponse} CurrencyPriceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrencyPriceResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.currency_price.CurrencyPriceResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.currencyCode = reader.string();
                    break;
                case 3:
                    message.usd = reader.double();
                    break;
                case 4:
                    message.jpy = reader.int64();
                    break;
                case 5:
                    message.datetime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CurrencyPriceResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof currency_price.CurrencyPriceResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {currency_price.CurrencyPriceResponse} CurrencyPriceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrencyPriceResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CurrencyPriceResponse message.
         * @function verify
         * @memberof currency_price.CurrencyPriceResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CurrencyPriceResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                if (!$util.isString(message.currencyCode))
                    return "currencyCode: string expected";
            if (message.usd != null && message.hasOwnProperty("usd"))
                if (typeof message.usd !== "number")
                    return "usd: number expected";
            if (message.jpy != null && message.hasOwnProperty("jpy"))
                if (!$util.isInteger(message.jpy) && !(message.jpy && $util.isInteger(message.jpy.low) && $util.isInteger(message.jpy.high)))
                    return "jpy: integer|Long expected";
            if (message.datetime != null && message.hasOwnProperty("datetime"))
                if (!$util.isString(message.datetime))
                    return "datetime: string expected";
            return null;
        };

        /**
         * Creates a CurrencyPriceResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof currency_price.CurrencyPriceResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {currency_price.CurrencyPriceResponse} CurrencyPriceResponse
         */
        CurrencyPriceResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.currency_price.CurrencyPriceResponse)
                return object;
            var message = new $root.currency_price.CurrencyPriceResponse();
            if (object.id != null)
                message.id = String(object.id);
            if (object.currencyCode != null)
                message.currencyCode = String(object.currencyCode);
            if (object.usd != null)
                message.usd = Number(object.usd);
            if (object.jpy != null)
                if ($util.Long)
                    (message.jpy = $util.Long.fromValue(object.jpy)).unsigned = false;
                else if (typeof object.jpy === "string")
                    message.jpy = parseInt(object.jpy, 10);
                else if (typeof object.jpy === "number")
                    message.jpy = object.jpy;
                else if (typeof object.jpy === "object")
                    message.jpy = new $util.LongBits(object.jpy.low >>> 0, object.jpy.high >>> 0).toNumber();
            if (object.datetime != null)
                message.datetime = String(object.datetime);
            return message;
        };

        /**
         * Creates a plain object from a CurrencyPriceResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof currency_price.CurrencyPriceResponse
         * @static
         * @param {currency_price.CurrencyPriceResponse} message CurrencyPriceResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CurrencyPriceResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.currencyCode = "";
                object.usd = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.jpy = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.jpy = options.longs === String ? "0" : 0;
                object.datetime = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                object.currencyCode = message.currencyCode;
            if (message.usd != null && message.hasOwnProperty("usd"))
                object.usd = options.json && !isFinite(message.usd) ? String(message.usd) : message.usd;
            if (message.jpy != null && message.hasOwnProperty("jpy"))
                if (typeof message.jpy === "number")
                    object.jpy = options.longs === String ? String(message.jpy) : message.jpy;
                else
                    object.jpy = options.longs === String ? $util.Long.prototype.toString.call(message.jpy) : options.longs === Number ? new $util.LongBits(message.jpy.low >>> 0, message.jpy.high >>> 0).toNumber() : message.jpy;
            if (message.datetime != null && message.hasOwnProperty("datetime"))
                object.datetime = message.datetime;
            return object;
        };

        /**
         * Converts this CurrencyPriceResponse to JSON.
         * @function toJSON
         * @memberof currency_price.CurrencyPriceResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CurrencyPriceResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CurrencyPriceResponse;
    })();

    return currency_price;
})();

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.MeService = (function() {

        /**
         * Constructs a new MeService service.
         * @memberof user
         * @classdesc Represents a MeService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function MeService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (MeService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = MeService;

        /**
         * Creates new MeService service using the specified rpc implementation.
         * @function create
         * @memberof user.MeService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {MeService} RPC service. Useful where requests and/or responses are streamed.
         */
        MeService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link user.MeService#get}.
         * @memberof user.MeService
         * @typedef GetCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.UserResponse} [response] UserResponse
         */

        /**
         * Calls Get.
         * @function get
         * @memberof user.MeService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @param {user.MeService.GetCallback} callback Node-style callback called with the error, if any, and UserResponse
         * @returns {undefined}
         * @variation 1
         */
        MeService.prototype.get = function get(request, callback) {
            return this.rpcCall(get, $root.common.Empty, $root.user.UserResponse, request, callback);
        };

        /**
         * Calls Get.
         * @function get
         * @memberof user.MeService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @returns {Promise<user.UserResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.MeService#create}.
         * @memberof user.MeService
         * @typedef CreateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.UserResponse} [response] UserResponse
         */

        /**
         * Calls Create.
         * @function create
         * @memberof user.MeService
         * @instance
         * @param {user.ICreateUserRequest} request CreateUserRequest message or plain object
         * @param {user.MeService.CreateCallback} callback Node-style callback called with the error, if any, and UserResponse
         * @returns {undefined}
         * @variation 1
         */
        MeService.prototype.create = function create(request, callback) {
            return this.rpcCall(create, $root.user.CreateUserRequest, $root.user.UserResponse, request, callback);
        };

        /**
         * Calls Create.
         * @function create
         * @memberof user.MeService
         * @instance
         * @param {user.ICreateUserRequest} request CreateUserRequest message or plain object
         * @returns {Promise<user.UserResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.MeService#update}.
         * @memberof user.MeService
         * @typedef UpdateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.UserResponse} [response] UserResponse
         */

        /**
         * Calls Update.
         * @function update
         * @memberof user.MeService
         * @instance
         * @param {user.IUpdateUserRequest} request UpdateUserRequest message or plain object
         * @param {user.MeService.UpdateCallback} callback Node-style callback called with the error, if any, and UserResponse
         * @returns {undefined}
         * @variation 1
         */
        MeService.prototype.update = function update(request, callback) {
            return this.rpcCall(update, $root.user.UpdateUserRequest, $root.user.UserResponse, request, callback);
        };

        /**
         * Calls Update.
         * @function update
         * @memberof user.MeService
         * @instance
         * @param {user.IUpdateUserRequest} request UpdateUserRequest message or plain object
         * @returns {Promise<user.UserResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.MeService#createUploadIconURL}.
         * @memberof user.MeService
         * @typedef CreateUploadIconURLCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.UploadURL} [response] UploadURL
         */

        /**
         * Calls CreateUploadIconURL.
         * @function createUploadIconURL
         * @memberof user.MeService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @param {user.MeService.CreateUploadIconURLCallback} callback Node-style callback called with the error, if any, and UploadURL
         * @returns {undefined}
         * @variation 1
         */
        MeService.prototype.createUploadIconURL = function createUploadIconURL(request, callback) {
            return this.rpcCall(createUploadIconURL, $root.common.Empty, $root.common.UploadURL, request, callback);
        };

        /**
         * Calls CreateUploadIconURL.
         * @function createUploadIconURL
         * @memberof user.MeService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @returns {Promise<common.UploadURL>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.MeService#getAddresses}.
         * @memberof user.MeService
         * @typedef GetAddressesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.AddressListResponse} [response] AddressListResponse
         */

        /**
         * Calls GetAddresses.
         * @function getAddresses
         * @memberof user.MeService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @param {user.MeService.GetAddressesCallback} callback Node-style callback called with the error, if any, and AddressListResponse
         * @returns {undefined}
         * @variation 1
         */
        MeService.prototype.getAddresses = function getAddresses(request, callback) {
            return this.rpcCall(getAddresses, $root.common.Empty, $root.common.AddressListResponse, request, callback);
        };

        /**
         * Calls GetAddresses.
         * @function getAddresses
         * @memberof user.MeService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @returns {Promise<common.AddressListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.MeService#follow}.
         * @memberof user.MeService
         * @typedef FollowCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Empty} [response] Empty
         */

        /**
         * Calls Follow.
         * @function follow
         * @memberof user.MeService
         * @instance
         * @param {common.IUserID} request UserID message or plain object
         * @param {user.MeService.FollowCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        MeService.prototype.follow = function follow(request, callback) {
            return this.rpcCall(follow, $root.common.UserID, $root.common.Empty, request, callback);
        };

        /**
         * Calls Follow.
         * @function follow
         * @memberof user.MeService
         * @instance
         * @param {common.IUserID} request UserID message or plain object
         * @returns {Promise<common.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.MeService#unFollow}.
         * @memberof user.MeService
         * @typedef UnFollowCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Empty} [response] Empty
         */

        /**
         * Calls UnFollow.
         * @function unFollow
         * @memberof user.MeService
         * @instance
         * @param {common.IUserID} request UserID message or plain object
         * @param {user.MeService.UnFollowCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        MeService.prototype.unFollow = function unFollow(request, callback) {
            return this.rpcCall(unFollow, $root.common.UserID, $root.common.Empty, request, callback);
        };

        /**
         * Calls UnFollow.
         * @function unFollow
         * @memberof user.MeService
         * @instance
         * @param {common.IUserID} request UserID message or plain object
         * @returns {Promise<common.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.MeService#getFollows}.
         * @memberof user.MeService
         * @typedef GetFollowsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.UserListResponse} [response] UserListResponse
         */

        /**
         * Calls GetFollows.
         * @function getFollows
         * @memberof user.MeService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @param {user.MeService.GetFollowsCallback} callback Node-style callback called with the error, if any, and UserListResponse
         * @returns {undefined}
         * @variation 1
         */
        MeService.prototype.getFollows = function getFollows(request, callback) {
            return this.rpcCall(getFollows, $root.common.Empty, $root.user.UserListResponse, request, callback);
        };

        /**
         * Calls GetFollows.
         * @function getFollows
         * @memberof user.MeService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @returns {Promise<user.UserListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.MeService#getFollowers}.
         * @memberof user.MeService
         * @typedef GetFollowersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.UserListResponse} [response] UserListResponse
         */

        /**
         * Calls GetFollowers.
         * @function getFollowers
         * @memberof user.MeService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @param {user.MeService.GetFollowersCallback} callback Node-style callback called with the error, if any, and UserListResponse
         * @returns {undefined}
         * @variation 1
         */
        MeService.prototype.getFollowers = function getFollowers(request, callback) {
            return this.rpcCall(getFollowers, $root.common.Empty, $root.user.UserListResponse, request, callback);
        };

        /**
         * Calls GetFollowers.
         * @function getFollowers
         * @memberof user.MeService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @returns {Promise<user.UserListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.MeService#getAsset}.
         * @memberof user.MeService
         * @typedef GetAssetCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.AssetResponse} [response] AssetResponse
         */

        /**
         * Calls GetAsset.
         * @function getAsset
         * @memberof user.MeService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @param {user.MeService.GetAssetCallback} callback Node-style callback called with the error, if any, and AssetResponse
         * @returns {undefined}
         * @variation 1
         */
        MeService.prototype.getAsset = function getAsset(request, callback) {
            return this.rpcCall(getAsset, $root.common.Empty, $root.user.AssetResponse, request, callback);
        };

        /**
         * Calls GetAsset.
         * @function getAsset
         * @memberof user.MeService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @returns {Promise<user.AssetResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.MeService#getPortfolios}.
         * @memberof user.MeService
         * @typedef GetPortfoliosCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.PortfolioListResponse} [response] PortfolioListResponse
         */

        /**
         * Calls GetPortfolios.
         * @function getPortfolios
         * @memberof user.MeService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @param {user.MeService.GetPortfoliosCallback} callback Node-style callback called with the error, if any, and PortfolioListResponse
         * @returns {undefined}
         * @variation 1
         */
        MeService.prototype.getPortfolios = function getPortfolios(request, callback) {
            return this.rpcCall(getPortfolios, $root.common.Empty, $root.user.PortfolioListResponse, request, callback);
        };

        /**
         * Calls GetPortfolios.
         * @function getPortfolios
         * @memberof user.MeService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @returns {Promise<user.PortfolioListResponse>} Promise
         * @variation 2
         */

        return MeService;
    })();

    user.UserService = (function() {

        /**
         * Constructs a new UserService service.
         * @memberof user
         * @classdesc Represents a UserService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function UserService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (UserService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserService;

        /**
         * Creates new UserService service using the specified rpc implementation.
         * @function create
         * @memberof user.UserService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {UserService} RPC service. Useful where requests and/or responses are streamed.
         */
        UserService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link user.UserService#getAll}.
         * @memberof user.UserService
         * @typedef GetAllCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.UserListResponse} [response] UserListResponse
         */

        /**
         * Calls GetAll.
         * @function getAll
         * @memberof user.UserService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @param {user.UserService.GetAllCallback} callback Node-style callback called with the error, if any, and UserListResponse
         * @returns {undefined}
         * @variation 1
         */
        UserService.prototype.getAll = function getAll(request, callback) {
            return this.rpcCall(getAll, $root.common.Empty, $root.user.UserListResponse, request, callback);
        };

        /**
         * Calls GetAll.
         * @function getAll
         * @memberof user.UserService
         * @instance
         * @param {common.IEmpty} request Empty message or plain object
         * @returns {Promise<user.UserListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.UserService#get}.
         * @memberof user.UserService
         * @typedef GetCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.UserResponse} [response] UserResponse
         */

        /**
         * Calls Get.
         * @function get
         * @memberof user.UserService
         * @instance
         * @param {common.IUserID} request UserID message or plain object
         * @param {user.UserService.GetCallback} callback Node-style callback called with the error, if any, and UserResponse
         * @returns {undefined}
         * @variation 1
         */
        UserService.prototype.get = function get(request, callback) {
            return this.rpcCall(get, $root.common.UserID, $root.user.UserResponse, request, callback);
        };

        /**
         * Calls Get.
         * @function get
         * @memberof user.UserService
         * @instance
         * @param {common.IUserID} request UserID message or plain object
         * @returns {Promise<user.UserResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.UserService#getFollows}.
         * @memberof user.UserService
         * @typedef GetFollowsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.UserListResponse} [response] UserListResponse
         */

        /**
         * Calls GetFollows.
         * @function getFollows
         * @memberof user.UserService
         * @instance
         * @param {common.IUserID} request UserID message or plain object
         * @param {user.UserService.GetFollowsCallback} callback Node-style callback called with the error, if any, and UserListResponse
         * @returns {undefined}
         * @variation 1
         */
        UserService.prototype.getFollows = function getFollows(request, callback) {
            return this.rpcCall(getFollows, $root.common.UserID, $root.user.UserListResponse, request, callback);
        };

        /**
         * Calls GetFollows.
         * @function getFollows
         * @memberof user.UserService
         * @instance
         * @param {common.IUserID} request UserID message or plain object
         * @returns {Promise<user.UserListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.UserService#getFollowers}.
         * @memberof user.UserService
         * @typedef GetFollowersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.UserListResponse} [response] UserListResponse
         */

        /**
         * Calls GetFollowers.
         * @function getFollowers
         * @memberof user.UserService
         * @instance
         * @param {common.IUserID} request UserID message or plain object
         * @param {user.UserService.GetFollowersCallback} callback Node-style callback called with the error, if any, and UserListResponse
         * @returns {undefined}
         * @variation 1
         */
        UserService.prototype.getFollowers = function getFollowers(request, callback) {
            return this.rpcCall(getFollowers, $root.common.UserID, $root.user.UserListResponse, request, callback);
        };

        /**
         * Calls GetFollowers.
         * @function getFollowers
         * @memberof user.UserService
         * @instance
         * @param {common.IUserID} request UserID message or plain object
         * @returns {Promise<user.UserListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.UserService#getPortfolios}.
         * @memberof user.UserService
         * @typedef GetPortfoliosCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.PortfolioListResponse} [response] PortfolioListResponse
         */

        /**
         * Calls GetPortfolios.
         * @function getPortfolios
         * @memberof user.UserService
         * @instance
         * @param {common.IUserID} request UserID message or plain object
         * @param {user.UserService.GetPortfoliosCallback} callback Node-style callback called with the error, if any, and PortfolioListResponse
         * @returns {undefined}
         * @variation 1
         */
        UserService.prototype.getPortfolios = function getPortfolios(request, callback) {
            return this.rpcCall(getPortfolios, $root.common.UserID, $root.user.PortfolioListResponse, request, callback);
        };

        /**
         * Calls GetPortfolios.
         * @function getPortfolios
         * @memberof user.UserService
         * @instance
         * @param {common.IUserID} request UserID message or plain object
         * @returns {Promise<user.PortfolioListResponse>} Promise
         * @variation 2
         */

        return UserService;
    })();

    user.CreateUserRequest = (function() {

        /**
         * Properties of a CreateUserRequest.
         * @memberof user
         * @interface ICreateUserRequest
         * @property {string|null} [username] CreateUserRequest username
         */

        /**
         * Constructs a new CreateUserRequest.
         * @memberof user
         * @classdesc Represents a CreateUserRequest.
         * @implements ICreateUserRequest
         * @constructor
         * @param {user.ICreateUserRequest=} [properties] Properties to set
         */
        function CreateUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserRequest username.
         * @member {string} username
         * @memberof user.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.username = "";

        /**
         * Creates a new CreateUserRequest instance using the specified properties.
         * @function create
         * @memberof user.CreateUserRequest
         * @static
         * @param {user.ICreateUserRequest=} [properties] Properties to set
         * @returns {user.CreateUserRequest} CreateUserRequest instance
         */
        CreateUserRequest.create = function create(properties) {
            return new CreateUserRequest(properties);
        };

        /**
         * Encodes the specified CreateUserRequest message. Does not implicitly {@link user.CreateUserRequest.verify|verify} messages.
         * @function encode
         * @memberof user.CreateUserRequest
         * @static
         * @param {user.ICreateUserRequest} message CreateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link user.CreateUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.CreateUserRequest
         * @static
         * @param {user.ICreateUserRequest} message CreateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.CreateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.CreateUserRequest} CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.CreateUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.CreateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.CreateUserRequest} CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateUserRequest message.
         * @function verify
         * @memberof user.CreateUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.CreateUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.CreateUserRequest} CreateUserRequest
         */
        CreateUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.CreateUserRequest)
                return object;
            var message = new $root.user.CreateUserRequest();
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.CreateUserRequest
         * @static
         * @param {user.CreateUserRequest} message CreateUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.username = "";
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this CreateUserRequest to JSON.
         * @function toJSON
         * @memberof user.CreateUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateUserRequest;
    })();

    user.UpdateUserRequest = (function() {

        /**
         * Properties of an UpdateUserRequest.
         * @memberof user
         * @interface IUpdateUserRequest
         * @property {string|null} [username] UpdateUserRequest username
         */

        /**
         * Constructs a new UpdateUserRequest.
         * @memberof user
         * @classdesc Represents an UpdateUserRequest.
         * @implements IUpdateUserRequest
         * @constructor
         * @param {user.IUpdateUserRequest=} [properties] Properties to set
         */
        function UpdateUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateUserRequest username.
         * @member {string} username
         * @memberof user.UpdateUserRequest
         * @instance
         */
        UpdateUserRequest.prototype.username = "";

        /**
         * Creates a new UpdateUserRequest instance using the specified properties.
         * @function create
         * @memberof user.UpdateUserRequest
         * @static
         * @param {user.IUpdateUserRequest=} [properties] Properties to set
         * @returns {user.UpdateUserRequest} UpdateUserRequest instance
         */
        UpdateUserRequest.create = function create(properties) {
            return new UpdateUserRequest(properties);
        };

        /**
         * Encodes the specified UpdateUserRequest message. Does not implicitly {@link user.UpdateUserRequest.verify|verify} messages.
         * @function encode
         * @memberof user.UpdateUserRequest
         * @static
         * @param {user.IUpdateUserRequest} message UpdateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified UpdateUserRequest message, length delimited. Does not implicitly {@link user.UpdateUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.UpdateUserRequest
         * @static
         * @param {user.IUpdateUserRequest} message UpdateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.UpdateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.UpdateUserRequest} UpdateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.UpdateUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.UpdateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.UpdateUserRequest} UpdateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateUserRequest message.
         * @function verify
         * @memberof user.UpdateUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates an UpdateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UpdateUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UpdateUserRequest} UpdateUserRequest
         */
        UpdateUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UpdateUserRequest)
                return object;
            var message = new $root.user.UpdateUserRequest();
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from an UpdateUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UpdateUserRequest
         * @static
         * @param {user.UpdateUserRequest} message UpdateUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.username = "";
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this UpdateUserRequest to JSON.
         * @function toJSON
         * @memberof user.UpdateUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateUserRequest;
    })();

    user.UserListResponse = (function() {

        /**
         * Properties of a UserListResponse.
         * @memberof user
         * @interface IUserListResponse
         * @property {Array.<user.IUserResponse>|null} [items] UserListResponse items
         */

        /**
         * Constructs a new UserListResponse.
         * @memberof user
         * @classdesc Represents a UserListResponse.
         * @implements IUserListResponse
         * @constructor
         * @param {user.IUserListResponse=} [properties] Properties to set
         */
        function UserListResponse(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserListResponse items.
         * @member {Array.<user.IUserResponse>} items
         * @memberof user.UserListResponse
         * @instance
         */
        UserListResponse.prototype.items = $util.emptyArray;

        /**
         * Creates a new UserListResponse instance using the specified properties.
         * @function create
         * @memberof user.UserListResponse
         * @static
         * @param {user.IUserListResponse=} [properties] Properties to set
         * @returns {user.UserListResponse} UserListResponse instance
         */
        UserListResponse.create = function create(properties) {
            return new UserListResponse(properties);
        };

        /**
         * Encodes the specified UserListResponse message. Does not implicitly {@link user.UserListResponse.verify|verify} messages.
         * @function encode
         * @memberof user.UserListResponse
         * @static
         * @param {user.IUserListResponse} message UserListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.user.UserResponse.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserListResponse message, length delimited. Does not implicitly {@link user.UserListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.UserListResponse
         * @static
         * @param {user.IUserListResponse} message UserListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.UserListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.UserListResponse} UserListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.UserListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.user.UserResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.UserListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.UserListResponse} UserListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserListResponse message.
         * @function verify
         * @memberof user.UserListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.user.UserResponse.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UserListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UserListResponse} UserListResponse
         */
        UserListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UserListResponse)
                return object;
            var message = new $root.user.UserListResponse();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".user.UserListResponse.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".user.UserListResponse.items: object expected");
                    message.items[i] = $root.user.UserResponse.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UserListResponse
         * @static
         * @param {user.UserListResponse} message UserListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.user.UserResponse.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this UserListResponse to JSON.
         * @function toJSON
         * @memberof user.UserListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserListResponse;
    })();

    user.UserResponse = (function() {

        /**
         * Properties of a UserResponse.
         * @memberof user
         * @interface IUserResponse
         * @property {string|null} [id] UserResponse id
         * @property {string|null} [username] UserResponse username
         * @property {string|null} [iconURL] UserResponse iconURL
         */

        /**
         * Constructs a new UserResponse.
         * @memberof user
         * @classdesc Represents a UserResponse.
         * @implements IUserResponse
         * @constructor
         * @param {user.IUserResponse=} [properties] Properties to set
         */
        function UserResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserResponse id.
         * @member {string} id
         * @memberof user.UserResponse
         * @instance
         */
        UserResponse.prototype.id = "";

        /**
         * UserResponse username.
         * @member {string} username
         * @memberof user.UserResponse
         * @instance
         */
        UserResponse.prototype.username = "";

        /**
         * UserResponse iconURL.
         * @member {string} iconURL
         * @memberof user.UserResponse
         * @instance
         */
        UserResponse.prototype.iconURL = "";

        /**
         * Creates a new UserResponse instance using the specified properties.
         * @function create
         * @memberof user.UserResponse
         * @static
         * @param {user.IUserResponse=} [properties] Properties to set
         * @returns {user.UserResponse} UserResponse instance
         */
        UserResponse.create = function create(properties) {
            return new UserResponse(properties);
        };

        /**
         * Encodes the specified UserResponse message. Does not implicitly {@link user.UserResponse.verify|verify} messages.
         * @function encode
         * @memberof user.UserResponse
         * @static
         * @param {user.IUserResponse} message UserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.iconURL != null && message.hasOwnProperty("iconURL"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.iconURL);
            return writer;
        };

        /**
         * Encodes the specified UserResponse message, length delimited. Does not implicitly {@link user.UserResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.UserResponse
         * @static
         * @param {user.IUserResponse} message UserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.UserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.UserResponse} UserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.UserResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                case 3:
                    message.iconURL = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.UserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.UserResponse} UserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserResponse message.
         * @function verify
         * @memberof user.UserResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.iconURL != null && message.hasOwnProperty("iconURL"))
                if (!$util.isString(message.iconURL))
                    return "iconURL: string expected";
            return null;
        };

        /**
         * Creates a UserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UserResponse} UserResponse
         */
        UserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UserResponse)
                return object;
            var message = new $root.user.UserResponse();
            if (object.id != null)
                message.id = String(object.id);
            if (object.username != null)
                message.username = String(object.username);
            if (object.iconURL != null)
                message.iconURL = String(object.iconURL);
            return message;
        };

        /**
         * Creates a plain object from a UserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UserResponse
         * @static
         * @param {user.UserResponse} message UserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.username = "";
                object.iconURL = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.iconURL != null && message.hasOwnProperty("iconURL"))
                object.iconURL = message.iconURL;
            return object;
        };

        /**
         * Converts this UserResponse to JSON.
         * @function toJSON
         * @memberof user.UserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserResponse;
    })();

    user.AssetResponse = (function() {

        /**
         * Properties of an AssetResponse.
         * @memberof user
         * @interface IAssetResponse
         * @property {number|null} [amount] AssetResponse amount
         */

        /**
         * Constructs a new AssetResponse.
         * @memberof user
         * @classdesc Represents an AssetResponse.
         * @implements IAssetResponse
         * @constructor
         * @param {user.IAssetResponse=} [properties] Properties to set
         */
        function AssetResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetResponse amount.
         * @member {number} amount
         * @memberof user.AssetResponse
         * @instance
         */
        AssetResponse.prototype.amount = 0;

        /**
         * Creates a new AssetResponse instance using the specified properties.
         * @function create
         * @memberof user.AssetResponse
         * @static
         * @param {user.IAssetResponse=} [properties] Properties to set
         * @returns {user.AssetResponse} AssetResponse instance
         */
        AssetResponse.create = function create(properties) {
            return new AssetResponse(properties);
        };

        /**
         * Encodes the specified AssetResponse message. Does not implicitly {@link user.AssetResponse.verify|verify} messages.
         * @function encode
         * @memberof user.AssetResponse
         * @static
         * @param {user.IAssetResponse} message AssetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.amount);
            return writer;
        };

        /**
         * Encodes the specified AssetResponse message, length delimited. Does not implicitly {@link user.AssetResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.AssetResponse
         * @static
         * @param {user.IAssetResponse} message AssetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.AssetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.AssetResponse} AssetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.AssetResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.amount = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.AssetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.AssetResponse} AssetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetResponse message.
         * @function verify
         * @memberof user.AssetResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates an AssetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.AssetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.AssetResponse} AssetResponse
         */
        AssetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.AssetResponse)
                return object;
            var message = new $root.user.AssetResponse();
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from an AssetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.AssetResponse
         * @static
         * @param {user.AssetResponse} message AssetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.amount = 0;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this AssetResponse to JSON.
         * @function toJSON
         * @memberof user.AssetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetResponse;
    })();

    user.PortfolioResponse = (function() {

        /**
         * Properties of a PortfolioResponse.
         * @memberof user
         * @interface IPortfolioResponse
         * @property {string|null} [currencyCode] PortfolioResponse currencyCode
         * @property {number|null} [amount] PortfolioResponse amount
         */

        /**
         * Constructs a new PortfolioResponse.
         * @memberof user
         * @classdesc Represents a PortfolioResponse.
         * @implements IPortfolioResponse
         * @constructor
         * @param {user.IPortfolioResponse=} [properties] Properties to set
         */
        function PortfolioResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PortfolioResponse currencyCode.
         * @member {string} currencyCode
         * @memberof user.PortfolioResponse
         * @instance
         */
        PortfolioResponse.prototype.currencyCode = "";

        /**
         * PortfolioResponse amount.
         * @member {number} amount
         * @memberof user.PortfolioResponse
         * @instance
         */
        PortfolioResponse.prototype.amount = 0;

        /**
         * Creates a new PortfolioResponse instance using the specified properties.
         * @function create
         * @memberof user.PortfolioResponse
         * @static
         * @param {user.IPortfolioResponse=} [properties] Properties to set
         * @returns {user.PortfolioResponse} PortfolioResponse instance
         */
        PortfolioResponse.create = function create(properties) {
            return new PortfolioResponse(properties);
        };

        /**
         * Encodes the specified PortfolioResponse message. Does not implicitly {@link user.PortfolioResponse.verify|verify} messages.
         * @function encode
         * @memberof user.PortfolioResponse
         * @static
         * @param {user.IPortfolioResponse} message PortfolioResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PortfolioResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.currencyCode);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.amount);
            return writer;
        };

        /**
         * Encodes the specified PortfolioResponse message, length delimited. Does not implicitly {@link user.PortfolioResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.PortfolioResponse
         * @static
         * @param {user.IPortfolioResponse} message PortfolioResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PortfolioResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PortfolioResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.PortfolioResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.PortfolioResponse} PortfolioResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PortfolioResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.PortfolioResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.currencyCode = reader.string();
                    break;
                case 3:
                    message.amount = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PortfolioResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.PortfolioResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.PortfolioResponse} PortfolioResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PortfolioResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PortfolioResponse message.
         * @function verify
         * @memberof user.PortfolioResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PortfolioResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                if (!$util.isString(message.currencyCode))
                    return "currencyCode: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates a PortfolioResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.PortfolioResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.PortfolioResponse} PortfolioResponse
         */
        PortfolioResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.PortfolioResponse)
                return object;
            var message = new $root.user.PortfolioResponse();
            if (object.currencyCode != null)
                message.currencyCode = String(object.currencyCode);
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from a PortfolioResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.PortfolioResponse
         * @static
         * @param {user.PortfolioResponse} message PortfolioResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PortfolioResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.currencyCode = "";
                object.amount = 0;
            }
            if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                object.currencyCode = message.currencyCode;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this PortfolioResponse to JSON.
         * @function toJSON
         * @memberof user.PortfolioResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PortfolioResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PortfolioResponse;
    })();

    user.PortfolioListResponse = (function() {

        /**
         * Properties of a PortfolioListResponse.
         * @memberof user
         * @interface IPortfolioListResponse
         * @property {Array.<user.IPortfolioResponse>|null} [items] PortfolioListResponse items
         */

        /**
         * Constructs a new PortfolioListResponse.
         * @memberof user
         * @classdesc Represents a PortfolioListResponse.
         * @implements IPortfolioListResponse
         * @constructor
         * @param {user.IPortfolioListResponse=} [properties] Properties to set
         */
        function PortfolioListResponse(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PortfolioListResponse items.
         * @member {Array.<user.IPortfolioResponse>} items
         * @memberof user.PortfolioListResponse
         * @instance
         */
        PortfolioListResponse.prototype.items = $util.emptyArray;

        /**
         * Creates a new PortfolioListResponse instance using the specified properties.
         * @function create
         * @memberof user.PortfolioListResponse
         * @static
         * @param {user.IPortfolioListResponse=} [properties] Properties to set
         * @returns {user.PortfolioListResponse} PortfolioListResponse instance
         */
        PortfolioListResponse.create = function create(properties) {
            return new PortfolioListResponse(properties);
        };

        /**
         * Encodes the specified PortfolioListResponse message. Does not implicitly {@link user.PortfolioListResponse.verify|verify} messages.
         * @function encode
         * @memberof user.PortfolioListResponse
         * @static
         * @param {user.IPortfolioListResponse} message PortfolioListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PortfolioListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.user.PortfolioResponse.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PortfolioListResponse message, length delimited. Does not implicitly {@link user.PortfolioListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.PortfolioListResponse
         * @static
         * @param {user.IPortfolioListResponse} message PortfolioListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PortfolioListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PortfolioListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.PortfolioListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.PortfolioListResponse} PortfolioListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PortfolioListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.PortfolioListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.user.PortfolioResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PortfolioListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.PortfolioListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.PortfolioListResponse} PortfolioListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PortfolioListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PortfolioListResponse message.
         * @function verify
         * @memberof user.PortfolioListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PortfolioListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.user.PortfolioResponse.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PortfolioListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.PortfolioListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.PortfolioListResponse} PortfolioListResponse
         */
        PortfolioListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.PortfolioListResponse)
                return object;
            var message = new $root.user.PortfolioListResponse();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".user.PortfolioListResponse.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".user.PortfolioListResponse.items: object expected");
                    message.items[i] = $root.user.PortfolioResponse.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PortfolioListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.PortfolioListResponse
         * @static
         * @param {user.PortfolioListResponse} message PortfolioListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PortfolioListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.user.PortfolioResponse.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this PortfolioListResponse to JSON.
         * @function toJSON
         * @memberof user.PortfolioListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PortfolioListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PortfolioListResponse;
    })();

    return user;
})();

module.exports = $root;
