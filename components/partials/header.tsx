import {
  createStyles,
  UnstyledButton,
  Menu,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import { IconBrandGitlab, IconUserCircle } from '@tabler/icons';
const useStyles = createStyles(() => ({
  inner: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    display: 'flex',
    marginRight: 'auto',
    '@media (max-width: 1000px)': {
      marginRight: 100,
    },
  },
  logoText: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 10,
  },
}));
interface headerProp {
  openNavbar: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpened: (value: boolean) => void;
}
function HeaderItem(props: headerProp) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <div className={classes.inner}>
      <UnstyledButton className={classes.logo}>
        <IconBrandGitlab size={28} strokeWidth={2} color={'black'} />
        <span className={classes.logoText}>Gamer</span>
      </UnstyledButton>
      <MediaQuery
        largerThan="md"
        styles={{ display: 'none', marginRight: 'auto' }}
      >
        <Burger
          opened={props.openNavbar}
          onClick={() => props.setOpened(!props.openNavbar)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="auto"
        />
      </MediaQuery>
      <Menu transition="pop-top-right" width={150} position="left-start">
        <Menu.Target>
          <UnstyledButton pr={12}>
            <IconUserCircle size={28} strokeWidth={2} color={'black'} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            rightSection={
              <Text size="xs" transform="uppercase" weight={700} color="dimmed">
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
  );
}

export default HeaderItem;
