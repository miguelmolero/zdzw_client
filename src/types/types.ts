export interface StripData {
  channel_id: number;
  gate_id: number;
  sample: number[];
  distance: number[];
  amplitude: number[];
  tof: number[];
}

export interface RecordMetaData {
  record_id: number;
  setup_id: number;
  job_id: number;
  name: string;
  timestamp: number;
  disposition: number;
}
export interface RecordData {
  meta_data: RecordMetaData;
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

export interface PayloadData {
  record_id: number;
  timestamp: number;
  setup_id: number;
  job_id: number;
  setup_updated_timestamp: number;
  name: string;
  disposition: number;
  is_rotational: boolean;
  strip_data: StripDataRaw[];
}

export interface RecordDataRaw {
  success: boolean;
  error: {
    code: number;
    msg: string;
    errors: null | string;
  };
  payload: PayloadData;
}

export interface InspectionFilters {
  current_record_id: number;
  requested_record_id: number;
  start_date: number;
  end_date: number;
  disposition: number;
}
