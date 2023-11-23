import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Contact from '@/components/Contact';
import ArrowLinkNormal from '@/components/common/ArrowLinkNormal';
import SectionTitle from '@/components/common/SectionTitle';
import { newsBreadcrumb } from 'constants/newsBreadcrumb';
import { MarkdownFileData } from 'models/';
import styles from 'styles/modules/News.module.scss';

interface Props {
  news: MarkdownFileData[];
}

const News: React.FC<Props> = ({ news }) => {
  const router = useRouter();
  const [hoveredItem, setIsHoverdItem] = useState(-1);

  return (
    <>
      <Head>
        <title>
          株式会社聴くと描く | 株式会社聴くと描く |
          流山市のデザイン会社・イラストレーター
        </title>
        <meta
          name='description'
          content='デザインに関わること、全部できます。相手の話や自分の内なる声に耳を傾ける、徹底的な「聴く」姿勢。聴いた事を咀嚼し、夢ある具体物へと「描く」力。この２つを両輪に、ワンストップで実現のお手伝いをします。'
        />
      </Head>
      <Breadcrumb items={newsBreadcrumb} />
      <div className='top-title-box'>
        <SectionTitle title={'News Archive'} />
      </div>
      <section className={`${styles.newsWrap} a-nbu`}>
        {news.map((item, i) => (
          <div
            className={styles.itemBox}
            key={i}
            onClick={() => router.push(`/unou/news/${item.slug}`)}
            onMouseEnter={() => setIsHoverdItem(i)}
            onMouseLeave={() => setIsHoverdItem(-1)}
          >
            <div className={styles.date}>
              {item.frontmatter.date.replace(/-/g, '.')}
            </div>
            <div className={styles.title}>
              {item.frontmatter.title}
            </div>
            <div className={styles.body}>
              <p>{item.content}</p>
            </div>
            <div className={styles.controller}>
              <ArrowLinkNormal
                text={'More'}
                isHover={hoveredItem === i}
                onClick={() => router.push('#')}
              />
            </div>
          </div>
        ))}
      </section>
      <Contact />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const newsFiles = fs.readdirSync(
    path.join('src', 'articles', 'news'),
  );

  const news = newsFiles.map((filename) => {
    const slug = filename.replace(/.md/, '');
    const markdownWithMeta = fs.readFileSync(
      path.join('src', 'articles', 'news', filename),
      'utf-8',
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);
    return { slug, frontmatter, content };
  });

  const orderedNews = news.sort((a, b) => {
    if (a.frontmatter.date > b.frontmatter.date) {
      return -1;
    } else {
      return 1;
    }
  });

  return { props: { news: orderedNews } };
};

export default News;
