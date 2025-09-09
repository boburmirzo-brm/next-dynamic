import Link from 'next/link';
import { memo } from 'react';

const Page = async () => {
  const response = await fetch("https://dummyjson.com/products")
  const data = await response.json()
  return (
    <div className="Page">
      <h2>Page</h2>
      {
        data?.products?.map((item:any) => (
          <div key={item.id}>
            <Link href={`/product/${item.id}`}>{item.title}</Link>
            <hr />
          </div>
        ))
      }
    </div>
  );
};

export default memo(Page);