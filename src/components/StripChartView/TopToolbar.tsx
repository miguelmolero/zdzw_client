import React from "react";
import { IconButton } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LastPageIcon from '@mui/icons-material/LastPage';
import { 
    LeftButtonsContainer, 
    StyledTopToolbar 
} from "../styles/TopToolbarStyles";
import { useDataHandlerContext } from '../../context/DataHandlerContext';


const TopToolbar : React.FC = () => {
    const {getInspectionData, filtersData} = useDataHandlerContext();

    const getData = (navigation: string) => {
        getInspectionData(navigation, filtersData);
    }

    return (
        <StyledTopToolbar>
            <LeftButtonsContainer>
                <IconButton aria-label="first" onClick={() => getData("first")}>
                    <FirstPageIcon />
                </IconButton>
                <IconButton aria-label="previous" onClick={() => getData("previous")}>
                    <NavigateBeforeIcon />
                </IconButton>
                <IconButton aria-label="next" onClick={() => getData("next")}>
                    <NavigateNextIcon />
                </IconButton>
                <IconButton aria-label="last" onClick={() => getData("last")}>
                    <LastPageIcon />
                </IconButton>
            </LeftButtonsContainer>
        </StyledTopToolbar>
    );
}

export default TopToolbar;