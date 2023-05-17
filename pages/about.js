import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import Contact from "components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";
import Image from "next/legacy/image";
import eyecatch from "images/about.jpg";

export default function about() {
  return (
    <Container>
      <Meta
        pageTitle="アバウト"
        pageDesc="About"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <Hero title="About" subtitle="About this site and me" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width:1152px)1152px,100vw"
          placeholder="blur"
          priority
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              Reactを触ってみたくて作ったサイトです。適度に更新していこうと思います。
            </p>
            <p>読んだ本の感想を書いていきたいです。</p>
            <h2>自己紹介</h2>
            <p>派遣のSEをしています。大学では化学を専攻してました。</p>
            <p>
              プログラマとしてスキルアップすれば正社員への道が拓けないかな、、、など思いながら勉強しています。
            </p>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
