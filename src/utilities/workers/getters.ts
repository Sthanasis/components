export const getSortWorker = () => {
  return new Worker('src/utilities/workers/sortWorker.ts');
};
