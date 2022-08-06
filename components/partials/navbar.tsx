import { Navbar, ScrollArea, createStyles } from "@mantine/core";
import { IconNotes, IconHome } from "@tabler/icons";
import { LinksGroup } from "../shared/navbar/navbarLink";

const mockdata = [
    { label: "Dashboard", icon: IconHome, link: "/" },
    {
        label: "Market news",
        icon: IconNotes,
        // initiallyOpened: true,
        links: [
            { label: "Book", link: "/book" },
            { label: "Forecasts", link: "/" },
        ],
    },
];

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
        paddingBottom: 0,
    },

    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },
}));

export default function NavbarNested() {
    const { classes } = useStyles();
    const links = mockdata.map((item) => (
        <LinksGroup {...item} key={item.label} />
    ));

    return (
        <Navbar.Section grow className={classes.links} component={ScrollArea}>
            <div className={classes.linksInner}>{links}</div>
        </Navbar.Section>
    );
}
