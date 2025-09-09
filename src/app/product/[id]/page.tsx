import { memo } from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const {id} = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();

  return (
    <div className="Page">
      <h2>{data?.title}</h2>
      <strong>{data?.price}</strong>
    </div>
  );
};

export default memo(Page);
