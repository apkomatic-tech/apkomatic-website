// https://www.gatsbyjs.org/docs/browser-apis/
import React from 'react';
import Layout from './src/components/Layout.tsx';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
