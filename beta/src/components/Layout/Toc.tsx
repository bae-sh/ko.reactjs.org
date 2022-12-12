/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import cx from 'classnames';
import {useTocHighlight} from './useTocHighlight';
import type {Toc} from '../MDX/TocContext';

export function Toc({headings}: {headings: Toc}) {
  const {currentIndex} = useTocHighlight();
  // TODO: We currently have a mismatch between the headings in the document
  // and the headings we find in MarkdownPage (i.e. we don't find Recap or Challenges).
  // Select the max TOC item we have here for now, but remove this after the fix.
  const selectedIndex = Math.min(currentIndex, headings.length - 1);
  return (
<<<<<<< HEAD
    <nav
      role="navigation"
      className="pt-6 fixed top-10 right-0"
      style={{
        // This keeps the layout fixed width instead of adjusting for content.
        width: 'inherit',
        maxWidth: 'inherit',
      }}>
      <h2 className="mb-3 lg:mb-3 uppercase tracking-wide font-bold text-sm text-secondary dark:text-secondary-dark px-4 w-full">
        목차
      </h2>
=======
    <nav role="navigation" className="pt-[22px] sticky top-0 right-0">
      {headings.length > 0 && (
        <h2 className="mb-3 lg:mb-3 uppercase tracking-wide font-bold text-sm text-secondary dark:text-secondary-dark px-4 w-full">
          On this page
        </h2>
      )}
>>>>>>> c883f623d597852b49f9314bb8133442ef9d3298
      <div className="h-full overflow-y-auto pl-4 max-h-[calc(100vh-7.5rem)]">
        <ul className="space-y-2 pb-16">
          {headings.length > 0 &&
            headings.map((h, i) => {
              if (h.url == null) {
                // TODO: only log in DEV
                console.error('Heading does not have URL');
              }
              return (
                <li
                  key={`heading-${h.url}-${i}`}
                  className={cx(
                    'text-sm px-2 rounded-l-lg',
                    selectedIndex === i
                      ? 'bg-highlight dark:bg-highlight-dark'
                      : null,
                    {
                      'pl-4': h?.depth === 3,
                      hidden: h.depth && h.depth > 3,
                    }
                  )}>
                  <a
                    className={cx(
                      selectedIndex === i
                        ? 'text-link dark:text-link-dark font-bold'
                        : 'text-secondary dark:text-secondary-dark',
                      'block hover:text-link dark:hover:text-link-dark leading-normal py-2'
                    )}
                    href={h.url}>
                    {h.text}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
}
