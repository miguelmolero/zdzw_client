import { RecordDataRaw, RecordData, StripDataRaw } from "../types/types";

export function parseRecordData(jsonData: RecordDataRaw): RecordData {
  const recordData: RecordData = {
    meta_data: {
      record_id: jsonData.payload.record_id,
      setup_id: jsonData.payload.setup_id,
      job_id: jsonData.payload.job_id,
      name: jsonData.payload.name,
      timestamp: jsonData.payload.timestamp,
      disposition: jsonData.payload.disposition,
    },
    strip_data: jsonData.payload.strip_data.map((strip: StripDataRaw) => ({
      channel_id: strip.channel_id,
      gate_id: strip.gate_id,
      sample: strip.sample,
      distance: strip.distance,
      amplitude: strip.amplitude,
      tof: strip.tof,
    })),
  };

  return recordData;
}
  