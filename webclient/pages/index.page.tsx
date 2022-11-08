import Head from "next/head";
import Link from "next/link";
import Layout from "@webclient/components/Layout/Layout";
import Title from "@webclient/components/UI/Title/Title";

export default function WorkspacesPage() {
  const workspaces = [
    {
      _id: 1,
      title: "Workspace #1",
    },
  ];

  return (
    <>
      <Head>
        <title>Datapad - Workspaces Index</title>
        <meta name="description" content="Datapad - Workspaces Index" />
      </Head>

      <Layout title="Workspaces">
        <Title
          icon="👋"
          title="Workspaces"
          subtitle="Your available workspaces are listing here"
        />

        <ul className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {workspaces.map((workspace) => (
            <li key={workspace._id}>
              <Link href={`/${workspace._id}`}>
                <a>
                  <div className="flex flex-col h-full shadow-sm dark:bg-slate-800 bg-white rounded-lg p-4 group cursor-hand">
                    {workspace.title}
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
