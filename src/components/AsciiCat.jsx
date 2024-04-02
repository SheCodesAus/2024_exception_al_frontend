const AsciiCat = () => {
  const asciiArt = `
    ∧＿∧
　 (｡･ω･｡)つ━☆・*。
  ⊂/     /    ・゜
　しーＪ          °。+ * 。　
　　　　                      .・゜
　　　　                      ゜｡ﾟﾟ･｡･ﾟﾟ。
　　　　                         　ﾟ。　 　｡ﾟ
                                              　ﾟ･｡･ﾟ
  `;

  return <pre dangerouslySetInnerHTML={{ __html: asciiArt }} />;
};

export default AsciiCat;
