export const isEmpty = (item?: string | any[] | object | number) => {
  if (typeof item === 'string') {
    return item.trim().length === 0;
  }
  if (Array.isArray(item)) {
    return item.length === 0;
  }
  if (typeof item === 'object') {
    return Object.keys(item).length === 0;
  }
  return !item;
};
