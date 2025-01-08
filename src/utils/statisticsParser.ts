import {
    StatisticsDataRaw,
    FactoryStatsDataRaw,
    StatsData,
    StatisticsData
} from "../types/statistics_types";

export function parseStatisticsData(jsonData: StatisticsDataRaw): StatisticsData {
    const statisticsData: StatisticsData = {
        factory_stats: jsonData.factory_stats.map((factory: FactoryStatsDataRaw) => ({
            factory_data: {
                id: factory.id,
                total_count: factory.total_count,
                pass_count: factory.pass_count,
                fail_count: factory.fail_count,
                invalid_count: factory.invalid_count,
                pass_rate: factory.pass_rate,
                fail_rate: factory.fail_rate,
                invalid_rate: factory.invalid_rate,
            },
            device_stats: factory.device_stats.map((device: StatsData) => ({
                id: device.id,
                total_count: device.total_count,
                pass_count: device.pass_count,
                fail_count: device.fail_count,
                invalid_count: device.invalid_count,
                pass_rate: device.pass_rate,
                fail_rate: device.fail_rate,
                invalid_rate: device.invalid_rate,
            })),
        })),
    };

    return statisticsData;
}