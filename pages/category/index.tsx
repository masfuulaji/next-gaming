import { Table } from '@mantine/core';
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
const Home = ({ categories }: Category) => {
  const rows = categories.map((category) => (
    <tr key={category._id}>
      <td>{category.name}</td>
      <td>{category.description}</td>
    </tr>
  ));
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await connect();
  const categories = await category.find();

  return { props: { categories: JSON.parse(JSON.stringify(categories)) } };
};

export default Home;
