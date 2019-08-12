// pages/index.js
import Layout from '../components/Layout.js';

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();
const { version } = publicRuntimeConfig;

const indexPageContent = <p>Hello Next.js</p>;

export default function Index() {
  console.log("build version = %s", version);
  return <Layout content={indexPageContent} />;
}



  