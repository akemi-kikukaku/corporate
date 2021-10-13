import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Contact from '@/components/Contact';
import { newsBreadcrumb } from 'domains/unou';
import { MarkdownFileData } from 'models/';
import styles from 'styles/modules/NewsPage.module.scss';

const NewsPage: React.VFC<MarkdownFileData> = (props) => {
  const [breadcrumbList, setBreadcrumbList] =
    useState(newsBreadcrumb);

  useEffect(() => {
    const customList = [...newsBreadcrumb];
    customList.push({ name: props.frontmatter.title, path: '' });
    setBreadcrumbList([...customList]);
  }, [props.frontmatter.title]);

  return (
    <>
      <Head>
        <title>{props.frontmatter.title}</title>
      </Head>
      <Breadcrumb items={breadcrumbList} />
      <section className={`${styles.newsWrap} a-nbu`}>
        <div className={styles.date}>{props.frontmatter.date}</div>
        <div className={styles.title}>{props.frontmatter.title}</div>
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
    path.join('src', 'articles', 'news'),
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
    path.join('src', 'articles', 'news', `${params.slug}.md`),
    'utf-8',
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { props: { frontmatter, slug: params.slug, content } };
};

export default NewsPage;
