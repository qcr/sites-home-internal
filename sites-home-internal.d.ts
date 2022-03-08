declare module "*.yaml" {
  interface Link {
    name: string;
    target: string;
  }
  interface MediaLink extends Link {
    media?: string | string[];
  }
  const content: {
    features?: MediaLink[];
    links?: Link[];
  };
  export default content;
}
