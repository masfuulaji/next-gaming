import { Card, createStyles } from '@mantine/core';
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
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <span className={classes.p}>Allo Bos</span>
      </Card>
    </>
  );
};

export default Home;
