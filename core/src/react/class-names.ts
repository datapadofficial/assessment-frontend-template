const classNames = function classNames(
  list: (string | undefined | null)[],
): string {
  return list.filter(Boolean).join(" ");
};

export { classNames, classNames as default };
