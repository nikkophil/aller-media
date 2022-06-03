import React, { useState, useEffect } from "react";
import { IArticle } from "../types";
import Article from "../components/article";
import "./frontpage.css";

interface IFrontpageProps {}

const Frontpage: React.FunctionComponent<IFrontpageProps> = (props) => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://storage.googleapis.com/aller-structure-task/test_data.json"
      );
      const json = await data.json();

      for (var i = 0; i < json[0].length; i++) {
        for (var n = 0; n < json[0][i].columns.length; n++) {
          let article: IArticle = {
            width: json[0][i].columns[n].width,
            url: json[0][i].columns[n].url,
            title: json[0][i].columns[n].title,
            imageUrl: json[0][i].columns[n].imageUrl,
          };
          //console.log(article);
          setArticles((articles) => [...articles, article]);
        }
      }
    };

    fetchData().catch(console.error);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert("Title updated");
  };
  return (
    <div className="wrapper">
      {articles.map((article) => (
        <Article article={article} handleSubmit={handleSubmit} />
      ))}
    </div>
  );
};

export default Frontpage;
