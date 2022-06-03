import * as React from "react";
import { useState } from "react";
import { IArticle } from "../../types";

interface IArticleProps {
  article: IArticle;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Article: React.FunctionComponent<IArticleProps> = ({
  article,
  handleSubmit,
  ...props
}: IArticleProps) => {
  const [isActive, setActive] = useState<boolean>(false);
  const [newTitle, setTitle] = useState<string>(article.title);

  return (
    <div style={{ gridColumn: "span " + article.width }}>
      <a href={article.url}>
        <img src={article.imageUrl} alt="Could not find" />
      </a>
      {isActive ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <div>
          <h1>{newTitle}</h1>
          <button onClick={() => setActive(!isActive)}></button>
        </div>
      )}
    </div>
  );
};

export default Article;
