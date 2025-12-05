'use client';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { getTrendData, transformTrendDataForChart } from '@/services/dashboardService';
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export const description = 'A line chart';

const chartConfig = {
  value: {
    label: 'Applications',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

function ApplicationTrend() {
  const [year, setYear] = useState('2025');
  const [country, setCountry] = useState('all');
  const [service, setService] = useState('all');
  const [chartData, setChartData] = useState<
    { month: string; value: number; monthNumber: number }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch trend data when filters change
  useEffect(() => {
    const fetchTrendData = async () => {
      setIsLoading(true);
      try {
        const trendData = await getTrendData({
          year,
          service: service === 'all' ? undefined : service,
          country: country === 'all' ? undefined : country,
        });

        const transformedData = transformTrendDataForChart(trendData);
        setChartData(transformedData);
      } catch (error) {
        console.error('Error fetching trend data:', error);
        setChartData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendData();
  }, [year, country, service]);
  return (
    <Card>
      <CardHeader className="flex items-center justify-between flex-wrap">
        <CardTitle>Application Trend</CardTitle>
        <div className="flex items-center gap-2  overflow-auto">
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-26 h-8">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
          <Select value={country} onValueChange={setCountry}>
            <SelectTrigger className="w-32 h-8">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              <SelectItem value="USA">USA</SelectItem>
              <SelectItem value="UK">UK</SelectItem>
              <SelectItem value="India">India</SelectItem>
            </SelectContent>
          </Select>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger className="w-32 h-8">
              <SelectValue placeholder="Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Services</SelectItem>
              <SelectItem value="CourierDelivery">Courier Delivery</SelectItem>
              <SelectItem value="Visa">Visa</SelectItem>
              <SelectItem value="Passport">Passport</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="mt-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span className="ml-2">Loading trend data...</span>
          </div>
        ) : chartData.length === 0 ? (
          <div className="flex items-center justify-center h-64 text-muted-foreground">
            No data available for the selected filters
          </div>
        ) : (
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis tickLine={false} axisLine={false} width={25} height={25} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Line
                dataKey="value"
                type="natural"
                stroke="var(--color-value)"
                strokeWidth={2}
                width={10}
                markerWidth={10}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}

export default ApplicationTrend;
