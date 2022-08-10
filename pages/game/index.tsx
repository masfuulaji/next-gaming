import { Card, createStyles } from '@mantine/core';
import type { NextPage } from 'next';

const useStyle = createStyles(() => ({
  span: {
    color: 'red',
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyle();
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <span className={classes.span}>Game</span>
      </Card>
    </>
  );
};

export default Home;
