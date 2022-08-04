import { AppShell, Navbar, Header } from "@mantine/core";
import NavbarItem from "../partials/navbar";
import HeaderItem from "../partials/header";
type LayoutsProps = {
    children: React.ReactNode;
};
function mainLayout({ children }: LayoutsProps) {
    return (
        <>
            <AppShell
                padding="md"
                navbar={
                    <Navbar width={{ base: 300 }} height={500} p="xs">
                        {<NavbarItem />}
                    </Navbar>
                }
                header={
                    <Header height={60} p="xs">
                        {<HeaderItem />}
                    </Header>
                }
                styles={(theme) => ({
                    main: {
                        backgroundColor:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[8]
                                : theme.colors.gray[0],
                    },
                })}
            >
                <div>{children}</div>
            </AppShell>
        </>
    );
}

export default mainLayout;
