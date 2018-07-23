import * as $protobuf from "protobufjs";

/** Namespace address. */
export namespace address {

    /** Represents an AddressService */
    class AddressService extends $protobuf.rpc.Service {

        /**
         * Constructs a new AddressService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new AddressService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AddressService;

        /**
         * Calls Create.
         * @param request CreateAddressRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AddressResponse
         */
        public create(request: address.ICreateAddressRequest, callback: address.AddressService.CreateCallback): void;

        /**
         * Calls Create.
         * @param request CreateAddressRequest message or plain object
         * @returns Promise
         */
        public create(request: address.ICreateAddressRequest): Promise<common.AddressResponse>;

        /**
         * Calls Update.
         * @param request UpdateAddressRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AddressResponse
         */
        public update(request: address.IUpdateAddressRequest, callback: address.AddressService.UpdateCallback): void;

        /**
         * Calls Update.
         * @param request UpdateAddressRequest message or plain object
         * @returns Promise
         */
        public update(request: address.IUpdateAddressRequest): Promise<common.AddressResponse>;

        /**
         * Calls Delete.
         * @param request AddressID message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public delete(request: address.IAddressID, callback: address.AddressService.DeleteCallback): void;

        /**
         * Calls Delete.
         * @param request AddressID message or plain object
         * @returns Promise
         */
        public delete(request: address.IAddressID): Promise<common.Empty>;
    }

    namespace AddressService {

        /**
         * Callback as used by {@link address.AddressService#create}.
         * @param error Error, if any
         * @param [response] AddressResponse
         */
        type CreateCallback = (error: (Error|null), response?: common.AddressResponse) => void;

        /**
         * Callback as used by {@link address.AddressService#update}.
         * @param error Error, if any
         * @param [response] AddressResponse
         */
        type UpdateCallback = (error: (Error|null), response?: common.AddressResponse) => void;

        /**
         * Callback as used by {@link address.AddressService#delete_}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type DeleteCallback = (error: (Error|null), response?: common.Empty) => void;
    }

    /** Properties of an AddressID. */
    interface IAddressID {

        /** AddressID addressId */
        addressId?: (string|null);
    }

    /** Represents an AddressID. */
    class AddressID implements IAddressID {

        /**
         * Constructs a new AddressID.
         * @param [properties] Properties to set
         */
        constructor(properties?: address.IAddressID);

        /** AddressID addressId. */
        public addressId: string;

        /**
         * Creates a new AddressID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddressID instance
         */
        public static create(properties?: address.IAddressID): address.AddressID;

        /**
         * Encodes the specified AddressID message. Does not implicitly {@link address.AddressID.verify|verify} messages.
         * @param message AddressID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: address.IAddressID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddressID message, length delimited. Does not implicitly {@link address.AddressID.verify|verify} messages.
         * @param message AddressID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: address.IAddressID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddressID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddressID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): address.AddressID;

        /**
         * Decodes an AddressID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddressID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): address.AddressID;

        /**
         * Verifies an AddressID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddressID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddressID
         */
        public static fromObject(object: { [k: string]: any }): address.AddressID;

        /**
         * Creates a plain object from an AddressID message. Also converts values to other types if specified.
         * @param message AddressID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: address.AddressID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddressID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateAddressRequest. */
    interface ICreateAddressRequest {

        /** CreateAddressRequest currencyCode */
        currencyCode?: (string|null);

        /** CreateAddressRequest value */
        value?: (string|null);
    }

    /** Represents a CreateAddressRequest. */
    class CreateAddressRequest implements ICreateAddressRequest {

        /**
         * Constructs a new CreateAddressRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: address.ICreateAddressRequest);

        /** CreateAddressRequest currencyCode. */
        public currencyCode: string;

        /** CreateAddressRequest value. */
        public value: string;

        /**
         * Creates a new CreateAddressRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateAddressRequest instance
         */
        public static create(properties?: address.ICreateAddressRequest): address.CreateAddressRequest;

        /**
         * Encodes the specified CreateAddressRequest message. Does not implicitly {@link address.CreateAddressRequest.verify|verify} messages.
         * @param message CreateAddressRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: address.ICreateAddressRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateAddressRequest message, length delimited. Does not implicitly {@link address.CreateAddressRequest.verify|verify} messages.
         * @param message CreateAddressRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: address.ICreateAddressRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateAddressRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateAddressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): address.CreateAddressRequest;

        /**
         * Decodes a CreateAddressRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateAddressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): address.CreateAddressRequest;

        /**
         * Verifies a CreateAddressRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateAddressRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateAddressRequest
         */
        public static fromObject(object: { [k: string]: any }): address.CreateAddressRequest;

        /**
         * Creates a plain object from a CreateAddressRequest message. Also converts values to other types if specified.
         * @param message CreateAddressRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: address.CreateAddressRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateAddressRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateAddressRequest. */
    interface IUpdateAddressRequest {

        /** UpdateAddressRequest addressId */
        addressId?: (string|null);

        /** UpdateAddressRequest value */
        value?: (string|null);
    }

    /** Represents an UpdateAddressRequest. */
    class UpdateAddressRequest implements IUpdateAddressRequest {

        /**
         * Constructs a new UpdateAddressRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: address.IUpdateAddressRequest);

        /** UpdateAddressRequest addressId. */
        public addressId: string;

        /** UpdateAddressRequest value. */
        public value: string;

        /**
         * Creates a new UpdateAddressRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateAddressRequest instance
         */
        public static create(properties?: address.IUpdateAddressRequest): address.UpdateAddressRequest;

        /**
         * Encodes the specified UpdateAddressRequest message. Does not implicitly {@link address.UpdateAddressRequest.verify|verify} messages.
         * @param message UpdateAddressRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: address.IUpdateAddressRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateAddressRequest message, length delimited. Does not implicitly {@link address.UpdateAddressRequest.verify|verify} messages.
         * @param message UpdateAddressRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: address.IUpdateAddressRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateAddressRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateAddressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): address.UpdateAddressRequest;

        /**
         * Decodes an UpdateAddressRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateAddressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): address.UpdateAddressRequest;

        /**
         * Verifies an UpdateAddressRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateAddressRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateAddressRequest
         */
        public static fromObject(object: { [k: string]: any }): address.UpdateAddressRequest;

        /**
         * Creates a plain object from an UpdateAddressRequest message. Also converts values to other types if specified.
         * @param message UpdateAddressRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: address.UpdateAddressRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateAddressRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of an Empty. */
    interface IEmpty {
    }

    /** Represents an Empty. */
    class Empty implements IEmpty {

        /**
         * Constructs a new Empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: common.IEmpty): common.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Empty;

        /**
         * Verifies an Empty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Empty
         */
        public static fromObject(object: { [k: string]: any }): common.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param message Empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Empty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UploadURL. */
    interface IUploadURL {

        /** UploadURL url */
        url?: (string|null);
    }

    /** Represents an UploadURL. */
    class UploadURL implements IUploadURL {

        /**
         * Constructs a new UploadURL.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IUploadURL);

        /** UploadURL url. */
        public url: string;

        /**
         * Creates a new UploadURL instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadURL instance
         */
        public static create(properties?: common.IUploadURL): common.UploadURL;

        /**
         * Encodes the specified UploadURL message. Does not implicitly {@link common.UploadURL.verify|verify} messages.
         * @param message UploadURL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IUploadURL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadURL message, length delimited. Does not implicitly {@link common.UploadURL.verify|verify} messages.
         * @param message UploadURL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IUploadURL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadURL message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.UploadURL;

        /**
         * Decodes an UploadURL message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.UploadURL;

        /**
         * Verifies an UploadURL message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadURL message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadURL
         */
        public static fromObject(object: { [k: string]: any }): common.UploadURL;

        /**
         * Creates a plain object from an UploadURL message. Also converts values to other types if specified.
         * @param message UploadURL
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.UploadURL, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadURL to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CurrencyCode. */
    interface ICurrencyCode {

        /** CurrencyCode currencyCode */
        currencyCode?: (string|null);
    }

    /** Represents a CurrencyCode. */
    class CurrencyCode implements ICurrencyCode {

        /**
         * Constructs a new CurrencyCode.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ICurrencyCode);

        /** CurrencyCode currencyCode. */
        public currencyCode: string;

        /**
         * Creates a new CurrencyCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CurrencyCode instance
         */
        public static create(properties?: common.ICurrencyCode): common.CurrencyCode;

        /**
         * Encodes the specified CurrencyCode message. Does not implicitly {@link common.CurrencyCode.verify|verify} messages.
         * @param message CurrencyCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ICurrencyCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CurrencyCode message, length delimited. Does not implicitly {@link common.CurrencyCode.verify|verify} messages.
         * @param message CurrencyCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ICurrencyCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CurrencyCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CurrencyCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.CurrencyCode;

        /**
         * Decodes a CurrencyCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CurrencyCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.CurrencyCode;

        /**
         * Verifies a CurrencyCode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CurrencyCode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CurrencyCode
         */
        public static fromObject(object: { [k: string]: any }): common.CurrencyCode;

        /**
         * Creates a plain object from a CurrencyCode message. Also converts values to other types if specified.
         * @param message CurrencyCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.CurrencyCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CurrencyCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserID. */
    interface IUserID {

        /** UserID userId */
        userId?: (string|null);
    }

    /** Represents a UserID. */
    class UserID implements IUserID {

        /**
         * Constructs a new UserID.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IUserID);

        /** UserID userId. */
        public userId: string;

        /**
         * Creates a new UserID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserID instance
         */
        public static create(properties?: common.IUserID): common.UserID;

        /**
         * Encodes the specified UserID message. Does not implicitly {@link common.UserID.verify|verify} messages.
         * @param message UserID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IUserID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserID message, length delimited. Does not implicitly {@link common.UserID.verify|verify} messages.
         * @param message UserID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IUserID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.UserID;

        /**
         * Decodes a UserID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.UserID;

        /**
         * Verifies a UserID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserID
         */
        public static fromObject(object: { [k: string]: any }): common.UserID;

        /**
         * Creates a plain object from a UserID message. Also converts values to other types if specified.
         * @param message UserID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.UserID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddressListResponse. */
    interface IAddressListResponse {

        /** AddressListResponse items */
        items?: (common.IAddressResponse[]|null);
    }

    /** Represents an AddressListResponse. */
    class AddressListResponse implements IAddressListResponse {

        /**
         * Constructs a new AddressListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IAddressListResponse);

        /** AddressListResponse items. */
        public items: common.IAddressResponse[];

        /**
         * Creates a new AddressListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddressListResponse instance
         */
        public static create(properties?: common.IAddressListResponse): common.AddressListResponse;

        /**
         * Encodes the specified AddressListResponse message. Does not implicitly {@link common.AddressListResponse.verify|verify} messages.
         * @param message AddressListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IAddressListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddressListResponse message, length delimited. Does not implicitly {@link common.AddressListResponse.verify|verify} messages.
         * @param message AddressListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IAddressListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddressListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddressListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.AddressListResponse;

        /**
         * Decodes an AddressListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddressListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.AddressListResponse;

        /**
         * Verifies an AddressListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddressListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddressListResponse
         */
        public static fromObject(object: { [k: string]: any }): common.AddressListResponse;

        /**
         * Creates a plain object from an AddressListResponse message. Also converts values to other types if specified.
         * @param message AddressListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.AddressListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddressListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddressResponse. */
    interface IAddressResponse {

        /** AddressResponse id */
        id?: (string|null);

        /** AddressResponse userId */
        userId?: (string|null);

        /** AddressResponse currencyCode */
        currencyCode?: (string|null);

        /** AddressResponse value */
        value?: (string|null);
    }

    /** Represents an AddressResponse. */
    class AddressResponse implements IAddressResponse {

        /**
         * Constructs a new AddressResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IAddressResponse);

        /** AddressResponse id. */
        public id: string;

        /** AddressResponse userId. */
        public userId: string;

        /** AddressResponse currencyCode. */
        public currencyCode: string;

        /** AddressResponse value. */
        public value: string;

        /**
         * Creates a new AddressResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddressResponse instance
         */
        public static create(properties?: common.IAddressResponse): common.AddressResponse;

        /**
         * Encodes the specified AddressResponse message. Does not implicitly {@link common.AddressResponse.verify|verify} messages.
         * @param message AddressResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IAddressResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddressResponse message, length delimited. Does not implicitly {@link common.AddressResponse.verify|verify} messages.
         * @param message AddressResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IAddressResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddressResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddressResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.AddressResponse;

        /**
         * Decodes an AddressResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddressResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.AddressResponse;

        /**
         * Verifies an AddressResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddressResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddressResponse
         */
        public static fromObject(object: { [k: string]: any }): common.AddressResponse;

        /**
         * Creates a plain object from an AddressResponse message. Also converts values to other types if specified.
         * @param message AddressResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.AddressResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddressResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace currency. */
export namespace currency {

    /** Represents a CurrencyService */
    class CurrencyService extends $protobuf.rpc.Service {

        /**
         * Constructs a new CurrencyService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new CurrencyService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CurrencyService;

        /**
         * Calls GetAll.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and CurrencyListResponse
         */
        public getAll(request: common.IEmpty, callback: currency.CurrencyService.GetAllCallback): void;

        /**
         * Calls GetAll.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getAll(request: common.IEmpty): Promise<currency.CurrencyListResponse>;
    }

    namespace CurrencyService {

        /**
         * Callback as used by {@link currency.CurrencyService#getAll}.
         * @param error Error, if any
         * @param [response] CurrencyListResponse
         */
        type GetAllCallback = (error: (Error|null), response?: currency.CurrencyListResponse) => void;
    }

    /** Properties of a CurrencyListResponse. */
    interface ICurrencyListResponse {

        /** CurrencyListResponse items */
        items?: (currency.ICurrencyResponse[]|null);
    }

    /** Represents a CurrencyListResponse. */
    class CurrencyListResponse implements ICurrencyListResponse {

        /**
         * Constructs a new CurrencyListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: currency.ICurrencyListResponse);

        /** CurrencyListResponse items. */
        public items: currency.ICurrencyResponse[];

        /**
         * Creates a new CurrencyListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CurrencyListResponse instance
         */
        public static create(properties?: currency.ICurrencyListResponse): currency.CurrencyListResponse;

        /**
         * Encodes the specified CurrencyListResponse message. Does not implicitly {@link currency.CurrencyListResponse.verify|verify} messages.
         * @param message CurrencyListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: currency.ICurrencyListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CurrencyListResponse message, length delimited. Does not implicitly {@link currency.CurrencyListResponse.verify|verify} messages.
         * @param message CurrencyListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: currency.ICurrencyListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CurrencyListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CurrencyListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): currency.CurrencyListResponse;

        /**
         * Decodes a CurrencyListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CurrencyListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): currency.CurrencyListResponse;

        /**
         * Verifies a CurrencyListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CurrencyListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CurrencyListResponse
         */
        public static fromObject(object: { [k: string]: any }): currency.CurrencyListResponse;

        /**
         * Creates a plain object from a CurrencyListResponse message. Also converts values to other types if specified.
         * @param message CurrencyListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: currency.CurrencyListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CurrencyListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CurrencyResponse. */
    interface ICurrencyResponse {

        /** CurrencyResponse code */
        code?: (string|null);

        /** CurrencyResponse name */
        name?: (string|null);

        /** CurrencyResponse iconURL */
        iconURL?: (string|null);
    }

    /** Represents a CurrencyResponse. */
    class CurrencyResponse implements ICurrencyResponse {

        /**
         * Constructs a new CurrencyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: currency.ICurrencyResponse);

        /** CurrencyResponse code. */
        public code: string;

        /** CurrencyResponse name. */
        public name: string;

        /** CurrencyResponse iconURL. */
        public iconURL: string;

        /**
         * Creates a new CurrencyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CurrencyResponse instance
         */
        public static create(properties?: currency.ICurrencyResponse): currency.CurrencyResponse;

        /**
         * Encodes the specified CurrencyResponse message. Does not implicitly {@link currency.CurrencyResponse.verify|verify} messages.
         * @param message CurrencyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: currency.ICurrencyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CurrencyResponse message, length delimited. Does not implicitly {@link currency.CurrencyResponse.verify|verify} messages.
         * @param message CurrencyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: currency.ICurrencyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CurrencyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CurrencyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): currency.CurrencyResponse;

        /**
         * Decodes a CurrencyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CurrencyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): currency.CurrencyResponse;

        /**
         * Verifies a CurrencyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CurrencyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CurrencyResponse
         */
        public static fromObject(object: { [k: string]: any }): currency.CurrencyResponse;

        /**
         * Creates a plain object from a CurrencyResponse message. Also converts values to other types if specified.
         * @param message CurrencyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: currency.CurrencyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CurrencyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace currency_price. */
export namespace currency_price {

    /** Represents a CurrencyPriceService */
    class CurrencyPriceService extends $protobuf.rpc.Service {

        /**
         * Constructs a new CurrencyPriceService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new CurrencyPriceService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CurrencyPriceService;

        /**
         * Calls GetLast.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and CurrencyPriceListResponse
         */
        public getLast(request: common.IEmpty, callback: currency_price.CurrencyPriceService.GetLastCallback): void;

        /**
         * Calls GetLast.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getLast(request: common.IEmpty): Promise<currency_price.CurrencyPriceListResponse>;

        /**
         * Calls GetByCurrency.
         * @param request CurrencyCode message or plain object
         * @param callback Node-style callback called with the error, if any, and CurrencyPriceListResponse
         */
        public getByCurrency(request: common.ICurrencyCode, callback: currency_price.CurrencyPriceService.GetByCurrencyCallback): void;

        /**
         * Calls GetByCurrency.
         * @param request CurrencyCode message or plain object
         * @returns Promise
         */
        public getByCurrency(request: common.ICurrencyCode): Promise<currency_price.CurrencyPriceListResponse>;
    }

    namespace CurrencyPriceService {

        /**
         * Callback as used by {@link currency_price.CurrencyPriceService#getLast}.
         * @param error Error, if any
         * @param [response] CurrencyPriceListResponse
         */
        type GetLastCallback = (error: (Error|null), response?: currency_price.CurrencyPriceListResponse) => void;

        /**
         * Callback as used by {@link currency_price.CurrencyPriceService#getByCurrency}.
         * @param error Error, if any
         * @param [response] CurrencyPriceListResponse
         */
        type GetByCurrencyCallback = (error: (Error|null), response?: currency_price.CurrencyPriceListResponse) => void;
    }

    /** Properties of a CurrencyPriceListResponse. */
    interface ICurrencyPriceListResponse {

        /** CurrencyPriceListResponse items */
        items?: (currency_price.ICurrencyPriceResponse[]|null);
    }

    /** Represents a CurrencyPriceListResponse. */
    class CurrencyPriceListResponse implements ICurrencyPriceListResponse {

        /**
         * Constructs a new CurrencyPriceListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: currency_price.ICurrencyPriceListResponse);

        /** CurrencyPriceListResponse items. */
        public items: currency_price.ICurrencyPriceResponse[];

        /**
         * Creates a new CurrencyPriceListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CurrencyPriceListResponse instance
         */
        public static create(properties?: currency_price.ICurrencyPriceListResponse): currency_price.CurrencyPriceListResponse;

        /**
         * Encodes the specified CurrencyPriceListResponse message. Does not implicitly {@link currency_price.CurrencyPriceListResponse.verify|verify} messages.
         * @param message CurrencyPriceListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: currency_price.ICurrencyPriceListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CurrencyPriceListResponse message, length delimited. Does not implicitly {@link currency_price.CurrencyPriceListResponse.verify|verify} messages.
         * @param message CurrencyPriceListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: currency_price.ICurrencyPriceListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CurrencyPriceListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CurrencyPriceListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): currency_price.CurrencyPriceListResponse;

        /**
         * Decodes a CurrencyPriceListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CurrencyPriceListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): currency_price.CurrencyPriceListResponse;

        /**
         * Verifies a CurrencyPriceListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CurrencyPriceListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CurrencyPriceListResponse
         */
        public static fromObject(object: { [k: string]: any }): currency_price.CurrencyPriceListResponse;

        /**
         * Creates a plain object from a CurrencyPriceListResponse message. Also converts values to other types if specified.
         * @param message CurrencyPriceListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: currency_price.CurrencyPriceListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CurrencyPriceListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CurrencyPriceResponse. */
    interface ICurrencyPriceResponse {

        /** CurrencyPriceResponse id */
        id?: (string|null);

        /** CurrencyPriceResponse currencyCode */
        currencyCode?: (string|null);

        /** CurrencyPriceResponse usd */
        usd?: (number|null);

        /** CurrencyPriceResponse jpy */
        jpy?: (number|Long|null);

        /** CurrencyPriceResponse datetime */
        datetime?: (string|null);
    }

    /** Represents a CurrencyPriceResponse. */
    class CurrencyPriceResponse implements ICurrencyPriceResponse {

        /**
         * Constructs a new CurrencyPriceResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: currency_price.ICurrencyPriceResponse);

        /** CurrencyPriceResponse id. */
        public id: string;

        /** CurrencyPriceResponse currencyCode. */
        public currencyCode: string;

        /** CurrencyPriceResponse usd. */
        public usd: number;

        /** CurrencyPriceResponse jpy. */
        public jpy: (number|Long);

        /** CurrencyPriceResponse datetime. */
        public datetime: string;

        /**
         * Creates a new CurrencyPriceResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CurrencyPriceResponse instance
         */
        public static create(properties?: currency_price.ICurrencyPriceResponse): currency_price.CurrencyPriceResponse;

        /**
         * Encodes the specified CurrencyPriceResponse message. Does not implicitly {@link currency_price.CurrencyPriceResponse.verify|verify} messages.
         * @param message CurrencyPriceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: currency_price.ICurrencyPriceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CurrencyPriceResponse message, length delimited. Does not implicitly {@link currency_price.CurrencyPriceResponse.verify|verify} messages.
         * @param message CurrencyPriceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: currency_price.ICurrencyPriceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CurrencyPriceResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CurrencyPriceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): currency_price.CurrencyPriceResponse;

        /**
         * Decodes a CurrencyPriceResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CurrencyPriceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): currency_price.CurrencyPriceResponse;

        /**
         * Verifies a CurrencyPriceResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CurrencyPriceResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CurrencyPriceResponse
         */
        public static fromObject(object: { [k: string]: any }): currency_price.CurrencyPriceResponse;

        /**
         * Creates a plain object from a CurrencyPriceResponse message. Also converts values to other types if specified.
         * @param message CurrencyPriceResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: currency_price.CurrencyPriceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CurrencyPriceResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace user. */
export namespace user {

    /** Represents a MeService */
    class MeService extends $protobuf.rpc.Service {

        /**
         * Constructs a new MeService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new MeService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): MeService;

        /**
         * Calls Get.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and UserResponse
         */
        public get(request: common.IEmpty, callback: user.MeService.GetCallback): void;

        /**
         * Calls Get.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public get(request: common.IEmpty): Promise<user.UserResponse>;

        /**
         * Calls Create.
         * @param request CreateUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and UserResponse
         */
        public create(request: user.ICreateUserRequest, callback: user.MeService.CreateCallback): void;

        /**
         * Calls Create.
         * @param request CreateUserRequest message or plain object
         * @returns Promise
         */
        public create(request: user.ICreateUserRequest): Promise<user.UserResponse>;

        /**
         * Calls Update.
         * @param request UpdateUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and UserResponse
         */
        public update(request: user.IUpdateUserRequest, callback: user.MeService.UpdateCallback): void;

        /**
         * Calls Update.
         * @param request UpdateUserRequest message or plain object
         * @returns Promise
         */
        public update(request: user.IUpdateUserRequest): Promise<user.UserResponse>;

        /**
         * Calls CreateUploadIconURL.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and UploadURL
         */
        public createUploadIconURL(request: common.IEmpty, callback: user.MeService.CreateUploadIconURLCallback): void;

        /**
         * Calls CreateUploadIconURL.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public createUploadIconURL(request: common.IEmpty): Promise<common.UploadURL>;

        /**
         * Calls GetAddresses.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and AddressListResponse
         */
        public getAddresses(request: common.IEmpty, callback: user.MeService.GetAddressesCallback): void;

        /**
         * Calls GetAddresses.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getAddresses(request: common.IEmpty): Promise<common.AddressListResponse>;

        /**
         * Calls Follow.
         * @param request UserID message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public follow(request: common.IUserID, callback: user.MeService.FollowCallback): void;

        /**
         * Calls Follow.
         * @param request UserID message or plain object
         * @returns Promise
         */
        public follow(request: common.IUserID): Promise<common.Empty>;

        /**
         * Calls UnFollow.
         * @param request UserID message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public unFollow(request: common.IUserID, callback: user.MeService.UnFollowCallback): void;

        /**
         * Calls UnFollow.
         * @param request UserID message or plain object
         * @returns Promise
         */
        public unFollow(request: common.IUserID): Promise<common.Empty>;

        /**
         * Calls GetFollows.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and UserListResponse
         */
        public getFollows(request: common.IEmpty, callback: user.MeService.GetFollowsCallback): void;

        /**
         * Calls GetFollows.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getFollows(request: common.IEmpty): Promise<user.UserListResponse>;

        /**
         * Calls GetFollowers.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and UserListResponse
         */
        public getFollowers(request: common.IEmpty, callback: user.MeService.GetFollowersCallback): void;

        /**
         * Calls GetFollowers.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getFollowers(request: common.IEmpty): Promise<user.UserListResponse>;

        /**
         * Calls GetAsset.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and AssetResponse
         */
        public getAsset(request: common.IEmpty, callback: user.MeService.GetAssetCallback): void;

        /**
         * Calls GetAsset.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getAsset(request: common.IEmpty): Promise<user.AssetResponse>;

        /**
         * Calls GetPortfolios.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and PortfolioListResponse
         */
        public getPortfolios(request: common.IEmpty, callback: user.MeService.GetPortfoliosCallback): void;

        /**
         * Calls GetPortfolios.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getPortfolios(request: common.IEmpty): Promise<user.PortfolioListResponse>;
    }

    namespace MeService {

        /**
         * Callback as used by {@link user.MeService#get}.
         * @param error Error, if any
         * @param [response] UserResponse
         */
        type GetCallback = (error: (Error|null), response?: user.UserResponse) => void;

        /**
         * Callback as used by {@link user.MeService#create}.
         * @param error Error, if any
         * @param [response] UserResponse
         */
        type CreateCallback = (error: (Error|null), response?: user.UserResponse) => void;

        /**
         * Callback as used by {@link user.MeService#update}.
         * @param error Error, if any
         * @param [response] UserResponse
         */
        type UpdateCallback = (error: (Error|null), response?: user.UserResponse) => void;

        /**
         * Callback as used by {@link user.MeService#createUploadIconURL}.
         * @param error Error, if any
         * @param [response] UploadURL
         */
        type CreateUploadIconURLCallback = (error: (Error|null), response?: common.UploadURL) => void;

        /**
         * Callback as used by {@link user.MeService#getAddresses}.
         * @param error Error, if any
         * @param [response] AddressListResponse
         */
        type GetAddressesCallback = (error: (Error|null), response?: common.AddressListResponse) => void;

        /**
         * Callback as used by {@link user.MeService#follow}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type FollowCallback = (error: (Error|null), response?: common.Empty) => void;

        /**
         * Callback as used by {@link user.MeService#unFollow}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type UnFollowCallback = (error: (Error|null), response?: common.Empty) => void;

        /**
         * Callback as used by {@link user.MeService#getFollows}.
         * @param error Error, if any
         * @param [response] UserListResponse
         */
        type GetFollowsCallback = (error: (Error|null), response?: user.UserListResponse) => void;

        /**
         * Callback as used by {@link user.MeService#getFollowers}.
         * @param error Error, if any
         * @param [response] UserListResponse
         */
        type GetFollowersCallback = (error: (Error|null), response?: user.UserListResponse) => void;

        /**
         * Callback as used by {@link user.MeService#getAsset}.
         * @param error Error, if any
         * @param [response] AssetResponse
         */
        type GetAssetCallback = (error: (Error|null), response?: user.AssetResponse) => void;

        /**
         * Callback as used by {@link user.MeService#getPortfolios}.
         * @param error Error, if any
         * @param [response] PortfolioListResponse
         */
        type GetPortfoliosCallback = (error: (Error|null), response?: user.PortfolioListResponse) => void;
    }

    /** Represents a UserService */
    class UserService extends $protobuf.rpc.Service {

        /**
         * Constructs a new UserService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new UserService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): UserService;
    }

    /** Properties of a CreateUserRequest. */
    interface ICreateUserRequest {

        /** CreateUserRequest username */
        username?: (string|null);
    }

    /** Represents a CreateUserRequest. */
    class CreateUserRequest implements ICreateUserRequest {

        /**
         * Constructs a new CreateUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ICreateUserRequest);

        /** CreateUserRequest username. */
        public username: string;

        /**
         * Creates a new CreateUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateUserRequest instance
         */
        public static create(properties?: user.ICreateUserRequest): user.CreateUserRequest;

        /**
         * Encodes the specified CreateUserRequest message. Does not implicitly {@link user.CreateUserRequest.verify|verify} messages.
         * @param message CreateUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link user.CreateUserRequest.verify|verify} messages.
         * @param message CreateUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.CreateUserRequest;

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.CreateUserRequest;

        /**
         * Verifies a CreateUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateUserRequest
         */
        public static fromObject(object: { [k: string]: any }): user.CreateUserRequest;

        /**
         * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
         * @param message CreateUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.CreateUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateUserRequest. */
    interface IUpdateUserRequest {

        /** UpdateUserRequest username */
        username?: (string|null);
    }

    /** Represents an UpdateUserRequest. */
    class UpdateUserRequest implements IUpdateUserRequest {

        /**
         * Constructs a new UpdateUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUpdateUserRequest);

        /** UpdateUserRequest username. */
        public username: string;

        /**
         * Creates a new UpdateUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateUserRequest instance
         */
        public static create(properties?: user.IUpdateUserRequest): user.UpdateUserRequest;

        /**
         * Encodes the specified UpdateUserRequest message. Does not implicitly {@link user.UpdateUserRequest.verify|verify} messages.
         * @param message UpdateUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUpdateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateUserRequest message, length delimited. Does not implicitly {@link user.UpdateUserRequest.verify|verify} messages.
         * @param message UpdateUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUpdateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.UpdateUserRequest;

        /**
         * Decodes an UpdateUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.UpdateUserRequest;

        /**
         * Verifies an UpdateUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateUserRequest
         */
        public static fromObject(object: { [k: string]: any }): user.UpdateUserRequest;

        /**
         * Creates a plain object from an UpdateUserRequest message. Also converts values to other types if specified.
         * @param message UpdateUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UpdateUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserListResponse. */
    interface IUserListResponse {

        /** UserListResponse items */
        items?: (user.IUserResponse[]|null);
    }

    /** Represents a UserListResponse. */
    class UserListResponse implements IUserListResponse {

        /**
         * Constructs a new UserListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUserListResponse);

        /** UserListResponse items. */
        public items: user.IUserResponse[];

        /**
         * Creates a new UserListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserListResponse instance
         */
        public static create(properties?: user.IUserListResponse): user.UserListResponse;

        /**
         * Encodes the specified UserListResponse message. Does not implicitly {@link user.UserListResponse.verify|verify} messages.
         * @param message UserListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUserListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserListResponse message, length delimited. Does not implicitly {@link user.UserListResponse.verify|verify} messages.
         * @param message UserListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUserListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.UserListResponse;

        /**
         * Decodes a UserListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.UserListResponse;

        /**
         * Verifies a UserListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserListResponse
         */
        public static fromObject(object: { [k: string]: any }): user.UserListResponse;

        /**
         * Creates a plain object from a UserListResponse message. Also converts values to other types if specified.
         * @param message UserListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UserListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserResponse. */
    interface IUserResponse {

        /** UserResponse id */
        id?: (string|null);

        /** UserResponse username */
        username?: (string|null);

        /** UserResponse iconURL */
        iconURL?: (string|null);
    }

    /** Represents a UserResponse. */
    class UserResponse implements IUserResponse {

        /**
         * Constructs a new UserResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUserResponse);

        /** UserResponse id. */
        public id: string;

        /** UserResponse username. */
        public username: string;

        /** UserResponse iconURL. */
        public iconURL: string;

        /**
         * Creates a new UserResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserResponse instance
         */
        public static create(properties?: user.IUserResponse): user.UserResponse;

        /**
         * Encodes the specified UserResponse message. Does not implicitly {@link user.UserResponse.verify|verify} messages.
         * @param message UserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserResponse message, length delimited. Does not implicitly {@link user.UserResponse.verify|verify} messages.
         * @param message UserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.UserResponse;

        /**
         * Decodes a UserResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.UserResponse;

        /**
         * Verifies a UserResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserResponse
         */
        public static fromObject(object: { [k: string]: any }): user.UserResponse;

        /**
         * Creates a plain object from a UserResponse message. Also converts values to other types if specified.
         * @param message UserResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AssetResponse. */
    interface IAssetResponse {

        /** AssetResponse amount */
        amount?: (number|null);
    }

    /** Represents an AssetResponse. */
    class AssetResponse implements IAssetResponse {

        /**
         * Constructs a new AssetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IAssetResponse);

        /** AssetResponse amount. */
        public amount: number;

        /**
         * Creates a new AssetResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AssetResponse instance
         */
        public static create(properties?: user.IAssetResponse): user.AssetResponse;

        /**
         * Encodes the specified AssetResponse message. Does not implicitly {@link user.AssetResponse.verify|verify} messages.
         * @param message AssetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IAssetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AssetResponse message, length delimited. Does not implicitly {@link user.AssetResponse.verify|verify} messages.
         * @param message AssetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IAssetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AssetResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AssetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.AssetResponse;

        /**
         * Decodes an AssetResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AssetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.AssetResponse;

        /**
         * Verifies an AssetResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AssetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AssetResponse
         */
        public static fromObject(object: { [k: string]: any }): user.AssetResponse;

        /**
         * Creates a plain object from an AssetResponse message. Also converts values to other types if specified.
         * @param message AssetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.AssetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AssetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PortfolioResponse. */
    interface IPortfolioResponse {

        /** PortfolioResponse currencyCode */
        currencyCode?: (string|null);

        /** PortfolioResponse amount */
        amount?: (number|null);

        /** PortfolioResponse jpyAsset */
        jpyAsset?: (number|null);
    }

    /** Represents a PortfolioResponse. */
    class PortfolioResponse implements IPortfolioResponse {

        /**
         * Constructs a new PortfolioResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IPortfolioResponse);

        /** PortfolioResponse currencyCode. */
        public currencyCode: string;

        /** PortfolioResponse amount. */
        public amount: number;

        /** PortfolioResponse jpyAsset. */
        public jpyAsset: number;

        /**
         * Creates a new PortfolioResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PortfolioResponse instance
         */
        public static create(properties?: user.IPortfolioResponse): user.PortfolioResponse;

        /**
         * Encodes the specified PortfolioResponse message. Does not implicitly {@link user.PortfolioResponse.verify|verify} messages.
         * @param message PortfolioResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IPortfolioResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PortfolioResponse message, length delimited. Does not implicitly {@link user.PortfolioResponse.verify|verify} messages.
         * @param message PortfolioResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IPortfolioResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PortfolioResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PortfolioResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.PortfolioResponse;

        /**
         * Decodes a PortfolioResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PortfolioResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.PortfolioResponse;

        /**
         * Verifies a PortfolioResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PortfolioResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PortfolioResponse
         */
        public static fromObject(object: { [k: string]: any }): user.PortfolioResponse;

        /**
         * Creates a plain object from a PortfolioResponse message. Also converts values to other types if specified.
         * @param message PortfolioResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.PortfolioResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PortfolioResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PortfolioListResponse. */
    interface IPortfolioListResponse {

        /** PortfolioListResponse items */
        items?: (user.IPortfolioResponse[]|null);
    }

    /** Represents a PortfolioListResponse. */
    class PortfolioListResponse implements IPortfolioListResponse {

        /**
         * Constructs a new PortfolioListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IPortfolioListResponse);

        /** PortfolioListResponse items. */
        public items: user.IPortfolioResponse[];

        /**
         * Creates a new PortfolioListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PortfolioListResponse instance
         */
        public static create(properties?: user.IPortfolioListResponse): user.PortfolioListResponse;

        /**
         * Encodes the specified PortfolioListResponse message. Does not implicitly {@link user.PortfolioListResponse.verify|verify} messages.
         * @param message PortfolioListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IPortfolioListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PortfolioListResponse message, length delimited. Does not implicitly {@link user.PortfolioListResponse.verify|verify} messages.
         * @param message PortfolioListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IPortfolioListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PortfolioListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PortfolioListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.PortfolioListResponse;

        /**
         * Decodes a PortfolioListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PortfolioListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.PortfolioListResponse;

        /**
         * Verifies a PortfolioListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PortfolioListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PortfolioListResponse
         */
        public static fromObject(object: { [k: string]: any }): user.PortfolioListResponse;

        /**
         * Creates a plain object from a PortfolioListResponse message. Also converts values to other types if specified.
         * @param message PortfolioListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.PortfolioListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PortfolioListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
