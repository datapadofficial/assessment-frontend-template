import { fetcher, useFetcher } from "../../services/fetcher/index";

type Metric = any;

const useMetricsAllFetch = (
  workspaceId: string,
  immediate?: boolean,
) => {
  return useFetcher<Metric[]>(
    "GET",
    `/v2/workspaces/${workspaceId}/metrics`,
    { immediate, cacheRequest: false },
  );
};

function mockMetricsAllFetch() {
  fetcher.mocks.add(
    "GET",
    /\/v2\/workspaces\/[0-9]+\/metrics$/,
    // @ts-ignore
    (request: any) => {
      const mockContent = [
        // single value chart
        {
          title: "Burnout",
          size: "small",
          icon: "🔥",
          data: [
            {
              "name": "Metric 1-1",
              "time": new Date("2022-08-19T00:52:04Z"),
              "value": 100,
            },
            {
              "name": "Metric 1-2",
              "time": new Date("2022-08-20T00:52:04Z"),
              "value": 200,
            },
            {
              "name": "Metric 1-3",
              "time": new Date("2022-08-21T00:52:04Z"),
              "value": 300,
            },
          ],
          // chart_type: "SINGLE_VALUE_CHART",
          color: "RED",
          goal: 500,
          value: 100,
          source: null,
          sys: {
            created_at: new Date(),
            created_by: { full_name: "Eser Ozvataf" },
          },
        },

        // bar chart
        {
          title: "Moisture",
          size: "small",
          icon: "💧",
          data: [
            {
              "name": "Metric 1-1",
              "time": new Date("2022-08-19T00:52:04Z"),
              "value": 100,
            },
            {
              "name": "Metric 1-2",
              "time": new Date("2022-08-20T00:52:04Z"),
              "value": 200,
            },
            {
              "name": "Metric 1-3",
              "time": new Date("2022-08-21T00:52:04Z"),
              "value": 300,
            },
          ],
          chart_type: "BAR_CHART",
          color: "BLUE",
          goal: 400,
          value: 200,
          source: null,
          sys: {
            created_at: new Date(),
            created_by: { full_name: "Eser Ozvataf" },
          },
        },

        // pie chart
        {
          title: "Pie",
          size: "small",
          icon: "🍰",
          data: [
            {
              name: "Metric 2-1",
              value: 50,
              time: Date.now(),
            },
            {
              name: "Metric 2-2",
              value: 40,
              time: Date.now(),
            },
            {
              name: "Metric 2-3",
              value: 30,
              time: Date.now(),
            },
          ],
          chart_type: "PIE_CHART",
          color: "GREEN",
          goal: 400,
          value: 200,
          source: null,
          sys: {
            created_at: new Date(),
            created_by: { full_name: "Eser Ozvataf" },
          },
        },

        // line chart
        {
          title: "Incline",
          size: "medium",
          icon: "🎒",
          data: [
            {
              name: "January",
              time: new Date("2022-08-19T00:52:04Z"),
              value: 65,
            },
            {
              name: "February",
              time: new Date("2022-08-20T00:52:04Z"),
              value: 59,
            },
            {
              name: "March",
              time: new Date("2022-08-21T00:52:04Z"),
              value: 70,
            },
            {
              name: "April",
              time: new Date("2022-08-21T00:52:04Z"),
              value: 72,
            },
            {
              name: "May",
              time: new Date("2022-08-21T00:52:04Z"),
              value: 56,
            },
            {
              name: "June",
              time: new Date("2022-08-21T00:52:04Z"),
              value: 55,
            },
            {
              name: "July",
              time: new Date("2022-08-21T00:52:04Z"),
              value: 40,
            },
          ],
          chart_type: "LINE_CHART",
          color: "YELLOW",
          goal: 80,
          value: 40,
          source: null,
          sys: {
            created_at: new Date(),
            created_by: { full_name: "Eser Ozvataf" },
          },
        },

        // table chart
        {
          title: "Excel",
          size: "small",
          icon: "📈",
          header: {
            title: "1st Row",
            dimension: "Başlık",
            value: "Değer",
          },
          data: [
            {
              name: "A metriği",
              value: 100,
              time: new Date("2022-08-19T19:39:12Z"),
            },
            {
              name: "B metriği",
              value: 200,
              time: new Date("2022-08-19T19:39:12Z"),
            },
            {
              name: "C metriği",
              value: 300,
              time: new Date("2022-08-19T19:39:12Z"),
            },
          ],
          chart_type: "TABLE_CHART",
          color: "YELLOW",
          goal: 400,
          value: 200,
          source: {
            type: "GOOGLE_SHEETS",
            source_url: "gs://", // ??
          },
          sys: {
            created_at: new Date(),
            created_by: { full_name: "Eser Ozvataf" },
          },
        },

        // single value chart
        {
          title: "Happiness",
          size: "small",
          icon: "😀",
          data: [
            {
              "name": "Metric 1-1",
              "time": new Date("2022-08-19T00:52:04Z"),
              "value": 100,
            },
            {
              "name": "Metric 1-2",
              "time": new Date("2022-08-20T00:52:04Z"),
              "value": 200,
            },
            {
              "name": "Metric 1-3",
              "time": new Date("2022-08-21T00:52:04Z"),
              "value": 300,
            },
          ],
          // chart_type: "SINGLE_VALUE_CHART",
          color: "PURPLE",
          goal: 90,
          value: 74,
          source: null,
          sys: {
            created_at: new Date(),
            created_by: { full_name: "Eser Ozvataf" },
          },
        },

        // single value chart
        {
          title: "Balance",
          size: "small",
          icon: "⚖",
          data: [
            {
              "name": "Metric 1-1",
              "time": new Date("2022-08-19T00:52:04Z"),
              "value": 100,
            },
            {
              "name": "Metric 1-2",
              "time": new Date("2022-08-20T00:52:04Z"),
              "value": 200,
            },
            {
              "name": "Metric 1-3",
              "time": new Date("2022-08-21T00:52:04Z"),
              "value": 300,
            },
          ],
          // chart_type: "SINGLE_VALUE_CHART",
          color: "ORANGE",
          goal: 400,
          value: 200,
          source: null,
          sys: {
            created_at: new Date(),
            created_by: { full_name: "Eser Ozvataf" },
          },
        },

        // single value chart
        {
          title: "Income",
          size: "small",
          icon: "💸",
          data: [
            {
              "name": "Metric 1-1",
              "time": new Date("2022-08-19T00:52:04Z"),
              "value": 100,
            },
            {
              "name": "Metric 1-2",
              "time": new Date("2022-08-20T00:52:04Z"),
              "value": 200,
            },
            {
              "name": "Metric 1-3",
              "time": new Date("2022-08-21T00:52:04Z"),
              "value": 300,
            },
          ],
          // chart_type: "SINGLE_VALUE_CHART",
          color: "RED",
          goal: 400,
          value: 200,
          source: null,
          sys: {
            created_at: new Date("2022-08-01T00:00:00Z"),
            created_by: { full_name: "Eser Ozvataf" },
            updated_at: new Date("2022-08-02T00:00:00Z"),
            updated_by: { full_name: "Eser Ozvataf" },
          },
        },
      ];

      return new Response(
        JSON.stringify(mockContent),
        {
          status: 200,
          statusText: "OK",
          headers: {
            "content-type": "application/json",
          },
        },
      );
    },
  );
}

export {
  mockMetricsAllFetch,
  useMetricsAllFetch,
  useMetricsAllFetch as default,
};
