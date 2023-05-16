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

      <Hero title="About" subtitle="About development activities" />

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
              next.jsを勉強したくて作ったサイトです。適度に更新していけたらなと思っています。
            </p>

            <h2>自己紹介</h2>

            <p>
              派遣のSEをしています。大学の専攻は化学です。SEになったので、研究で少し触ったシミュレーションを自作できたらいいなと思っています。
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
