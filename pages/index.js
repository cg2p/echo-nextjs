// pages/index.js
import Layout from '../components/Layout.js';

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();
const { env, version } = publicRuntimeConfig;

const indexPageContent = <p>Hello Next.js</p>;

export default function Index() {
  console.log("build version = %s", version);
  console.log("env = %s", env);
  return <Layout content={indexPageContent} />;
}



  