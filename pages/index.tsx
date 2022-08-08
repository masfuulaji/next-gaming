import { createStyles } from '@mantine/core';
import type { NextPage } from 'next';

const useStyle = createStyles(() => ({
  p: {
    height: `1000px`,
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyle();
  return (
    <>
      <span className={classes.p}>Allo Bos</span>
    </>
  );
};

export default Home;
