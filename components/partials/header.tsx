import {
    createStyles,
    Header,
    UnstyledButton,
    Menu,
    Button,
    Text,
} from "@mantine/core";
import { IconHome, IconMenu2 } from "@tabler/icons";
const useStyles = createStyles((theme) => ({
    inner: {
        height: 56,
        display: "flex",
        // justifyContent: "space-between",
        alignItems: "center",
        paddingInline: 20,
    },
    logo: {
        display: "flex",
        marginRight: "auto",
    },
    logoText: {
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: 10,
    },
}));
function HeaderItem() {
    const { classes } = useStyles();
    return (
        <Header height={60}>
            <div className={classes.inner}>
                <UnstyledButton className={classes.logo}>
                    <IconHome size={28} strokeWidth={2} color={"black"} />
                    <span className={classes.logoText}>Library</span>
                </UnstyledButton>
                <Menu transition="pop-top-right" width={150} position="left-start" >
                    <Menu.Target>
                        <UnstyledButton pr={12}><IconMenu2 size={28} strokeWidth={2} color={"black"} /></UnstyledButton>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item
                            rightSection={
                                <Text
                                    size="xs"
                                    transform="uppercase"
                                    weight={700}
                                    color="dimmed"
                                >
                                    Ctrl + P
                                </Text>
                            }
                        >
                            Project
                        </Menu.Item>
                        <Menu.Item>Logout</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </div>
        </Header>
    );
}

export default HeaderItem;
