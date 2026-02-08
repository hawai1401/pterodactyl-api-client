export interface Egg<T extends string | Date> {
  object: "egg";
  attributes: {
    id: number;
    uuid: string;
    name: string;
    nest: number;
    author: string;
    description: string;
    docker_image: string;
    docker_images: {
      [key: string]: string;
    };
    config: {
      files: {
        [key: string]: unknown;
      };
      startup: {
        [key: string]: unknown;
      };
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
    created_at: T;
    updated_at: T;
  };
}
