import "./navBar.css"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function Navbar() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div>
            <header className="flex items-center justify-between bg-gray-800 text-sm text-white py-4 px-4">
                <div className="flex items-center">
                    <div className="mr-4">
                        <svg className="" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"
                             fill="currentColor">
                            <path fill-rule="evenodd"
                                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                            </path>
                        </svg>
                    </div>
                    <div className="flex w-64 min-w-0 mr-5 bg-gray-700 rounded">
                        <input type="text" placeholder="Search or jump to..." size="30"
                               className="h-8 w-full px-2 bg-transparent border-0 outline-none"/>
                        <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" className="mr-2"/>
                    </div>
                    <div className="flex">
                        <a className="mr-3 font-semibold hover:text-gray-400 color-text">Pull requests</a>
                        <a className="mr-3 font-semibold hover:text-gray-400 color-text">Issues</a>
                        <a className="mr-3 font-semibold hover:text-gray-400 color-text">Marketplace</a>
                        <a className="mr-3 font-semibold hover:text-gray-400 color-text">Explore</a>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-5 flex items-center hover:text-gray-400">
                        <svg viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true" fill="currentColor">
                            <path fill-rule="evenodd"
                                  d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path>
                        </svg>
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                    </div>
                    <div className="mr-5 flex items-center hover:text-gray-400">
                        <svg viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true" fill="currentColor">
                            <path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path>
                        </svg>
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                    </div>
                    <div className="mr-5 flex items-center hover:text-gray-400">
                        <img alt="@massimilianomarini" width="20" height="20"
                             src="https://avatars2.githubusercontent.com/u/278741?s=60&amp;u=dcc816c002d32adad26f981104b8bf74e607230b&amp;v=4"/>
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                    </div>
                </div>
            </header>

            <Box sx={{ width: '100%' }}>
                <Tabs
                    onChange={handleChange}
                    value={value}
                    aria-label="Tabs where each tab needs to be selected manually"
                >
                    <Tab label="Overview" />
                    <Tab label="Repositories" />
                    <Tab label="Projects" />
                    <Tab label="Packages" />
                    <Tab label="Stars" />
                </Tabs>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
export default Navbar;