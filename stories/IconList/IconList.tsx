import { useState } from 'react';
import {
  IconDefinition,
  IconProp,
  IconPrefix,
  IconPack,
  SizeProp,
} from '@fortawesome/fontawesome-svg-core';
import Icon from 'src/components/Icon';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import Text from 'src/components/Text';
import Search from 'src/components/Search';

export interface IIconListProps {
  iconType: 'solid' | 'regular';
  size?: SizeProp;
}

const IconList = ({ iconType, size }: IIconListProps) => {
  const iconsList = Object.entries(
    iconType === 'solid' ? solidIcons : regularIcons
  ).filter((e) => e[0] !== 'fas' && e[0] !== 'far' && e[0] !== 'prefix');
  const [icons, setIcons] =
    useState<[string, IconDefinition | IconPrefix | IconPack][]>(iconsList);

  const onSearch = (v: string) => {
    const newIcons = iconsList?.filter((icon) =>
      icon[0].toLowerCase().match(v.trim().toLocaleLowerCase())
    );
    setIcons(newIcons);
  };

  return (
    <>
      <Search onSearch={onSearch} placeholder="Search Icon" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {icons &&
          icons.map((e) => (
            <div
              style={{
                margin: 10,
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
              }}
              key={e[0]}
            >
              <Icon icon={e[1] as IconProp} size={size} />
              <Text>{e[0]}</Text>
            </div>
          ))}
      </div>
    </>
  );
};

export default IconList;
