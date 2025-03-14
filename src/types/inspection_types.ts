export interface DefectsItem {
  name: string;
  start_index: number;
  end_index: number;
  start_feature_value: number;
  end_feature_value: number;
  risk_level: number;
}
export interface DefectsData {
  defects_amp: DefectsItem[];
  defects_tof: DefectsItem[];
}
export interface StripData {
  channel_id: number;
  gate_id: number;
  sample: number[];
  distance: number[];
  amplitude: number[];
  tof: number[];
  amp_damages?: number[];
  tof_damages?: number[];
  defects_data?: DefectsData;
}

export interface RecordMetaData {
  record_id: number;
  timestamp: number;
  setup_id: number;
  job_id: number;
  name: string;
  disposition: number;
  factory_id?: number;
  device_id?: number;
  factory_name?: string;
  device_name?: string;
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
  defects_data?: DefectsData;
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
  requested_record_id: number;
  start_date: number;
  end_date: number;
  disposition: number;
  factory_id: number;
  device_id: number;
  job_id: number;
  is_analysis: boolean;
}

export interface OrderFilters {
  order_type: OrderType;
  order_direction: OrderDirection;
}

export interface RequestedPayload {
  nav_filters: InspectionFilters;
  order_filters?: OrderFilters;
  loaded_record: LimitedRecord;
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

export enum DispositionType {
  Pass = 1,
  Fail = 2,
  Invalid = 3,
}