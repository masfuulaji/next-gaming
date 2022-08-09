import { Card, createStyles, Pagination, Table } from '@mantine/core';
import type { GetServerSideProps } from 'next';
import category from '../../models/category';
import connect from '../../utils/connect';

interface ICategory {
  _id: string;
  name: string;
  description: string;
}
type Category = {
  categories: Array<ICategory>;
};

const useStyles = createStyles(() => ({
  title: {
    fontSize: '1.5rem',
    marginLeft: '1rem',
  },
  paginationWrapper: {
    margin: '1rem',
    display: 'flex',
  },
}));
const Home = ({ categories }: Category) => {
  const { classes } = useStyles();
  const rows = categories.map((category) => (
    <tr key={category._id}>
      <td>{category.name}</td>
      <td>{category.description}</td>
    </tr>
  ));
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <p className={classes.title}>Category Data</p>
        </Card.Section>
        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <div className={classes.paginationWrapper}>
          <Pagination total={4} style={{ marginLeft: 'auto' }} />
        </div>
      </Card>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await connect();
  const categories = await category.find();

  return { props: { categories: JSON.parse(JSON.stringify(categories)) } };
};

export default Home;
