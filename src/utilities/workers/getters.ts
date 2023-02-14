export const getSortWorker = () => {
  if (typeof Worker !== 'undefined') {
    return new Worker('src/utilities/workers/sortWorker.ts');
  }
  return {};
};
