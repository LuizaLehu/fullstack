import { TItem, TTag } from "@/types/data";
import { DeleteButton, EditButton } from "./buttons";
import { Tag } from "./tag";

const textStyle = {
  marginLeft: "20px",
};

export default function PageItem({ item }: { item: TItem }) {
  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ backgroundColor: "lightgrey" }}>
            <div className="card-body">
              <h1 className="mb-4 text-center text-primary font-weight-bold display-6">
                Item Details
              </h1>
              <p className="card-title" style={textStyle}>
                ID: <strong>{item.id}</strong>
              </p>
              <p className="card-text" style={textStyle}>
                Application Hostname:{" "}
                <strong>{item.applicationHostname}</strong>
              </p>
              <p className="card-text" style={textStyle}>
                Timestramp: <strong>{item.timestamp}</strong>
              </p>
              <p className="card-text" style={textStyle}>
                Type: <strong>{item.type}</strong>
              </p>
              <p className="card-text" style={textStyle}>
                User: <strong>{item.user}</strong>
              </p>
              <p className="card-text" style={textStyle}>
                Country: <strong>{item.country}</strong>
              </p>
              <p className="card-text" style={textStyle}>
                Ip: <strong>{item.ip}</strong>
              </p>
              <p className="card-text" style={textStyle}>
                Device: <strong>{item.device}</strong>
              </p>
              <p className="card-text" style={textStyle}>
                IsDangerous: <strong>{item.isDangerous}</strong>
              </p>
              {/* Tags */}
              <div className="card-text" style={textStyle}>
                Tags:
              </div>
              <ul className=" flex gap-4">
                {item.tags.map((tag: TTag, index: number) => (
                  <Tag {...tag} />
                ))}
              </ul>

              {/* Other details */}
              <div className="flex justify-center gap-4 p-4">
                <EditButton id={item.id} />
                <DeleteButton id={item.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
