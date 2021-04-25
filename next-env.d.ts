/// <reference types="next" />
/// <reference types="next/types/global" />

// https://github.com/gregberge/svgr/issues/38
declare module "*.svg" {
  const value: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}
