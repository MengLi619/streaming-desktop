// package: proto
// file: studio.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as studio_pb from "./studio_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IStudioService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    studioGet: IStudioService_IStudioGet;
    studioStart: IStudioService_IStudioStart;
    studioStop: IStudioService_IStudioStop;
    showGet: IStudioService_IShowGet;
    showCreate: IStudioService_IShowCreate;
    showDuplicate: IStudioService_IShowDuplicate;
    showRemove: IStudioService_IShowRemove;
    showLoad: IStudioService_IShowLoad;
    sceneGet: IStudioService_ISceneGet;
    sceneAdd: IStudioService_ISceneAdd;
    sceneDuplicate: IStudioService_ISceneDuplicate;
    sceneRemove: IStudioService_ISceneRemove;
    sceneSetAsCurrent: IStudioService_ISceneSetAsCurrent;
    sceneGetCurrent: IStudioService_ISceneGetCurrent;
    sourceGet: IStudioService_ISourceGet;
    sourceAdd: IStudioService_ISourceAdd;
    sourceDuplicate: IStudioService_ISourceDuplicate;
    sourceRemove: IStudioService_ISourceRemove;
    sourceSetProperties: IStudioService_ISourceSetProperties;
    health: IStudioService_IHealth;
}

interface IStudioService_IStudioGet extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, studio_pb.StudioGetResponse> {
    path: string; // "/proto.Studio/StudioGet"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<studio_pb.StudioGetResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.StudioGetResponse>;
}
interface IStudioService_IStudioStart extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: string; // "/proto.Studio/StudioStart"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IStudioService_IStudioStop extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: string; // "/proto.Studio/StudioStop"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IStudioService_IShowGet extends grpc.MethodDefinition<studio_pb.ShowGetRequest, studio_pb.ShowGetResponse> {
    path: string; // "/proto.Studio/ShowGet"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.ShowGetRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.ShowGetRequest>;
    responseSerialize: grpc.serialize<studio_pb.ShowGetResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.ShowGetResponse>;
}
interface IStudioService_IShowCreate extends grpc.MethodDefinition<studio_pb.ShowCreateRequest, studio_pb.ShowCreateResponse> {
    path: string; // "/proto.Studio/ShowCreate"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.ShowCreateRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.ShowCreateRequest>;
    responseSerialize: grpc.serialize<studio_pb.ShowCreateResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.ShowCreateResponse>;
}
interface IStudioService_IShowDuplicate extends grpc.MethodDefinition<studio_pb.ShowDuplicateRequest, studio_pb.ShowDuplicateResponse> {
    path: string; // "/proto.Studio/ShowDuplicate"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.ShowDuplicateRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.ShowDuplicateRequest>;
    responseSerialize: grpc.serialize<studio_pb.ShowDuplicateResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.ShowDuplicateResponse>;
}
interface IStudioService_IShowRemove extends grpc.MethodDefinition<studio_pb.ShowRemoveRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/proto.Studio/ShowRemove"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.ShowRemoveRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.ShowRemoveRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IStudioService_IShowLoad extends grpc.MethodDefinition<studio_pb.ShowLoadRequest, studio_pb.ShowLoadResponse> {
    path: string; // "/proto.Studio/ShowLoad"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.ShowLoadRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.ShowLoadRequest>;
    responseSerialize: grpc.serialize<studio_pb.ShowLoadResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.ShowLoadResponse>;
}
interface IStudioService_ISceneGet extends grpc.MethodDefinition<studio_pb.SceneGetRequest, studio_pb.SceneGetResponse> {
    path: string; // "/proto.Studio/SceneGet"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.SceneGetRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.SceneGetRequest>;
    responseSerialize: grpc.serialize<studio_pb.SceneGetResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.SceneGetResponse>;
}
interface IStudioService_ISceneAdd extends grpc.MethodDefinition<studio_pb.SceneAddRequest, studio_pb.SceneAddResponse> {
    path: string; // "/proto.Studio/SceneAdd"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.SceneAddRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.SceneAddRequest>;
    responseSerialize: grpc.serialize<studio_pb.SceneAddResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.SceneAddResponse>;
}
interface IStudioService_ISceneDuplicate extends grpc.MethodDefinition<studio_pb.SceneDuplicateRequest, studio_pb.SceneDuplicateResponse> {
    path: string; // "/proto.Studio/SceneDuplicate"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.SceneDuplicateRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.SceneDuplicateRequest>;
    responseSerialize: grpc.serialize<studio_pb.SceneDuplicateResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.SceneDuplicateResponse>;
}
interface IStudioService_ISceneRemove extends grpc.MethodDefinition<studio_pb.SceneRemoveRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/proto.Studio/SceneRemove"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.SceneRemoveRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.SceneRemoveRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IStudioService_ISceneSetAsCurrent extends grpc.MethodDefinition<studio_pb.SceneSetAsCurrentRequest, studio_pb.SceneSetAsCurrentResponse> {
    path: string; // "/proto.Studio/SceneSetAsCurrent"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.SceneSetAsCurrentRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.SceneSetAsCurrentRequest>;
    responseSerialize: grpc.serialize<studio_pb.SceneSetAsCurrentResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.SceneSetAsCurrentResponse>;
}
interface IStudioService_ISceneGetCurrent extends grpc.MethodDefinition<studio_pb.SceneGetCurrentRequest, studio_pb.SceneGetCurrentResponse> {
    path: string; // "/proto.Studio/SceneGetCurrent"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.SceneGetCurrentRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.SceneGetCurrentRequest>;
    responseSerialize: grpc.serialize<studio_pb.SceneGetCurrentResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.SceneGetCurrentResponse>;
}
interface IStudioService_ISourceGet extends grpc.MethodDefinition<studio_pb.SourceGetRequest, studio_pb.SourceGetResponse> {
    path: string; // "/proto.Studio/SourceGet"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.SourceGetRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.SourceGetRequest>;
    responseSerialize: grpc.serialize<studio_pb.SourceGetResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.SourceGetResponse>;
}
interface IStudioService_ISourceAdd extends grpc.MethodDefinition<studio_pb.SourceAddRequest, studio_pb.SourceAddResponse> {
    path: string; // "/proto.Studio/SourceAdd"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.SourceAddRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.SourceAddRequest>;
    responseSerialize: grpc.serialize<studio_pb.SourceAddResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.SourceAddResponse>;
}
interface IStudioService_ISourceDuplicate extends grpc.MethodDefinition<studio_pb.SourceDuplicateRequest, studio_pb.SourceDuplicateResponse> {
    path: string; // "/proto.Studio/SourceDuplicate"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.SourceDuplicateRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.SourceDuplicateRequest>;
    responseSerialize: grpc.serialize<studio_pb.SourceDuplicateResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.SourceDuplicateResponse>;
}
interface IStudioService_ISourceRemove extends grpc.MethodDefinition<studio_pb.SourceRemoveRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/proto.Studio/SourceRemove"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.SourceRemoveRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.SourceRemoveRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IStudioService_ISourceSetProperties extends grpc.MethodDefinition<studio_pb.SourceSetPropertiesRequest, studio_pb.SourceSetPropertiesResponse> {
    path: string; // "/proto.Studio/SourceSetProperties"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<studio_pb.SourceSetPropertiesRequest>;
    requestDeserialize: grpc.deserialize<studio_pb.SourceSetPropertiesRequest>;
    responseSerialize: grpc.serialize<studio_pb.SourceSetPropertiesResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.SourceSetPropertiesResponse>;
}
interface IStudioService_IHealth extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, studio_pb.HealthResponse> {
    path: string; // "/proto.Studio/Health"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<studio_pb.HealthResponse>;
    responseDeserialize: grpc.deserialize<studio_pb.HealthResponse>;
}

export const StudioService: IStudioService;

export interface IStudioServer {
    studioGet: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, studio_pb.StudioGetResponse>;
    studioStart: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    studioStop: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    showGet: grpc.handleUnaryCall<studio_pb.ShowGetRequest, studio_pb.ShowGetResponse>;
    showCreate: grpc.handleUnaryCall<studio_pb.ShowCreateRequest, studio_pb.ShowCreateResponse>;
    showDuplicate: grpc.handleUnaryCall<studio_pb.ShowDuplicateRequest, studio_pb.ShowDuplicateResponse>;
    showRemove: grpc.handleUnaryCall<studio_pb.ShowRemoveRequest, google_protobuf_empty_pb.Empty>;
    showLoad: grpc.handleUnaryCall<studio_pb.ShowLoadRequest, studio_pb.ShowLoadResponse>;
    sceneGet: grpc.handleUnaryCall<studio_pb.SceneGetRequest, studio_pb.SceneGetResponse>;
    sceneAdd: grpc.handleUnaryCall<studio_pb.SceneAddRequest, studio_pb.SceneAddResponse>;
    sceneDuplicate: grpc.handleUnaryCall<studio_pb.SceneDuplicateRequest, studio_pb.SceneDuplicateResponse>;
    sceneRemove: grpc.handleUnaryCall<studio_pb.SceneRemoveRequest, google_protobuf_empty_pb.Empty>;
    sceneSetAsCurrent: grpc.handleUnaryCall<studio_pb.SceneSetAsCurrentRequest, studio_pb.SceneSetAsCurrentResponse>;
    sceneGetCurrent: grpc.handleUnaryCall<studio_pb.SceneGetCurrentRequest, studio_pb.SceneGetCurrentResponse>;
    sourceGet: grpc.handleUnaryCall<studio_pb.SourceGetRequest, studio_pb.SourceGetResponse>;
    sourceAdd: grpc.handleUnaryCall<studio_pb.SourceAddRequest, studio_pb.SourceAddResponse>;
    sourceDuplicate: grpc.handleUnaryCall<studio_pb.SourceDuplicateRequest, studio_pb.SourceDuplicateResponse>;
    sourceRemove: grpc.handleUnaryCall<studio_pb.SourceRemoveRequest, google_protobuf_empty_pb.Empty>;
    sourceSetProperties: grpc.handleUnaryCall<studio_pb.SourceSetPropertiesRequest, studio_pb.SourceSetPropertiesResponse>;
    health: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, studio_pb.HealthResponse>;
}

export interface IStudioClient {
    studioGet(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: studio_pb.StudioGetResponse) => void): grpc.ClientUnaryCall;
    studioGet(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.StudioGetResponse) => void): grpc.ClientUnaryCall;
    studioGet(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.StudioGetResponse) => void): grpc.ClientUnaryCall;
    studioStart(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    studioStart(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    studioStart(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    studioStop(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    studioStop(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    studioStop(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    showGet(request: studio_pb.ShowGetRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowGetResponse) => void): grpc.ClientUnaryCall;
    showGet(request: studio_pb.ShowGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowGetResponse) => void): grpc.ClientUnaryCall;
    showGet(request: studio_pb.ShowGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowGetResponse) => void): grpc.ClientUnaryCall;
    showCreate(request: studio_pb.ShowCreateRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowCreateResponse) => void): grpc.ClientUnaryCall;
    showCreate(request: studio_pb.ShowCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowCreateResponse) => void): grpc.ClientUnaryCall;
    showCreate(request: studio_pb.ShowCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowCreateResponse) => void): grpc.ClientUnaryCall;
    showDuplicate(request: studio_pb.ShowDuplicateRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowDuplicateResponse) => void): grpc.ClientUnaryCall;
    showDuplicate(request: studio_pb.ShowDuplicateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowDuplicateResponse) => void): grpc.ClientUnaryCall;
    showDuplicate(request: studio_pb.ShowDuplicateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowDuplicateResponse) => void): grpc.ClientUnaryCall;
    showRemove(request: studio_pb.ShowRemoveRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    showRemove(request: studio_pb.ShowRemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    showRemove(request: studio_pb.ShowRemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    showLoad(request: studio_pb.ShowLoadRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowLoadResponse) => void): grpc.ClientUnaryCall;
    showLoad(request: studio_pb.ShowLoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowLoadResponse) => void): grpc.ClientUnaryCall;
    showLoad(request: studio_pb.ShowLoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowLoadResponse) => void): grpc.ClientUnaryCall;
    sceneGet(request: studio_pb.SceneGetRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneGetResponse) => void): grpc.ClientUnaryCall;
    sceneGet(request: studio_pb.SceneGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneGetResponse) => void): grpc.ClientUnaryCall;
    sceneGet(request: studio_pb.SceneGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneGetResponse) => void): grpc.ClientUnaryCall;
    sceneAdd(request: studio_pb.SceneAddRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneAddResponse) => void): grpc.ClientUnaryCall;
    sceneAdd(request: studio_pb.SceneAddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneAddResponse) => void): grpc.ClientUnaryCall;
    sceneAdd(request: studio_pb.SceneAddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneAddResponse) => void): grpc.ClientUnaryCall;
    sceneDuplicate(request: studio_pb.SceneDuplicateRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneDuplicateResponse) => void): grpc.ClientUnaryCall;
    sceneDuplicate(request: studio_pb.SceneDuplicateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneDuplicateResponse) => void): grpc.ClientUnaryCall;
    sceneDuplicate(request: studio_pb.SceneDuplicateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneDuplicateResponse) => void): grpc.ClientUnaryCall;
    sceneRemove(request: studio_pb.SceneRemoveRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sceneRemove(request: studio_pb.SceneRemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sceneRemove(request: studio_pb.SceneRemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sceneSetAsCurrent(request: studio_pb.SceneSetAsCurrentRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneSetAsCurrentResponse) => void): grpc.ClientUnaryCall;
    sceneSetAsCurrent(request: studio_pb.SceneSetAsCurrentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneSetAsCurrentResponse) => void): grpc.ClientUnaryCall;
    sceneSetAsCurrent(request: studio_pb.SceneSetAsCurrentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneSetAsCurrentResponse) => void): grpc.ClientUnaryCall;
    sceneGetCurrent(request: studio_pb.SceneGetCurrentRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneGetCurrentResponse) => void): grpc.ClientUnaryCall;
    sceneGetCurrent(request: studio_pb.SceneGetCurrentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneGetCurrentResponse) => void): grpc.ClientUnaryCall;
    sceneGetCurrent(request: studio_pb.SceneGetCurrentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneGetCurrentResponse) => void): grpc.ClientUnaryCall;
    sourceGet(request: studio_pb.SourceGetRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceGetResponse) => void): grpc.ClientUnaryCall;
    sourceGet(request: studio_pb.SourceGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceGetResponse) => void): grpc.ClientUnaryCall;
    sourceGet(request: studio_pb.SourceGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceGetResponse) => void): grpc.ClientUnaryCall;
    sourceAdd(request: studio_pb.SourceAddRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceAddResponse) => void): grpc.ClientUnaryCall;
    sourceAdd(request: studio_pb.SourceAddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceAddResponse) => void): grpc.ClientUnaryCall;
    sourceAdd(request: studio_pb.SourceAddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceAddResponse) => void): grpc.ClientUnaryCall;
    sourceDuplicate(request: studio_pb.SourceDuplicateRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceDuplicateResponse) => void): grpc.ClientUnaryCall;
    sourceDuplicate(request: studio_pb.SourceDuplicateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceDuplicateResponse) => void): grpc.ClientUnaryCall;
    sourceDuplicate(request: studio_pb.SourceDuplicateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceDuplicateResponse) => void): grpc.ClientUnaryCall;
    sourceRemove(request: studio_pb.SourceRemoveRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sourceRemove(request: studio_pb.SourceRemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sourceRemove(request: studio_pb.SourceRemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sourceSetProperties(request: studio_pb.SourceSetPropertiesRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceSetPropertiesResponse) => void): grpc.ClientUnaryCall;
    sourceSetProperties(request: studio_pb.SourceSetPropertiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceSetPropertiesResponse) => void): grpc.ClientUnaryCall;
    sourceSetProperties(request: studio_pb.SourceSetPropertiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceSetPropertiesResponse) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: studio_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.HealthResponse) => void): grpc.ClientUnaryCall;
}

export class StudioClient extends grpc.Client implements IStudioClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public studioGet(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: studio_pb.StudioGetResponse) => void): grpc.ClientUnaryCall;
    public studioGet(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.StudioGetResponse) => void): grpc.ClientUnaryCall;
    public studioGet(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.StudioGetResponse) => void): grpc.ClientUnaryCall;
    public studioStart(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public studioStart(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public studioStart(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public studioStop(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public studioStop(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public studioStop(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public showGet(request: studio_pb.ShowGetRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowGetResponse) => void): grpc.ClientUnaryCall;
    public showGet(request: studio_pb.ShowGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowGetResponse) => void): grpc.ClientUnaryCall;
    public showGet(request: studio_pb.ShowGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowGetResponse) => void): grpc.ClientUnaryCall;
    public showCreate(request: studio_pb.ShowCreateRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowCreateResponse) => void): grpc.ClientUnaryCall;
    public showCreate(request: studio_pb.ShowCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowCreateResponse) => void): grpc.ClientUnaryCall;
    public showCreate(request: studio_pb.ShowCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowCreateResponse) => void): grpc.ClientUnaryCall;
    public showDuplicate(request: studio_pb.ShowDuplicateRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowDuplicateResponse) => void): grpc.ClientUnaryCall;
    public showDuplicate(request: studio_pb.ShowDuplicateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowDuplicateResponse) => void): grpc.ClientUnaryCall;
    public showDuplicate(request: studio_pb.ShowDuplicateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowDuplicateResponse) => void): grpc.ClientUnaryCall;
    public showRemove(request: studio_pb.ShowRemoveRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public showRemove(request: studio_pb.ShowRemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public showRemove(request: studio_pb.ShowRemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public showLoad(request: studio_pb.ShowLoadRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowLoadResponse) => void): grpc.ClientUnaryCall;
    public showLoad(request: studio_pb.ShowLoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowLoadResponse) => void): grpc.ClientUnaryCall;
    public showLoad(request: studio_pb.ShowLoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.ShowLoadResponse) => void): grpc.ClientUnaryCall;
    public sceneGet(request: studio_pb.SceneGetRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneGetResponse) => void): grpc.ClientUnaryCall;
    public sceneGet(request: studio_pb.SceneGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneGetResponse) => void): grpc.ClientUnaryCall;
    public sceneGet(request: studio_pb.SceneGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneGetResponse) => void): grpc.ClientUnaryCall;
    public sceneAdd(request: studio_pb.SceneAddRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneAddResponse) => void): grpc.ClientUnaryCall;
    public sceneAdd(request: studio_pb.SceneAddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneAddResponse) => void): grpc.ClientUnaryCall;
    public sceneAdd(request: studio_pb.SceneAddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneAddResponse) => void): grpc.ClientUnaryCall;
    public sceneDuplicate(request: studio_pb.SceneDuplicateRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneDuplicateResponse) => void): grpc.ClientUnaryCall;
    public sceneDuplicate(request: studio_pb.SceneDuplicateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneDuplicateResponse) => void): grpc.ClientUnaryCall;
    public sceneDuplicate(request: studio_pb.SceneDuplicateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneDuplicateResponse) => void): grpc.ClientUnaryCall;
    public sceneRemove(request: studio_pb.SceneRemoveRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sceneRemove(request: studio_pb.SceneRemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sceneRemove(request: studio_pb.SceneRemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sceneSetAsCurrent(request: studio_pb.SceneSetAsCurrentRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneSetAsCurrentResponse) => void): grpc.ClientUnaryCall;
    public sceneSetAsCurrent(request: studio_pb.SceneSetAsCurrentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneSetAsCurrentResponse) => void): grpc.ClientUnaryCall;
    public sceneSetAsCurrent(request: studio_pb.SceneSetAsCurrentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneSetAsCurrentResponse) => void): grpc.ClientUnaryCall;
    public sceneGetCurrent(request: studio_pb.SceneGetCurrentRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneGetCurrentResponse) => void): grpc.ClientUnaryCall;
    public sceneGetCurrent(request: studio_pb.SceneGetCurrentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneGetCurrentResponse) => void): grpc.ClientUnaryCall;
    public sceneGetCurrent(request: studio_pb.SceneGetCurrentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SceneGetCurrentResponse) => void): grpc.ClientUnaryCall;
    public sourceGet(request: studio_pb.SourceGetRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceGetResponse) => void): grpc.ClientUnaryCall;
    public sourceGet(request: studio_pb.SourceGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceGetResponse) => void): grpc.ClientUnaryCall;
    public sourceGet(request: studio_pb.SourceGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceGetResponse) => void): grpc.ClientUnaryCall;
    public sourceAdd(request: studio_pb.SourceAddRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceAddResponse) => void): grpc.ClientUnaryCall;
    public sourceAdd(request: studio_pb.SourceAddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceAddResponse) => void): grpc.ClientUnaryCall;
    public sourceAdd(request: studio_pb.SourceAddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceAddResponse) => void): grpc.ClientUnaryCall;
    public sourceDuplicate(request: studio_pb.SourceDuplicateRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceDuplicateResponse) => void): grpc.ClientUnaryCall;
    public sourceDuplicate(request: studio_pb.SourceDuplicateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceDuplicateResponse) => void): grpc.ClientUnaryCall;
    public sourceDuplicate(request: studio_pb.SourceDuplicateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceDuplicateResponse) => void): grpc.ClientUnaryCall;
    public sourceRemove(request: studio_pb.SourceRemoveRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sourceRemove(request: studio_pb.SourceRemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sourceRemove(request: studio_pb.SourceRemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sourceSetProperties(request: studio_pb.SourceSetPropertiesRequest, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceSetPropertiesResponse) => void): grpc.ClientUnaryCall;
    public sourceSetProperties(request: studio_pb.SourceSetPropertiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceSetPropertiesResponse) => void): grpc.ClientUnaryCall;
    public sourceSetProperties(request: studio_pb.SourceSetPropertiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.SourceSetPropertiesResponse) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: studio_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: studio_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: studio_pb.HealthResponse) => void): grpc.ClientUnaryCall;
}
