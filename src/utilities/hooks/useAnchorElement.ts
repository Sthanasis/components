import { useState } from 'react';

const useAnchoreElement = (initialState?: HTMLButtonElement | null) => {
  const [anchorEl, setAnchorEl] = useState(initialState);
  const visible = Boolean(anchorEl);
  return { anchorEl, setAnchorEl, visible };
};

export default useAnchoreElement;
