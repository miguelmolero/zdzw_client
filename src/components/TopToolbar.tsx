import React from "react";
import { IconButton } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LastPageIcon from '@mui/icons-material/LastPage';
import { 
    LeftButtonsContainer, 
    StyledTopToolbar 
} from "./styles/TopToolbarStyles";

const TopToolbar : React.FC = () => {
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
        </StyledTopToolbar>
    );
}

export default TopToolbar;