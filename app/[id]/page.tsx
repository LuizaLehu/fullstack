import PageItem from '@/components/page-item';

import { getItem } from '@/repository';
import { TListItem } from '@/types/data';

const ItemDetailsPage = async ({ params }: { params: { id: number } }) => {
  const item = await getItem(params.id)
  console.log('wtf', item)

  return (
    item && <PageItem item={item} />
  );
};

export default ItemDetailsPage;