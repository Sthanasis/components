export const getSortWorker = () => {
  if (typeof Worker !== 'undefined') {
    return new Worker(
      new URL('src/utilities/workers/sortWorker.ts', import.meta.url)
    );
  }
  return {};
};
