import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Menu from '@/components/Menu';
import PortfolioList from '@/components/PortfolioList';
import SectionTitle from '@/components/common/SectionTitle';
import { portfolioBreadcrumb } from 'constants/portfolioBreadcrumb';
import { unouPortfolioCategories } from 'constants/unouPortfolioCategories';
import { MarkdownFileData } from 'models/';
import styles from 'styles/modules/Illusts.module.scss';

interface Props {
  articles: MarkdownFileData[];
}

const IllustPortfolio: React.FC<Props> = ({ articles }) => {
  const [works, setWorks] = useState(articles);
  const [selectedItem, setSelectedItem] = useState('all');

  const selectItem = (type: string) => {
    const filter = (data: MarkdownFileData[]) => {
      const n = data.filter((d) => {
        return d.frontmatter.categories.includes(type);
      });
      return n;
    };
    filter(articles);
    type === 'all'
      ? setWorks(articles)
      : setWorks(
          articles.filter((article) =>
            article.frontmatter.categories.includes(type),
          ),
        );
    setSelectedItem(type);
  };

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
      <Breadcrumb items={portfolioBreadcrumb} />
      <SectionTitle title={'Portfolio'} />
      <section className={`${styles.workWrap} a-nbu`}>
        <Menu
          selectedItem={selectedItem}
          items={unouPortfolioCategories}
          onClick={selectItem}
        />
      </section>
      <section className={`${styles.works} a-nbu`}>
        <PortfolioList items={works} isPage />
        <p className={styles.note}>
          ※
          公開している事例はごく一部です。より詳しい事例は直接お問い合わせください。
        </p>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('src', 'articles', 'unou'));
  const articles = files.map((filename) => {
    const slug = filename.replace(/.md/, '');
    const markdownWithMeta = fs.readFileSync(
      path.join('src', 'articles', 'unou', filename),
      'utf-8',
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);
    return { slug, frontmatter, content };
  });

  return { props: { articles } };
};

export default IllustPortfolio;
