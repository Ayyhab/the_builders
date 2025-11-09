import ClientPage from "../../../components/client-dashboard/clientPage";
import { data } from "../../../dummyData/data";

export default async function Page({ params }) {
  const { id } = await params;

  const client = data.find((item) => item.id === id);

  return <ClientPage client={client} />;
}
