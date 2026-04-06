import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox="0 0 60 32"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          {/* "S" shape */}
          <path d="M2 8 Q2 2 9 2 L18 2 Q24 2 24 8 Q24 13 14 15 Q5 17 5 23 Q5 29 12 29 L22 29 Q28 29 28 23" strokeWidth="4" fill="none" />
          {/* "T" shape */}
          <rect x="32" y="2" width="20" height="4" />
          <rect x="39" y="2" width="5" height="26" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
