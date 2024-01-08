import { getData } from '@/lib/db';

export default async function HomeContent() {

  const datas = await getData();
  return (
    <div>
      <span>title</span>
      <span>热度: xxx</span>
      {JSON.stringify(datas)}
      <div>
      </div>
    </div>
  );
}
