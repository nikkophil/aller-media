import * as React from "react";
import { useState } from "react";
import { IArticle } from "../../types";
import "./article.css";

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
    <div
      style={{
        gridColumn: "span " + article.width,
        margin: "5px",
        background: "gray",
        border: "2px solid black",
      }}
    >
      <a href={article.url}>
        <img
          style={{
            marginTop: "5px",
            border: "2px solid",
          }}
          src={article.imageUrl}
          alt="Could not find"
        />
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
          <button className="button" onClick={() => setActive(!isActive)}>
            {" "}
            Edit Title
          </button>
        </div>
      )}
    </div>
  );
};

export default Article;
