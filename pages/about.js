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

export default function about() {
  return (
    <Container>
      <Meta pageTitle="アバウト" pageDesc="About" />

      <Hero title="About" subtitle="About this site and me" />

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              Next.jsを触ってみたくて作ったサイトです。適度に更新していこうと思います。
              <br />
              読んだ本の感想を書いていきたいです。
            </p>
            <h2>自己紹介</h2>
            <p>
              派遣のSEをしています。大学では化学を専攻してました。
              <br />
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
