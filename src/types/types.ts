interface StripData {
  channel_id: number;
  gate_id: number;
  sample: number[];
  distance: number[];
  amplitude: number[];
  tof: number[];
}

export interface RecordData {
  record_id: number;
  setup_id: number;
  job_id: number;
  name: string;
  disposition: number;
  strip_data: StripData[];
}

export interface StripDataRaw {
  channel_id: number;
  gate_id: number;
  sample: number[];
  distance: number[];
  amplitude: number[];
  tof: number[];
}

interface JsonDataPayload {
  record_id: number;
  setup_id: number;
  job_id: number;
  name: string;
  disposition: number;
  strip_data: StripDataRaw[];
}

export interface JsonData {
  success: boolean;
  error: {
    code: number;
    msg: string;
    errors: null | string;
  };
  payload: JsonDataPayload;
}
