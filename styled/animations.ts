import { keyframes } from 'styled-components';

export const ripple = keyframes({
  to: {
    opacity: 0,
    transform: 'scale(2)',
  },
});

export const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const indeterminate_first = keyframes({
  '0%': {
    left: '-100%',
    width: '100%',
  },
  '100%': {
    left: '100%',
    width: '10%',
  },
});

export const indeterminate_second = keyframes({
  '0%': {
    left: '-150%',
    width: '100%',
  },
  '100%': {
    left: '100%',
    width: '10%',
  },
});
