import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@webclient/components/Layout/Layout";
import Title from "@webclient/components/UI/Title/Title";

export default function DashboardsPage() {
  const router = useRouter();

  const { workspaceid } = router.query;

  const dashboards = [
    {
      _id: 1,
      title: "Dashboard #1",
    },
  ];

  return (
    <>
      <Head>
        <title>Datapad - Workspace #{workspaceid} - Dashboards Index</title>
        <meta
          name="description"
          content={`Datapad - Workspace #${workspaceid} - Dashboards Index`}
        />
      </Head>

      <Layout title={`Workspace #${workspaceid} Dashboards`}>
        <Title
          icon="👋"
          title={`Workspace #${workspaceid} Dashboards`}
          subtitle="Your available dashboards are listing here"
        />

        <ul className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {dashboards.map((dashboard) => (
            <li key={dashboard._id}>
              <Link
                href={`/${workspaceid}/dashboards/${dashboard._id}`}
              >
                <a>
                  <div className="flex flex-col h-full shadow-sm dark:bg-slate-800 bg-white rounded-lg p-4 group cursor-hand">
                    {dashboard.title}
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
