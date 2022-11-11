import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "@webclient/components/Layout/Layout";
import Button from "@webclient/components/UI/Button/Button";
import Title from "@webclient/components/UI/Title/Title";
import { useDashboardFetch } from "@core/hooks/data/use-dashboard-fetch";
import Link from "next/link";
import { MetricChart } from "@webclient/components/Dashboards/MetricChart";
import { PlusIcon } from "@heroicons/react/solid";
import AddNewKpiSidePanel from "@webclient/components/AddNewKpi/AddNewKpiSidePanel";
import { useState } from "react";

function DashboardInner(props) {
  const { workspaceid, dashboardid } = props;
  const [showSidePanel, setShowSidePanel] = useState(false);

  const { isError, error, isSuccess, status, data } = useDashboardFetch(
    workspaceid as string,
    dashboardid as string
  );

  if (isError) {
    return <>error: {JSON.stringify(error)}</>;
  }

  if (!isSuccess || data === undefined) {
    return <>status: {status}...</>;
  }

  return (
    <>
      <div className="w-full flex flex-row justify-between items-start">
        <Title
          icon={data.icon}
          title={data.title}
          subtitle={data.description}
        />

        <Button
          className="datapad-button"
          loading={false}
          title="Add New KPI"
          buttonImage={<PlusIcon className="h-4 w-4" />}
          onClick={() => {
            setShowSidePanel(true);
          }}
        />
      </div>

      <div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {Object.entries(data.metrics).map(([metricId, metric]) => {
          return <MetricChart key={metricId} metric={metric} />;
        })}
      </div>
      <AddNewKpiSidePanel
        workspaceid={workspaceid}
        showSidePanel={showSidePanel}
        setShowSidePanel={setShowSidePanel}
      />
    </>
  );
}

export default function DashboardPage() {
  const router = useRouter();

  const { workspaceid, dashboardid } = router.query;

  // sorry for this next.js
  if (workspaceid === undefined || dashboardid === undefined) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          Datapad - Workspace #{workspaceid} - Dashboard #${dashboardid}
        </title>
        <meta
          name="description"
          content={`Datapad - Workspace #${workspaceid} - Dashboard #${dashboardid}`}
        />
      </Head>

      <Layout title={`Workspace #${workspaceid} - Dashboard #${dashboardid}`}>
        <div className="mt-5">
          <DashboardInner workspaceid={workspaceid} dashboardid={dashboardid} />
        </div>

        <ul className="mt-5">
          <li>
            <Link href={`/${workspaceid}/dashboards/`}>
              <Button
                className="datapad-button"
                loading={false}
                title="Go Back"
              />
            </Link>
          </li>
        </ul>
      </Layout>
    </>
  );
}
