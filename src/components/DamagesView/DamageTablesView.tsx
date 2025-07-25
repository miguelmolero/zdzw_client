import React from "react";
import { FeatureType, StripData } from "../../types/inspection_types";
import {
    TablesContainer,
} from "./styles/DamageTablesViewStyles";
import TableItem from "./DamagesTableItem";
import { useDataHandlerContext } from "../../context/DataHandlerContext";



interface DamageTablesViewProps {
    strip_data: StripData[];
}

const DamageTablesView: React.FC<DamageTablesViewProps> = ({ strip_data }) => {
    const { yAxis } = useDataHandlerContext();

    return (
        <TablesContainer>
            {strip_data.map((strip) => (
                <TableItem
                    key={`${strip.channel_id}-${strip.gate_id}`}
                    table_data={
                        yAxis == FeatureType.Amplitude
                            ? strip.defects_data?.defects_amp || []
                            : strip.defects_data?.defects_tof || []
                    }
                    channel_id={strip.channel_id}
                    gate_id={strip.gate_id}
                />
            ))}
        </TablesContainer>
    );
};

export default DamageTablesView;