import parse from "html-react-parser";
import Image from "next/legacy/image";
import cheerio from "cheerio";
import hljs from "highlight.js/lib/common";

export default function ConvertBody({ contentHTML }) {
  const $ = cheerio.load(contentHTML);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  const ret = $.html()
    .replace("<html><head></head><body>", "")
    .replace("</body></html>", "");

  const contentReact = parse(ret, {
    replace: (node) => {
      if (node.name === "img") {
        const { src, alt, width, height } = node.attribs;
        return (
          <Image
            layout="responsive"
            src={src}
            width={width}
            height={height}
            alt={alt}
            sizes="(min-width: 768px) 768px, 100vw"
          />
        );
      }
    },
  });

  return <>{contentReact}</>;
}
