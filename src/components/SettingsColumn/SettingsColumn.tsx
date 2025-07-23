import React from 'react';
import {
    SettingsColumnContainer
} from './styles/SettingsColumStyles';
import FiltersBox from './FiltersBox';
import AxisSettings from './AxisSettings';
import OrderingBox from './OrderingBox';

interface SettingsColumnProps {
    isInspectionView?: boolean;
}

const SettingsColumn : React.FC<SettingsColumnProps> = ({ isInspectionView = false }) => {
    return (
        <SettingsColumnContainer>
            <FiltersBox />
            {isInspectionView ?
                <AxisSettings />
                :
                <OrderingBox />
            }
        </SettingsColumnContainer>
    );
};

export default SettingsColumn;
