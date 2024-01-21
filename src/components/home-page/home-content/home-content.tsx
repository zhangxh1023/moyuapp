import { getListContent } from '@/lib/fetch-supabase';
import { Website, getIconNameByWebsite } from '@/lib/website';
import dayjs from 'dayjs';
import Image from 'next/image';

export default async function HomeContent() {
  const contents = await getListContent(Website.weibo, 1, 20);
  // const iconPath = '';
  return (
    <article className='p-6'>
      {contents.map(data => {
        const iconPath = `/websiteIcon/${getIconNameByWebsite(data.website)}.svg`;
        return (
          <div key={data.id} className='p-2 border-b-2'>
            <a className='block font-semibold text-slate-900 truncate p-2' href={data.url} target='_blank'>{data.title}</a>
            <div className='flex p-2'>
              <Image
                src={iconPath}
                alt={data.website}
                width='18'
                height='18'
                className='flex-none rounded-md mr-4' />
              <div className='px-1.5 ring-1 ring-slate-200 rounded dark:ring-slate-600 mr-4'>
                {dayjs(data.createTime).format('YYYY-MM-DD HH:mm:ss')}
              </div>
              <div className='px-1.5 ring-1 ring-slate-200 rounded dark:ring-slate-600 mr-4'>
                {dayjs(data.updateTime).format('YYYY-MM-DD HH:mm:ss')}
              </div>
              <div className='px-1.5 ring-1 ring-slate-200 rounded dark:ring-slate-600 mr-4'>
                {data.latestRank}
              </div>
            </div>
          </div>
        )
      })}
    </article>
  );
}
