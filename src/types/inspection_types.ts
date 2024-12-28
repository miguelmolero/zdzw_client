export interface StripData {
  channel_id: number;
  gate_id: number;
  sample: number[];
  distance: number[];
  amplitude: number[];
  tof: number[];
  amp_damages?: number[];
  tof_damages?: number[];
}

export interface RecordMetaData {
  record_id: number;
  timestamp: number;
  setup_id: number;
  job_id: number;
  name: string;
  disposition: number;
}

export interface RecordMetaDataRaw {
  record_id: number;
  timestamp: number;
  setup_id: number;
  job_id: number;
  setup_updated_timestamp: number;
  name: string;
  disposition: number;
  is_rotational: boolean;
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
  amp_damages?: number[];
  tof_damages?: number[];
}

export interface PayloadData {
  meta_data: RecordMetaDataRaw;
  strip_data: StripDataRaw[];
}

export interface RecordDataRaw {
  success: boolean;
  error: {
    code: number;
    msg: string;
    errors: null | string;
  };
  payload_data: PayloadData;
}

export interface ResponseData {
  max_record_id?: number;
  min_record_id?: number;
  data: RecordDataRaw;
}

export interface InspectionFilters {
  current_record_id: number;
  requested_record_id: number;
  start_date: number;
  end_date: number;
  disposition: number;
  apply_filters: boolean;
}
