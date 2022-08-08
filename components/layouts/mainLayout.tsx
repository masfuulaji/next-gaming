import { AppShell, Navbar, Header } from '@mantine/core';
import NavbarItem from '../partials/navbar';
import HeaderItem from '../partials/header';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
type LayoutsProps = {
  children: React.ReactNode;
};
function MainLayout({ children }: LayoutsProps) {
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setOpened((o) => o == false);
  }, [router.asPath]);
  return (
    <>
      <AppShell
        padding="md"
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar
            p="md"
            hidden={!opened}
            width={{ sm: 250, lg: 300, base: 250 }}
          >
            {<NavbarItem />}
          </Navbar>
        }
        header={
          <Header height={60} p="xs" style={{ display: 'flex' }}>
            {<HeaderItem openNavbar={opened} setOpened={setOpened} />}
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
            '@media (max-width: 1000px)': {
              paddingLeft: 20,
            },
          },
        })}
      >
        <div>{children}</div>
      </AppShell>
    </>
  );
}

export default MainLayout;
