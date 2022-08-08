import type { ReactElement } from 'react';
import SecondLayout from '../../components/layouts/secondLayout';
import type { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <SecondLayout>{page}</SecondLayout>;
};

export default Page;
