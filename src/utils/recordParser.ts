import { RecordDataRaw, RecordData, StripDataRaw, LimitedRecord, DefectsItem, DefectsData } from "../types/inspection_types";

export function parseRecordData(jsonData: RecordDataRaw): RecordData {
    const recordData: RecordData = {
        meta_data: {
            record_id: jsonData.payload_data.meta_data.record_id,
            setup_id: jsonData.payload_data.meta_data.setup_id,
            job_id: jsonData.payload_data.meta_data.job_id,
            name: jsonData.payload_data.meta_data.name,
            timestamp: jsonData.payload_data.meta_data.timestamp,
            disposition: jsonData.payload_data.meta_data.disposition,
            factory_id: jsonData.localization_data.factory_id,
            device_id: jsonData.localization_data.device_id,
            factory_name: jsonData.localization_data.factory_name,
            device_name: jsonData.localization_data.device_name,
        },
        strip_data: jsonData.payload_data.strip_data.map((strip: StripDataRaw) => ({
            channel_id: strip.channel_id,
            gate_id: strip.gate_id,
            sample: strip.sample,
            distance: strip.distance,
            amplitude: strip.amplitude,
            tof: strip.tof,
            amp_damages: strip.amp_damages,
            tof_damages: strip.tof_damages,
            defects_data: {
                defects_amp: strip.defects_data?.defects_amp?.map((defect : DefectsItem) => ({
                    name: defect.name,
                    start_index: defect.start_index,
                    end_index: defect.end_index,
                    start_feature_value: defect.start_feature_value,
                    end_feature_value: defect.end_feature_value,
                    risk_level: defect.risk_level,
                })) ?? [],
                defects_tof: strip.defects_data?.defects_tof?.map((defect : DefectsItem) => ({
                    name: defect.name,
                    start_index: defect.start_index,
                    end_index: defect.end_index,
                    start_feature_value: defect.start_feature_value,
                    end_feature_value: defect.end_feature_value,
                    risk_level: defect.risk_level,
                })) ?? [],
            } as DefectsData,
        })),
    };
    return recordData;
}

export const areRecordsEqual = (record1: LimitedRecord, record2: LimitedRecord) : boolean => {
    return (
        record1.factory_id === record2.factory_id && 
        record1.device_id === record2.device_id && 
        record1.record_id === record2.record_id
    )
}
