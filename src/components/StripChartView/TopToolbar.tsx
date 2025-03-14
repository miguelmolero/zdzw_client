import React from "react";
import { IconButton, Tooltip } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LastPageIcon from '@mui/icons-material/LastPage';
import { 
    LeftButtonsContainer, 
    StyledTopToolbar 
} from "./styles/TopToolbarStyles";
import { useStripChartContext } from '../../context/StripChartContext';

const TopToolbar : React.FC = () => {
    const { getInspectionData, inspectionData } = useStripChartContext();

    const getData = (navigation: string) => {
        if (inspectionData.strip_data.length == 0) {
            if (navigation === "next") {
                navigation = "last";
            }
            if (navigation === "previous") {
                navigation = "first";
            }
        }
        getInspectionData(navigation);
    }

    return (
        <StyledTopToolbar>
            <LeftButtonsContainer>
                <Tooltip placement="top" title="First" arrow>
                    <IconButton aria-label="first" onClick={() => getData("first")}>
                        <FirstPageIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip placement="top" title="Previous" arrow>
                    <IconButton aria-label="previous" onClick={() => getData("previous")}>
                        <NavigateBeforeIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip placement="top" title="Next" arrow>
                    <IconButton aria-label="next" onClick={() => getData("next")}>
                        <NavigateNextIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip placement="top" title="Last" arrow>
                    <IconButton aria-label="last" onClick={() => getData("last")}>
                        <LastPageIcon />
                    </IconButton>
                </Tooltip>
            </LeftButtonsContainer>
        </StyledTopToolbar>
    );
}

export default TopToolbar;