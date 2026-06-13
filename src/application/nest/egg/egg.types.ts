export type EggId = number;

export interface EggObject {
  object: 'egg';
  attributes: {
    id: number;
    uuid: string;
    name: string;
    nest: number;
    author: string;
    description: string;
    docker_image: string;
    docker_images: Record<string, string>;
    config: {
      files: Record<string, unknown>;
      startup: Record<string, unknown>;
      stop: string;
      logs: unknown;
      file_denylist: unknown;
      extends: null;
    };
    startup: string;
    script: {
      privileged: boolean;
      install: string;
      entry: string;
      container: string;
      extends: null;
    };
    created_at: Date;
    updated_at: Date;
  };
}

export interface BaseEgg {
  id: number;
  uuid: string;
  name: string;
  nest: number;
  author: string;
  description: string;
  dockerImage: string;
  dockerImages: Record<string, string>;
  config: {
    files: Record<string, unknown>;
    startup: Record<string, unknown>;
    stop: string;
    logs: unknown;
    fileDenylist: unknown;
    extends: null;
  };
  startup: string;
  script: {
    privileged: boolean;
    install: string;
    entry: string;
    container: string;
    extends: null;
  };
  createdAt: Date;
  updatedAt: Date;
}
