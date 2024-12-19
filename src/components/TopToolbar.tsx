import React from "react";
import { IconButton } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LastPageIcon from '@mui/icons-material/LastPage';
import SettingsIcon from '@mui/icons-material/Settings';
import { 
    LeftButtonsContainer, 
    RightButtonsContainer, 
    StyledTopToolbar 
} from "./styles/TopToolbarStyles";
import { useStripChartContext } from "../context/StripChartContext";



const TopToolbar : React.FC = () => {
    const {toggleSideMenu} = useStripChartContext();

    return (
        <StyledTopToolbar>
            <LeftButtonsContainer>
                <IconButton aria-label="first">
                    <FirstPageIcon />
                </IconButton>
                <IconButton aria-label="previous">
                    <NavigateBeforeIcon />
                </IconButton>
                <IconButton aria-label="next">
                    <NavigateNextIcon />
                </IconButton>
                <IconButton aria-label="last">
                    <LastPageIcon />
                </IconButton>
            </LeftButtonsContainer>
            <RightButtonsContainer>
                <IconButton aria-label="settings" onClick={toggleSideMenu}>
                    <SettingsIcon />
                </IconButton>
            </RightButtonsContainer>
        </StyledTopToolbar>
    );
}

export default TopToolbar;