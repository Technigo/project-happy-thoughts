const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

const breakpoint = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};

export default breakpoint;
