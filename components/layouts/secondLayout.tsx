type LayoutsProps = {
    children: React.ReactNode;
};
function secondLayout({ children }: LayoutsProps) {
    return (
        <>
            <div>This Another Layouts</div>
            <div>{children}</div>
        </>
    );
}

export default secondLayout;