import { RecordDataRaw, RecordData, StripDataRaw } from "../types/inspection_types";

export function parseRecordData(jsonData: RecordDataRaw): RecordData {
  const recordData: RecordData = {
    meta_data: {
      record_id: jsonData.payload_data.meta_data.record_id,
      setup_id: jsonData.payload_data.meta_data.setup_id,
      job_id: jsonData.payload_data.meta_data.job_id,
      name: jsonData.payload_data.meta_data.name,
      timestamp: jsonData.payload_data.meta_data.timestamp,
      disposition: jsonData.payload_data.meta_data.disposition,
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
    })),
  };

  return recordData;
}
  