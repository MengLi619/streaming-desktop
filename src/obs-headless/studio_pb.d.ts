// package: proto
// file: studio.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class StudioState extends jspb.Message { 
    getActiveShowId(): string;
    setActiveShowId(value: string): StudioState;

    clearShowsList(): void;
    getShowsList(): Array<Show>;
    setShowsList(value: Array<Show>): StudioState;
    addShows(value?: Show, index?: number): Show;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StudioState.AsObject;
    static toObject(includeInstance: boolean, msg: StudioState): StudioState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StudioState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StudioState;
    static deserializeBinaryFromReader(message: StudioState, reader: jspb.BinaryReader): StudioState;
}

export namespace StudioState {
    export type AsObject = {
        activeShowId: string,
        showsList: Array<Show.AsObject>,
    }
}

export class Show extends jspb.Message { 
    getId(): string;
    setId(value: string): Show;

    getName(): string;
    setName(value: string): Show;

    getActiveSceneId(): string;
    setActiveSceneId(value: string): Show;

    clearScenesList(): void;
    getScenesList(): Array<Scene>;
    setScenesList(value: Array<Scene>): Show;
    addScenes(value?: Scene, index?: number): Scene;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Show.AsObject;
    static toObject(includeInstance: boolean, msg: Show): Show.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Show, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Show;
    static deserializeBinaryFromReader(message: Show, reader: jspb.BinaryReader): Show;
}

export namespace Show {
    export type AsObject = {
        id: string,
        name: string,
        activeSceneId: string,
        scenesList: Array<Scene.AsObject>,
    }
}

export class Scene extends jspb.Message { 
    getId(): string;
    setId(value: string): Scene;

    getName(): string;
    setName(value: string): Scene;

    getActiveSourceId(): string;
    setActiveSourceId(value: string): Scene;

    clearSourcesList(): void;
    getSourcesList(): Array<Source>;
    setSourcesList(value: Array<Source>): Scene;
    addSources(value?: Source, index?: number): Source;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Scene.AsObject;
    static toObject(includeInstance: boolean, msg: Scene): Scene.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Scene, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Scene;
    static deserializeBinaryFromReader(message: Scene, reader: jspb.BinaryReader): Scene;
}

export namespace Scene {
    export type AsObject = {
        id: string,
        name: string,
        activeSourceId: string,
        sourcesList: Array<Source.AsObject>,
    }
}

export class Source extends jspb.Message { 
    getId(): string;
    setId(value: string): Source;

    getName(): string;
    setName(value: string): Source;

    getType(): string;
    setType(value: string): Source;

    getUrl(): string;
    setUrl(value: string): Source;

    getPreviewUrl(): string;
    setPreviewUrl(value: string): Source;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Source.AsObject;
    static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Source;
    static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
}

export namespace Source {
    export type AsObject = {
        id: string,
        name: string,
        type: string,
        url: string,
        previewUrl: string,
    }
}

export class ShowGetRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): ShowGetRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShowGetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ShowGetRequest): ShowGetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShowGetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShowGetRequest;
    static deserializeBinaryFromReader(message: ShowGetRequest, reader: jspb.BinaryReader): ShowGetRequest;
}

export namespace ShowGetRequest {
    export type AsObject = {
        showId: string,
    }
}

export class ShowCreateRequest extends jspb.Message { 
    getShowName(): string;
    setShowName(value: string): ShowCreateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShowCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ShowCreateRequest): ShowCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShowCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShowCreateRequest;
    static deserializeBinaryFromReader(message: ShowCreateRequest, reader: jspb.BinaryReader): ShowCreateRequest;
}

export namespace ShowCreateRequest {
    export type AsObject = {
        showName: string,
    }
}

export class ShowDuplicateRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): ShowDuplicateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShowDuplicateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ShowDuplicateRequest): ShowDuplicateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShowDuplicateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShowDuplicateRequest;
    static deserializeBinaryFromReader(message: ShowDuplicateRequest, reader: jspb.BinaryReader): ShowDuplicateRequest;
}

export namespace ShowDuplicateRequest {
    export type AsObject = {
        showId: string,
    }
}

export class ShowRemoveRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): ShowRemoveRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShowRemoveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ShowRemoveRequest): ShowRemoveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShowRemoveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShowRemoveRequest;
    static deserializeBinaryFromReader(message: ShowRemoveRequest, reader: jspb.BinaryReader): ShowRemoveRequest;
}

export namespace ShowRemoveRequest {
    export type AsObject = {
        showId: string,
    }
}

export class ShowLoadRequest extends jspb.Message { 
    getShowPath(): string;
    setShowPath(value: string): ShowLoadRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShowLoadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ShowLoadRequest): ShowLoadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShowLoadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShowLoadRequest;
    static deserializeBinaryFromReader(message: ShowLoadRequest, reader: jspb.BinaryReader): ShowLoadRequest;
}

export namespace ShowLoadRequest {
    export type AsObject = {
        showPath: string,
    }
}

export class SceneGetRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): SceneGetRequest;

    getSceneId(): string;
    setSceneId(value: string): SceneGetRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SceneGetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SceneGetRequest): SceneGetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SceneGetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SceneGetRequest;
    static deserializeBinaryFromReader(message: SceneGetRequest, reader: jspb.BinaryReader): SceneGetRequest;
}

export namespace SceneGetRequest {
    export type AsObject = {
        showId: string,
        sceneId: string,
    }
}

export class SceneAddRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): SceneAddRequest;

    getSceneName(): string;
    setSceneName(value: string): SceneAddRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SceneAddRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SceneAddRequest): SceneAddRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SceneAddRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SceneAddRequest;
    static deserializeBinaryFromReader(message: SceneAddRequest, reader: jspb.BinaryReader): SceneAddRequest;
}

export namespace SceneAddRequest {
    export type AsObject = {
        showId: string,
        sceneName: string,
    }
}

export class SceneDuplicateRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): SceneDuplicateRequest;

    getSceneId(): string;
    setSceneId(value: string): SceneDuplicateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SceneDuplicateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SceneDuplicateRequest): SceneDuplicateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SceneDuplicateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SceneDuplicateRequest;
    static deserializeBinaryFromReader(message: SceneDuplicateRequest, reader: jspb.BinaryReader): SceneDuplicateRequest;
}

export namespace SceneDuplicateRequest {
    export type AsObject = {
        showId: string,
        sceneId: string,
    }
}

export class SceneRemoveRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): SceneRemoveRequest;

    getSceneId(): string;
    setSceneId(value: string): SceneRemoveRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SceneRemoveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SceneRemoveRequest): SceneRemoveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SceneRemoveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SceneRemoveRequest;
    static deserializeBinaryFromReader(message: SceneRemoveRequest, reader: jspb.BinaryReader): SceneRemoveRequest;
}

export namespace SceneRemoveRequest {
    export type AsObject = {
        showId: string,
        sceneId: string,
    }
}

export class SceneSetAsCurrentRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): SceneSetAsCurrentRequest;

    getSceneId(): string;
    setSceneId(value: string): SceneSetAsCurrentRequest;

    getTransitionType(): string;
    setTransitionType(value: string): SceneSetAsCurrentRequest;

    getTransitionDurationMs(): number;
    setTransitionDurationMs(value: number): SceneSetAsCurrentRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SceneSetAsCurrentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SceneSetAsCurrentRequest): SceneSetAsCurrentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SceneSetAsCurrentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SceneSetAsCurrentRequest;
    static deserializeBinaryFromReader(message: SceneSetAsCurrentRequest, reader: jspb.BinaryReader): SceneSetAsCurrentRequest;
}

export namespace SceneSetAsCurrentRequest {
    export type AsObject = {
        showId: string,
        sceneId: string,
        transitionType: string,
        transitionDurationMs: number,
    }
}

export class SceneGetCurrentRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): SceneGetCurrentRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SceneGetCurrentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SceneGetCurrentRequest): SceneGetCurrentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SceneGetCurrentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SceneGetCurrentRequest;
    static deserializeBinaryFromReader(message: SceneGetCurrentRequest, reader: jspb.BinaryReader): SceneGetCurrentRequest;
}

export namespace SceneGetCurrentRequest {
    export type AsObject = {
        showId: string,
    }
}

export class SourceGetRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): SourceGetRequest;

    getSceneId(): string;
    setSceneId(value: string): SourceGetRequest;

    getSourceId(): string;
    setSourceId(value: string): SourceGetRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceGetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SourceGetRequest): SourceGetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceGetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceGetRequest;
    static deserializeBinaryFromReader(message: SourceGetRequest, reader: jspb.BinaryReader): SourceGetRequest;
}

export namespace SourceGetRequest {
    export type AsObject = {
        showId: string,
        sceneId: string,
        sourceId: string,
    }
}

export class SourceAddRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): SourceAddRequest;

    getSceneId(): string;
    setSceneId(value: string): SourceAddRequest;

    getSourceName(): string;
    setSourceName(value: string): SourceAddRequest;

    getSourceType(): string;
    setSourceType(value: string): SourceAddRequest;

    getSourceUrl(): string;
    setSourceUrl(value: string): SourceAddRequest;

    getSourcePreviewUrl(): string;
    setSourcePreviewUrl(value: string): SourceAddRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceAddRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SourceAddRequest): SourceAddRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceAddRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceAddRequest;
    static deserializeBinaryFromReader(message: SourceAddRequest, reader: jspb.BinaryReader): SourceAddRequest;
}

export namespace SourceAddRequest {
    export type AsObject = {
        showId: string,
        sceneId: string,
        sourceName: string,
        sourceType: string,
        sourceUrl: string,
        sourcePreviewUrl: string,
    }
}

export class SourceDuplicateRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): SourceDuplicateRequest;

    getSceneId(): string;
    setSceneId(value: string): SourceDuplicateRequest;

    getSourceId(): string;
    setSourceId(value: string): SourceDuplicateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceDuplicateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SourceDuplicateRequest): SourceDuplicateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceDuplicateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceDuplicateRequest;
    static deserializeBinaryFromReader(message: SourceDuplicateRequest, reader: jspb.BinaryReader): SourceDuplicateRequest;
}

export namespace SourceDuplicateRequest {
    export type AsObject = {
        showId: string,
        sceneId: string,
        sourceId: string,
    }
}

export class SourceRemoveRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): SourceRemoveRequest;

    getSceneId(): string;
    setSceneId(value: string): SourceRemoveRequest;

    getSourceId(): string;
    setSourceId(value: string): SourceRemoveRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceRemoveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SourceRemoveRequest): SourceRemoveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceRemoveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceRemoveRequest;
    static deserializeBinaryFromReader(message: SourceRemoveRequest, reader: jspb.BinaryReader): SourceRemoveRequest;
}

export namespace SourceRemoveRequest {
    export type AsObject = {
        showId: string,
        sceneId: string,
        sourceId: string,
    }
}

export class SourceSetPropertiesRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): SourceSetPropertiesRequest;

    getSceneId(): string;
    setSceneId(value: string): SourceSetPropertiesRequest;

    getSourceId(): string;
    setSourceId(value: string): SourceSetPropertiesRequest;

    getSourceType(): string;
    setSourceType(value: string): SourceSetPropertiesRequest;

    getSourceUrl(): string;
    setSourceUrl(value: string): SourceSetPropertiesRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceSetPropertiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SourceSetPropertiesRequest): SourceSetPropertiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceSetPropertiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceSetPropertiesRequest;
    static deserializeBinaryFromReader(message: SourceSetPropertiesRequest, reader: jspb.BinaryReader): SourceSetPropertiesRequest;
}

export namespace SourceSetPropertiesRequest {
    export type AsObject = {
        showId: string,
        sceneId: string,
        sourceId: string,
        sourceType: string,
        sourceUrl: string,
    }
}

export class SourceRestartRequest extends jspb.Message { 
    getShowId(): string;
    setShowId(value: string): SourceRestartRequest;

    getSceneId(): string;
    setSceneId(value: string): SourceRestartRequest;

    getSourceId(): string;
    setSourceId(value: string): SourceRestartRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceRestartRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SourceRestartRequest): SourceRestartRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceRestartRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceRestartRequest;
    static deserializeBinaryFromReader(message: SourceRestartRequest, reader: jspb.BinaryReader): SourceRestartRequest;
}

export namespace SourceRestartRequest {
    export type AsObject = {
        showId: string,
        sceneId: string,
        sourceId: string,
    }
}

export class StudioGetResponse extends jspb.Message { 

    hasStudio(): boolean;
    clearStudio(): void;
    getStudio(): StudioState | undefined;
    setStudio(value?: StudioState): StudioGetResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StudioGetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StudioGetResponse): StudioGetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StudioGetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StudioGetResponse;
    static deserializeBinaryFromReader(message: StudioGetResponse, reader: jspb.BinaryReader): StudioGetResponse;
}

export namespace StudioGetResponse {
    export type AsObject = {
        studio?: StudioState.AsObject,
    }
}

export class ShowGetResponse extends jspb.Message { 

    hasShow(): boolean;
    clearShow(): void;
    getShow(): Show | undefined;
    setShow(value?: Show): ShowGetResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShowGetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ShowGetResponse): ShowGetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShowGetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShowGetResponse;
    static deserializeBinaryFromReader(message: ShowGetResponse, reader: jspb.BinaryReader): ShowGetResponse;
}

export namespace ShowGetResponse {
    export type AsObject = {
        show?: Show.AsObject,
    }
}

export class ShowCreateResponse extends jspb.Message { 

    hasShow(): boolean;
    clearShow(): void;
    getShow(): Show | undefined;
    setShow(value?: Show): ShowCreateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShowCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ShowCreateResponse): ShowCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShowCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShowCreateResponse;
    static deserializeBinaryFromReader(message: ShowCreateResponse, reader: jspb.BinaryReader): ShowCreateResponse;
}

export namespace ShowCreateResponse {
    export type AsObject = {
        show?: Show.AsObject,
    }
}

export class ShowDuplicateResponse extends jspb.Message { 

    hasShow(): boolean;
    clearShow(): void;
    getShow(): Show | undefined;
    setShow(value?: Show): ShowDuplicateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShowDuplicateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ShowDuplicateResponse): ShowDuplicateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShowDuplicateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShowDuplicateResponse;
    static deserializeBinaryFromReader(message: ShowDuplicateResponse, reader: jspb.BinaryReader): ShowDuplicateResponse;
}

export namespace ShowDuplicateResponse {
    export type AsObject = {
        show?: Show.AsObject,
    }
}

export class ShowLoadResponse extends jspb.Message { 

    hasShow(): boolean;
    clearShow(): void;
    getShow(): Show | undefined;
    setShow(value?: Show): ShowLoadResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShowLoadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ShowLoadResponse): ShowLoadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShowLoadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShowLoadResponse;
    static deserializeBinaryFromReader(message: ShowLoadResponse, reader: jspb.BinaryReader): ShowLoadResponse;
}

export namespace ShowLoadResponse {
    export type AsObject = {
        show?: Show.AsObject,
    }
}

export class ShowSwitchSourceResponse extends jspb.Message { 

    hasShow(): boolean;
    clearShow(): void;
    getShow(): Show | undefined;
    setShow(value?: Show): ShowSwitchSourceResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShowSwitchSourceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ShowSwitchSourceResponse): ShowSwitchSourceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShowSwitchSourceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShowSwitchSourceResponse;
    static deserializeBinaryFromReader(message: ShowSwitchSourceResponse, reader: jspb.BinaryReader): ShowSwitchSourceResponse;
}

export namespace ShowSwitchSourceResponse {
    export type AsObject = {
        show?: Show.AsObject,
    }
}

export class SceneGetResponse extends jspb.Message { 

    hasScene(): boolean;
    clearScene(): void;
    getScene(): Scene | undefined;
    setScene(value?: Scene): SceneGetResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SceneGetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SceneGetResponse): SceneGetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SceneGetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SceneGetResponse;
    static deserializeBinaryFromReader(message: SceneGetResponse, reader: jspb.BinaryReader): SceneGetResponse;
}

export namespace SceneGetResponse {
    export type AsObject = {
        scene?: Scene.AsObject,
    }
}

export class SceneAddResponse extends jspb.Message { 

    hasScene(): boolean;
    clearScene(): void;
    getScene(): Scene | undefined;
    setScene(value?: Scene): SceneAddResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SceneAddResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SceneAddResponse): SceneAddResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SceneAddResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SceneAddResponse;
    static deserializeBinaryFromReader(message: SceneAddResponse, reader: jspb.BinaryReader): SceneAddResponse;
}

export namespace SceneAddResponse {
    export type AsObject = {
        scene?: Scene.AsObject,
    }
}

export class SceneDuplicateResponse extends jspb.Message { 

    hasScene(): boolean;
    clearScene(): void;
    getScene(): Scene | undefined;
    setScene(value?: Scene): SceneDuplicateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SceneDuplicateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SceneDuplicateResponse): SceneDuplicateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SceneDuplicateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SceneDuplicateResponse;
    static deserializeBinaryFromReader(message: SceneDuplicateResponse, reader: jspb.BinaryReader): SceneDuplicateResponse;
}

export namespace SceneDuplicateResponse {
    export type AsObject = {
        scene?: Scene.AsObject,
    }
}

export class SceneSetAsCurrentResponse extends jspb.Message { 

    hasShow(): boolean;
    clearShow(): void;
    getShow(): Show | undefined;
    setShow(value?: Show): SceneSetAsCurrentResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SceneSetAsCurrentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SceneSetAsCurrentResponse): SceneSetAsCurrentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SceneSetAsCurrentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SceneSetAsCurrentResponse;
    static deserializeBinaryFromReader(message: SceneSetAsCurrentResponse, reader: jspb.BinaryReader): SceneSetAsCurrentResponse;
}

export namespace SceneSetAsCurrentResponse {
    export type AsObject = {
        show?: Show.AsObject,
    }
}

export class SceneGetCurrentResponse extends jspb.Message { 
    getSceneId(): string;
    setSceneId(value: string): SceneGetCurrentResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SceneGetCurrentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SceneGetCurrentResponse): SceneGetCurrentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SceneGetCurrentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SceneGetCurrentResponse;
    static deserializeBinaryFromReader(message: SceneGetCurrentResponse, reader: jspb.BinaryReader): SceneGetCurrentResponse;
}

export namespace SceneGetCurrentResponse {
    export type AsObject = {
        sceneId: string,
    }
}

export class SourceGetResponse extends jspb.Message { 

    hasSource(): boolean;
    clearSource(): void;
    getSource(): Source | undefined;
    setSource(value?: Source): SourceGetResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceGetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SourceGetResponse): SourceGetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceGetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceGetResponse;
    static deserializeBinaryFromReader(message: SourceGetResponse, reader: jspb.BinaryReader): SourceGetResponse;
}

export namespace SourceGetResponse {
    export type AsObject = {
        source?: Source.AsObject,
    }
}

export class SourceAddResponse extends jspb.Message { 

    hasSource(): boolean;
    clearSource(): void;
    getSource(): Source | undefined;
    setSource(value?: Source): SourceAddResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceAddResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SourceAddResponse): SourceAddResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceAddResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceAddResponse;
    static deserializeBinaryFromReader(message: SourceAddResponse, reader: jspb.BinaryReader): SourceAddResponse;
}

export namespace SourceAddResponse {
    export type AsObject = {
        source?: Source.AsObject,
    }
}

export class SourceDuplicateResponse extends jspb.Message { 

    hasSource(): boolean;
    clearSource(): void;
    getSource(): Source | undefined;
    setSource(value?: Source): SourceDuplicateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceDuplicateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SourceDuplicateResponse): SourceDuplicateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceDuplicateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceDuplicateResponse;
    static deserializeBinaryFromReader(message: SourceDuplicateResponse, reader: jspb.BinaryReader): SourceDuplicateResponse;
}

export namespace SourceDuplicateResponse {
    export type AsObject = {
        source?: Source.AsObject,
    }
}

export class SourceSetPropertiesResponse extends jspb.Message { 

    hasSource(): boolean;
    clearSource(): void;
    getSource(): Source | undefined;
    setSource(value?: Source): SourceSetPropertiesResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceSetPropertiesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SourceSetPropertiesResponse): SourceSetPropertiesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceSetPropertiesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceSetPropertiesResponse;
    static deserializeBinaryFromReader(message: SourceSetPropertiesResponse, reader: jspb.BinaryReader): SourceSetPropertiesResponse;
}

export namespace SourceSetPropertiesResponse {
    export type AsObject = {
        source?: Source.AsObject,
    }
}

export class HealthResponse extends jspb.Message { 
    getTimestamp(): number;
    setTimestamp(value: number): HealthResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HealthResponse): HealthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthResponse;
    static deserializeBinaryFromReader(message: HealthResponse, reader: jspb.BinaryReader): HealthResponse;
}

export namespace HealthResponse {
    export type AsObject = {
        timestamp: number,
    }
}
