// https://www.gatsbyjs.org/docs/browser-apis/
import React from 'react';
import Layout from './src/components/Layout.tsx';

import 'normalize.css';
import './src/components/global.css';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
