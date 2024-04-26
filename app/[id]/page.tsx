import PageItem from "@/components/page-item";

import { getItem } from "@/repository";

const ItemDetailsPage = async ({ params }: { params: { id: number } }) => {
  const item = await getItem(params.id);
  console.log(item);

  return item && <PageItem item={item} />;
};

export default ItemDetailsPage;
