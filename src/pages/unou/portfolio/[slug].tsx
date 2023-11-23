import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Contact from '@/components/Contact';
import Categories from '@/components/common/Categories';
import { portfolioBreadcrumb } from 'constants/portfolioBreadcrumb';
import { MarkdownFileData } from 'models/';
import styles from 'styles/modules/PortfolioPage.module.scss';

const PortfolioPage: React.FC<MarkdownFileData> = (props) => {
  const [breadcrumbList, setBreadcrumbList] = useState(
    portfolioBreadcrumb,
  );

  useEffect(() => {
    const customList = [...portfolioBreadcrumb];
    customList.push({ name: props.frontmatter.title, path: '' });
    setBreadcrumbList([...customList]);
  }, [props.frontmatter.title]);
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
      <Breadcrumb items={breadcrumbList} />
      <section className={`${styles.portfolioWrap} a-nbu`}>
        <div className={styles.date}>{props.frontmatter.date}</div>
        <div className={styles.title}>{props.frontmatter.title}</div>
        <div className={styles.categoryBox}>
          <Categories categories={props.frontmatter.categories} />
        </div>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{
            __html: marked(props.content),
          }}
        />
      </section>
      <Contact />
    </>
  );
};

interface Params {
  params: {
    slug: string;
  };
}

export const getStaticPaths = async () => {
  const newsFiles = fs.readdirSync(
    path.join('src', 'articles', 'unou'),
  );

  const paths = newsFiles.map((filename) => ({
    params: {
      slug: filename.replace(/.md/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('src', 'articles', 'unou', `${params.slug}.md`),
    'utf-8',
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { props: { frontmatter, slug: params.slug, content } };
};

export default PortfolioPage;
