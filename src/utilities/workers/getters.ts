export const getSortWorker = () => {
  if (import.meta.env.STORYBOOK_BUILD) {
    return new Worker(new URL('../workers/sortWorker.ts', import.meta.url));
  }
  return new Worker('src/utilities/workers/sortWorker.ts');
};
