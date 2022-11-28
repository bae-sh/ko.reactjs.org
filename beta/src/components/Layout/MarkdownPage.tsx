/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';
import {useRouter} from 'next/router';
import {DocsPageFooter} from 'components/DocsFooter';
import {Seo} from 'components/Seo';
import PageHeading from 'components/PageHeading';
import {useRouteMeta} from './useRouteMeta';
<<<<<<< HEAD
import {Toc} from './Toc';
=======
import {useActiveSection} from '../../hooks/useActiveSection';
import {TocContext} from '../MDX/TocContext';

import(/* webpackPrefetch: true */ '../MDX/CodeBlock/CodeBlock');

>>>>>>> 1a641bb88e647186f260dd2a8e56f0b083f2e46b
export interface MarkdownProps<Frontmatter> {
  meta: Frontmatter & {description?: string};
  children?: React.ReactNode;
}

function MaxWidth({children}: {children: any}) {
  return <div className="max-w-4xl ml-0 2xl:mx-auto">{children}</div>;
}

export function MarkdownPage<
  T extends {title: string; status?: string} = {title: string; status?: string}
>({children, meta}: MarkdownProps<T>) {
  const {route, nextRoute, prevRoute} = useRouteMeta();
  const section = useActiveSection();
  const title = meta.title || route?.title || '';
  const description = meta.description || route?.description || '';
<<<<<<< HEAD

  let anchors: Array<{
    url: string;
    text: React.ReactNode;
    depth: number;
  }> = React.Children.toArray(children)
    .filter((child: any) => {
      if (child.props?.mdxType) {
        return ['h1', 'h2', 'h3', 'Challenges', 'Recap'].includes(
          child.props.mdxType
        );
      }
      return false;
    })
    .map((child: any) => {
      if (child.props.mdxType === 'Challenges') {
        return {
          url: '#challenges',
          depth: 0,
          text: 'Challenges',
        };
      }
      if (child.props.mdxType === 'Recap') {
        return {
          url: '#recap',
          depth: 0,
          text: 'Recap',
        };
      }
      return {
        url: '#' + child.props.id,
        depth:
          (child.props?.mdxType &&
            parseInt(child.props.mdxType.replace('h', ''), 0)) ??
          0,
        text: child.props.children,
      };
    });
  if (anchors.length > 0) {
    anchors.unshift({
      depth: 1,
      text: 'Overview',
      url: '#',
    });
  }

  if (!route) {
    console.error('This page was not added to one of the sidebar JSON files.');
  }
  const isHomePage = route?.path === '/';

  // Auto-wrap everything except a few types into
  // <MaxWidth> wrappers. Keep reusing the same
  // wrapper as long as we can until we meet
  // a full-width section which interrupts it.
  let fullWidthTypes = [
    'Sandpack',
    'FullWidth',
    'Illustration',
    'IllustrationBlock',
    'Challenges',
    'Recipes',
  ];
  let wrapQueue: React.ReactNode[] = [];
  let finalChildren: React.ReactNode[] = [];
  function flushWrapper(key: string | number) {
    if (wrapQueue.length > 0) {
      finalChildren.push(<MaxWidth key={key}>{wrapQueue}</MaxWidth>);
      wrapQueue = [];
    }
  }
  function handleChild(child: any, key: string | number) {
    if (child == null) {
      return;
    }
    if (typeof child !== 'object') {
      wrapQueue.push(child);
      return;
    }
    if (fullWidthTypes.includes(child.props.mdxType)) {
      flushWrapper(key);
      finalChildren.push(child);
    } else {
      wrapQueue.push(child);
    }
  }
  React.Children.forEach(children, handleChild);
  flushWrapper('last');

  return (
    <article className="h-full mx-auto relative w-full min-w-0">
      <div className="lg:pt-0 pt-20 pl-0 lg:pl-80 2xl:px-80 ">
=======
  const isHomePage = section === 'home';
  return (
    <>
      <div className="pl-0">
>>>>>>> 1a641bb88e647186f260dd2a8e56f0b083f2e46b
        <Seo title={title} />
        {!isHomePage && (
          <PageHeading
            title={title}
            description={description}
            tags={route?.tags}
          />
        )}
        <div className="px-5 sm:px-12">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <MDXContext.Provider value={MDXComponents}>
              {finalChildren}
            </MDXContext.Provider>
=======
            <TocContext.Provider value={toc}>{children}</TocContext.Provider>
>>>>>>> 1a641bb88e647186f260dd2a8e56f0b083f2e46b
          </div>
          <DocsPageFooter
            route={route}
            nextRoute={nextRoute}
            prevRoute={prevRoute}
          />
        </div>
      </div>
<<<<<<< HEAD
      <div className="w-full lg:max-w-xs hidden 2xl:block">
        {!isHomePage && anchors.length > 0 && <Toc headings={anchors} />}
      </div>
    </article>
=======
    </>
>>>>>>> 1a641bb88e647186f260dd2a8e56f0b083f2e46b
  );
}
