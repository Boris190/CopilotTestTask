export const DOMAIN = "belurk.ru";

export const DEADLINE = "2024-11-11T23:59:59";

export const animateFormError = {
  hide: {
    opacity: 0,
    height: 0,
  },
  show: {
    opacity: 1,
    height: "auto",
  },
};

export const animateAccordion = {
  hide: {
    opacity: 0,
    height: 0,
  },
  show: {
    opacity: 1,
    height: "auto",
  },
};

export const animateDropdown = {
  open: {
    opacity: 1,
  },
  close: {
    opacity: 0,
  },
};

export const animateDropdownWithTransform = {
  open: {
    opacity: 1,
    y: 0,
  },
  close: {
    opacity: 0,
    y: -20,
    overflow: "hidden",
  },
};

export const tooltipAnimation = {
  show: {
    opacity: 1,
    y: 0,
  },
  hide: {
    opacity: 0,
    y: 5,
  },
};

export const heightAnimation = {
  hide: {
    height: 0,
    overflow: "hidden",
    opacity: 0,
  },
  show: {
    height: "auto",
    opacity: 1,
  },
};

export const animateMenu = {
  open: {
    height: "100vh",
    opacity: 1,
  },
  close: {
    height: 0,
    opacity: 0,
  },
};
