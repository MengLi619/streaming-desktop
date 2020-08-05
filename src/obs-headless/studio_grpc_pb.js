/* eslint-disable */
// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var studio_pb = require('./studio_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_HealthResponse(arg) {
  if (!(arg instanceof studio_pb.HealthResponse)) {
    throw new Error('Expected argument of type proto.HealthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_HealthResponse(buffer_arg) {
  return studio_pb.HealthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SceneAddRequest(arg) {
  if (!(arg instanceof studio_pb.SceneAddRequest)) {
    throw new Error('Expected argument of type proto.SceneAddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SceneAddRequest(buffer_arg) {
  return studio_pb.SceneAddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SceneAddResponse(arg) {
  if (!(arg instanceof studio_pb.SceneAddResponse)) {
    throw new Error('Expected argument of type proto.SceneAddResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SceneAddResponse(buffer_arg) {
  return studio_pb.SceneAddResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SceneDuplicateRequest(arg) {
  if (!(arg instanceof studio_pb.SceneDuplicateRequest)) {
    throw new Error('Expected argument of type proto.SceneDuplicateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SceneDuplicateRequest(buffer_arg) {
  return studio_pb.SceneDuplicateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SceneDuplicateResponse(arg) {
  if (!(arg instanceof studio_pb.SceneDuplicateResponse)) {
    throw new Error('Expected argument of type proto.SceneDuplicateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SceneDuplicateResponse(buffer_arg) {
  return studio_pb.SceneDuplicateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SceneGetCurrentRequest(arg) {
  if (!(arg instanceof studio_pb.SceneGetCurrentRequest)) {
    throw new Error('Expected argument of type proto.SceneGetCurrentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SceneGetCurrentRequest(buffer_arg) {
  return studio_pb.SceneGetCurrentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SceneGetCurrentResponse(arg) {
  if (!(arg instanceof studio_pb.SceneGetCurrentResponse)) {
    throw new Error('Expected argument of type proto.SceneGetCurrentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SceneGetCurrentResponse(buffer_arg) {
  return studio_pb.SceneGetCurrentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SceneGetRequest(arg) {
  if (!(arg instanceof studio_pb.SceneGetRequest)) {
    throw new Error('Expected argument of type proto.SceneGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SceneGetRequest(buffer_arg) {
  return studio_pb.SceneGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SceneGetResponse(arg) {
  if (!(arg instanceof studio_pb.SceneGetResponse)) {
    throw new Error('Expected argument of type proto.SceneGetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SceneGetResponse(buffer_arg) {
  return studio_pb.SceneGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SceneRemoveRequest(arg) {
  if (!(arg instanceof studio_pb.SceneRemoveRequest)) {
    throw new Error('Expected argument of type proto.SceneRemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SceneRemoveRequest(buffer_arg) {
  return studio_pb.SceneRemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SceneSetAsCurrentRequest(arg) {
  if (!(arg instanceof studio_pb.SceneSetAsCurrentRequest)) {
    throw new Error('Expected argument of type proto.SceneSetAsCurrentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SceneSetAsCurrentRequest(buffer_arg) {
  return studio_pb.SceneSetAsCurrentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SceneSetAsCurrentResponse(arg) {
  if (!(arg instanceof studio_pb.SceneSetAsCurrentResponse)) {
    throw new Error('Expected argument of type proto.SceneSetAsCurrentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SceneSetAsCurrentResponse(buffer_arg) {
  return studio_pb.SceneSetAsCurrentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ShowCreateRequest(arg) {
  if (!(arg instanceof studio_pb.ShowCreateRequest)) {
    throw new Error('Expected argument of type proto.ShowCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ShowCreateRequest(buffer_arg) {
  return studio_pb.ShowCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ShowCreateResponse(arg) {
  if (!(arg instanceof studio_pb.ShowCreateResponse)) {
    throw new Error('Expected argument of type proto.ShowCreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ShowCreateResponse(buffer_arg) {
  return studio_pb.ShowCreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ShowDuplicateRequest(arg) {
  if (!(arg instanceof studio_pb.ShowDuplicateRequest)) {
    throw new Error('Expected argument of type proto.ShowDuplicateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ShowDuplicateRequest(buffer_arg) {
  return studio_pb.ShowDuplicateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ShowDuplicateResponse(arg) {
  if (!(arg instanceof studio_pb.ShowDuplicateResponse)) {
    throw new Error('Expected argument of type proto.ShowDuplicateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ShowDuplicateResponse(buffer_arg) {
  return studio_pb.ShowDuplicateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ShowGetRequest(arg) {
  if (!(arg instanceof studio_pb.ShowGetRequest)) {
    throw new Error('Expected argument of type proto.ShowGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ShowGetRequest(buffer_arg) {
  return studio_pb.ShowGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ShowGetResponse(arg) {
  if (!(arg instanceof studio_pb.ShowGetResponse)) {
    throw new Error('Expected argument of type proto.ShowGetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ShowGetResponse(buffer_arg) {
  return studio_pb.ShowGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ShowLoadRequest(arg) {
  if (!(arg instanceof studio_pb.ShowLoadRequest)) {
    throw new Error('Expected argument of type proto.ShowLoadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ShowLoadRequest(buffer_arg) {
  return studio_pb.ShowLoadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ShowLoadResponse(arg) {
  if (!(arg instanceof studio_pb.ShowLoadResponse)) {
    throw new Error('Expected argument of type proto.ShowLoadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ShowLoadResponse(buffer_arg) {
  return studio_pb.ShowLoadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ShowRemoveRequest(arg) {
  if (!(arg instanceof studio_pb.ShowRemoveRequest)) {
    throw new Error('Expected argument of type proto.ShowRemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ShowRemoveRequest(buffer_arg) {
  return studio_pb.ShowRemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SourceAddRequest(arg) {
  if (!(arg instanceof studio_pb.SourceAddRequest)) {
    throw new Error('Expected argument of type proto.SourceAddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SourceAddRequest(buffer_arg) {
  return studio_pb.SourceAddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SourceAddResponse(arg) {
  if (!(arg instanceof studio_pb.SourceAddResponse)) {
    throw new Error('Expected argument of type proto.SourceAddResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SourceAddResponse(buffer_arg) {
  return studio_pb.SourceAddResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SourceDuplicateRequest(arg) {
  if (!(arg instanceof studio_pb.SourceDuplicateRequest)) {
    throw new Error('Expected argument of type proto.SourceDuplicateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SourceDuplicateRequest(buffer_arg) {
  return studio_pb.SourceDuplicateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SourceDuplicateResponse(arg) {
  if (!(arg instanceof studio_pb.SourceDuplicateResponse)) {
    throw new Error('Expected argument of type proto.SourceDuplicateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SourceDuplicateResponse(buffer_arg) {
  return studio_pb.SourceDuplicateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SourceGetRequest(arg) {
  if (!(arg instanceof studio_pb.SourceGetRequest)) {
    throw new Error('Expected argument of type proto.SourceGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SourceGetRequest(buffer_arg) {
  return studio_pb.SourceGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SourceGetResponse(arg) {
  if (!(arg instanceof studio_pb.SourceGetResponse)) {
    throw new Error('Expected argument of type proto.SourceGetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SourceGetResponse(buffer_arg) {
  return studio_pb.SourceGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SourceRemoveRequest(arg) {
  if (!(arg instanceof studio_pb.SourceRemoveRequest)) {
    throw new Error('Expected argument of type proto.SourceRemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SourceRemoveRequest(buffer_arg) {
  return studio_pb.SourceRemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SourceSetPropertiesRequest(arg) {
  if (!(arg instanceof studio_pb.SourceSetPropertiesRequest)) {
    throw new Error('Expected argument of type proto.SourceSetPropertiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SourceSetPropertiesRequest(buffer_arg) {
  return studio_pb.SourceSetPropertiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SourceSetPropertiesResponse(arg) {
  if (!(arg instanceof studio_pb.SourceSetPropertiesResponse)) {
    throw new Error('Expected argument of type proto.SourceSetPropertiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SourceSetPropertiesResponse(buffer_arg) {
  return studio_pb.SourceSetPropertiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_StudioGetResponse(arg) {
  if (!(arg instanceof studio_pb.StudioGetResponse)) {
    throw new Error('Expected argument of type proto.StudioGetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_StudioGetResponse(buffer_arg) {
  return studio_pb.StudioGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ////////////
// SERVICES //
// ////////////
//
// Studio contains all the available studio procedures
var StudioService = exports.StudioService = {
  // Studio
studioGet: {
    path: '/proto.Studio/StudioGet',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: studio_pb.StudioGetResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_proto_StudioGetResponse,
    responseDeserialize: deserialize_proto_StudioGetResponse,
  },
  studioStart: {
    path: '/proto.Studio/StudioStart',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  studioStop: {
    path: '/proto.Studio/StudioStop',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Show
showGet: {
    path: '/proto.Studio/ShowGet',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.ShowGetRequest,
    responseType: studio_pb.ShowGetResponse,
    requestSerialize: serialize_proto_ShowGetRequest,
    requestDeserialize: deserialize_proto_ShowGetRequest,
    responseSerialize: serialize_proto_ShowGetResponse,
    responseDeserialize: deserialize_proto_ShowGetResponse,
  },
  showCreate: {
    path: '/proto.Studio/ShowCreate',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.ShowCreateRequest,
    responseType: studio_pb.ShowCreateResponse,
    requestSerialize: serialize_proto_ShowCreateRequest,
    requestDeserialize: deserialize_proto_ShowCreateRequest,
    responseSerialize: serialize_proto_ShowCreateResponse,
    responseDeserialize: deserialize_proto_ShowCreateResponse,
  },
  showDuplicate: {
    path: '/proto.Studio/ShowDuplicate',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.ShowDuplicateRequest,
    responseType: studio_pb.ShowDuplicateResponse,
    requestSerialize: serialize_proto_ShowDuplicateRequest,
    requestDeserialize: deserialize_proto_ShowDuplicateRequest,
    responseSerialize: serialize_proto_ShowDuplicateResponse,
    responseDeserialize: deserialize_proto_ShowDuplicateResponse,
  },
  showRemove: {
    path: '/proto.Studio/ShowRemove',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.ShowRemoveRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_proto_ShowRemoveRequest,
    requestDeserialize: deserialize_proto_ShowRemoveRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  showLoad: {
    path: '/proto.Studio/ShowLoad',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.ShowLoadRequest,
    responseType: studio_pb.ShowLoadResponse,
    requestSerialize: serialize_proto_ShowLoadRequest,
    requestDeserialize: deserialize_proto_ShowLoadRequest,
    responseSerialize: serialize_proto_ShowLoadResponse,
    responseDeserialize: deserialize_proto_ShowLoadResponse,
  },
  // Scene
sceneGet: {
    path: '/proto.Studio/SceneGet',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.SceneGetRequest,
    responseType: studio_pb.SceneGetResponse,
    requestSerialize: serialize_proto_SceneGetRequest,
    requestDeserialize: deserialize_proto_SceneGetRequest,
    responseSerialize: serialize_proto_SceneGetResponse,
    responseDeserialize: deserialize_proto_SceneGetResponse,
  },
  sceneAdd: {
    path: '/proto.Studio/SceneAdd',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.SceneAddRequest,
    responseType: studio_pb.SceneAddResponse,
    requestSerialize: serialize_proto_SceneAddRequest,
    requestDeserialize: deserialize_proto_SceneAddRequest,
    responseSerialize: serialize_proto_SceneAddResponse,
    responseDeserialize: deserialize_proto_SceneAddResponse,
  },
  sceneDuplicate: {
    path: '/proto.Studio/SceneDuplicate',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.SceneDuplicateRequest,
    responseType: studio_pb.SceneDuplicateResponse,
    requestSerialize: serialize_proto_SceneDuplicateRequest,
    requestDeserialize: deserialize_proto_SceneDuplicateRequest,
    responseSerialize: serialize_proto_SceneDuplicateResponse,
    responseDeserialize: deserialize_proto_SceneDuplicateResponse,
  },
  sceneRemove: {
    path: '/proto.Studio/SceneRemove',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.SceneRemoveRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_proto_SceneRemoveRequest,
    requestDeserialize: deserialize_proto_SceneRemoveRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  sceneSetAsCurrent: {
    path: '/proto.Studio/SceneSetAsCurrent',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.SceneSetAsCurrentRequest,
    responseType: studio_pb.SceneSetAsCurrentResponse,
    requestSerialize: serialize_proto_SceneSetAsCurrentRequest,
    requestDeserialize: deserialize_proto_SceneSetAsCurrentRequest,
    responseSerialize: serialize_proto_SceneSetAsCurrentResponse,
    responseDeserialize: deserialize_proto_SceneSetAsCurrentResponse,
  },
  sceneGetCurrent: {
    path: '/proto.Studio/SceneGetCurrent',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.SceneGetCurrentRequest,
    responseType: studio_pb.SceneGetCurrentResponse,
    requestSerialize: serialize_proto_SceneGetCurrentRequest,
    requestDeserialize: deserialize_proto_SceneGetCurrentRequest,
    responseSerialize: serialize_proto_SceneGetCurrentResponse,
    responseDeserialize: deserialize_proto_SceneGetCurrentResponse,
  },
  // Source
sourceGet: {
    path: '/proto.Studio/SourceGet',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.SourceGetRequest,
    responseType: studio_pb.SourceGetResponse,
    requestSerialize: serialize_proto_SourceGetRequest,
    requestDeserialize: deserialize_proto_SourceGetRequest,
    responseSerialize: serialize_proto_SourceGetResponse,
    responseDeserialize: deserialize_proto_SourceGetResponse,
  },
  sourceAdd: {
    path: '/proto.Studio/SourceAdd',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.SourceAddRequest,
    responseType: studio_pb.SourceAddResponse,
    requestSerialize: serialize_proto_SourceAddRequest,
    requestDeserialize: deserialize_proto_SourceAddRequest,
    responseSerialize: serialize_proto_SourceAddResponse,
    responseDeserialize: deserialize_proto_SourceAddResponse,
  },
  sourceDuplicate: {
    path: '/proto.Studio/SourceDuplicate',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.SourceDuplicateRequest,
    responseType: studio_pb.SourceDuplicateResponse,
    requestSerialize: serialize_proto_SourceDuplicateRequest,
    requestDeserialize: deserialize_proto_SourceDuplicateRequest,
    responseSerialize: serialize_proto_SourceDuplicateResponse,
    responseDeserialize: deserialize_proto_SourceDuplicateResponse,
  },
  sourceRemove: {
    path: '/proto.Studio/SourceRemove',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.SourceRemoveRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_proto_SourceRemoveRequest,
    requestDeserialize: deserialize_proto_SourceRemoveRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  sourceSetProperties: {
    path: '/proto.Studio/SourceSetProperties',
    requestStream: false,
    responseStream: false,
    requestType: studio_pb.SourceSetPropertiesRequest,
    responseType: studio_pb.SourceSetPropertiesResponse,
    requestSerialize: serialize_proto_SourceSetPropertiesRequest,
    requestDeserialize: deserialize_proto_SourceSetPropertiesRequest,
    responseSerialize: serialize_proto_SourceSetPropertiesResponse,
    responseDeserialize: deserialize_proto_SourceSetPropertiesResponse,
  },
  health: {
    path: '/proto.Studio/Health',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: studio_pb.HealthResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_proto_HealthResponse,
    responseDeserialize: deserialize_proto_HealthResponse,
  },
};

exports.StudioClient = grpc.makeGenericClientConstructor(StudioService);
