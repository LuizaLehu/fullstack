import Link from "next/link";
import { TItem } from "@/types/data";
import { EditButton, DeleteButton } from "../buttons";

type ListItemProps = {
  item: TItem;
};

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <li className="list-group-item">
      <div className="list-group-item">
        <div className="list-group-item list-group-item-primary font-weight-bold">
          <span className="font-weight-bold">ID:</span>
          {item.id}
        </div>
        <div className="list-group-item font-weight-bold">
          <span className="font-weight-bold">Application Hostname:</span>
          {item.applicationHostname}
        </div>
        <div className="list-group-item font-weight-bold">
          Timestamp:{item.timestamp}
        </div>
        <div className="list-group-item font-weight-bold">Type:{item.type}</div>
      </div>
      <div className="mb-4 d-flex justify-content-center">
        <EditButton id={item.id} />
        <DeleteButton id={item.id} />
      </div>
      <div className="text-center">
        <Link className="btn btn-secondary btn-lg w-25" href={`/${item.id}`}>
          Details →
        </Link>
      </div>
    </li>
  );
};

export default ListItem;
