import { memo } from 'react';

const Label = ({
  labelText,
  labelClassList,
  textClassList,
}: {
  labelText?: string;
  labelClassList: string;
  textClassList: string;
}) =>
  labelText && (
    <div className={labelClassList}>
      <label className={textClassList}>{labelText}</label>
    </div>
  );

export default memo(Label);
