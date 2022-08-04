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
            <span className={classes.span}>Book</span>
        </>
    );
};

export default Home;