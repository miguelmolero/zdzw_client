export interface StatsData {
    id: number;
    total_count: number;
    pass_count: number;
    fail_count: number;
    invalid_count: number;
    pass_rate: number;
    fail_rate: number;
    invalid_rate: number;
}

export interface FactoryStatsData {
    factory_data: StatsData;
    device_stats: StatsData[];
}

export interface StatisticsData {
    factory_stats: FactoryStatsData[];
}

export interface FactoryStatsDataRaw {
    id: number;
    total_count: number;
    pass_count: number;
    fail_count: number;
    invalid_count: number;
    pass_rate: number;
    fail_rate: number;
    invalid_rate: number;
    device_stats: StatsData[];
}

export interface StatisticsDataRaw {
    factory_stats: FactoryStatsDataRaw[];
}