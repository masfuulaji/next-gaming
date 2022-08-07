import { createStyles } from "@mantine/core";
import type { NextPage } from "next";

const useStyle = createStyles(() => ({
    span: {
        color: "red"
    }
}));

const Home: NextPage = () => {
    const { classes } = useStyle();
    return (
        <>
            <span className={classes.span}>Game</span>
        </>
    );
};

export default Home;