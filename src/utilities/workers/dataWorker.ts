import { RowType } from 'src/components/DataGrid/utilities/types';

const createMoreData = (fakeData: RowType[]) => {
  return [
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
  ].map((item, index) => ({ ...item, id: index + 1 }));
};

self.onmessage = (e: MessageEvent<RowType[]>) => {
  const data = createMoreData(e.data);

  postMessage(data);
};