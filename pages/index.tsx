import { Button, createStyles, Drawer } from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";

const useStyle = createStyles(() => ({
    p: {
        height: `1000px`,
    },
}));

const Home: NextPage = () => {
    const { classes } = useStyle();
    const [opened, setOpened] = useState(false);
    return (
        <>
            <span className={classes.p}>Allo Bos</span>
            <Button onClick={() => setOpened(true)}>Open Drawer</Button>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                // title="Register"
                padding="xl"
                size="sm"
            >
                {/* Drawer content */}
            </Drawer>
        </>
    );
};

export default Home;
