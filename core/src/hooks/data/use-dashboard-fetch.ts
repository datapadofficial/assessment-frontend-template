import { fetcher, useFetcher } from "../../services/fetcher/index";

type Dashboard = any;

const useDashboardFetch = (
  workspaceId: string,
  dashboardId: string,
  immediate?: boolean,
) => {
  return useFetcher<Dashboard>(
    "GET",
    `/v2/workspaces/${workspaceId}/dashboards/${dashboardId}`,
    { immediate, cacheRequest: false },
  );
};

function mockDashboardFetch() {
  fetcher.mocks.add(
    "GET",
    /\/v2\/workspaces\/[0-9]+\/dashboards\/[0-9]+$/,
    // @ts-ignore
    (request: any) => {
      const mockContent = {
        title: "Sample Dashboard",
        icon: "📊",
        description: "Testing dashboard for mock data",
        metrics: [
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
        ],
        sys: {
          created_at: new Date(),
          created_by: { full_name: "Eser Ozvataf" },
        },
      };

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

export { mockDashboardFetch, useDashboardFetch, useDashboardFetch as default };
