import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@webclient/components/Layout/Layout";
import Title from "@webclient/components/UI/Title/Title";
import Button from "@webclient/components/UI/Button/Button";

export default function WorkspacePage() {
  const router = useRouter();

  const { workspaceid } = router.query;

  return (
    <>
      <Head>
        <title>Datapad - Workspace #{workspaceid}</title>
        <meta
          name="description"
          content={`Datapad - Workspace #${workspaceid}`}
        />
      </Head>

      <Layout title={`Workspace #${workspaceid}`}>
        <Title icon="👋" title={`Workspace #${workspaceid}`} />

        <div className="mt-5">
          <Link href={`/${workspaceid}/dashboards`}>
            <Button
              className="datapad-button"
              loading={false}
              title="See Dashboards Available"
            />
          </Link>
        </div>
      </Layout>
    </>
  );
}
