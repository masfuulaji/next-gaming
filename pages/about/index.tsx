import type { ReactElement } from 'react';
import SecondLayout from '../../components/layouts/secondLayout';

const Page = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <SecondLayout>{page}</SecondLayout>;
};

export default Page;
