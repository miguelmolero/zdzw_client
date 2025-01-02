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

export interface LocalizationData {
  factory_id: number;
  factory_name: string;
  device_id: number;
  device_name: string;
}

export interface RecordDataRaw {
  success: boolean;
  error: {
    code: number;
    msg: string;
    errors: null | string;
  };
  payload_data: PayloadData;
  localization_data: LocalizationData;
}

export interface ResponseData {
  max_record?: LimitedRecord 
  min_record?: LimitedRecord
  data: RecordDataRaw;
}
export interface LimitedRecord {
  factory_id: number;
  device_id: number;
  record_id: number;
}

export interface InspectionFilters {
  current_record_id: number;
  requested_record_id: number;
  start_date: number;
  end_date: number;
  disposition: number;
  factory_id: number;
  device_id: number;
  apply_filters: boolean;
}

export enum XAxisUnits {
  Sample = "sample",
  Distance = "distance",
}

export enum FeatureType {
  Amplitude = "amplitude",
  TOF = "tof",
}


export enum OrderType {
  Date = "date",
  Pass = "pass",
  Fail = "fail",
  Invalid = "invalid",
}

export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}
