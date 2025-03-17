import React from "react";
import { Container, Stack } from "@mui/material";
import ArticleAccordion from "../components/ArticleAccordion";

const articles = [
    { id: 1, title: "Статья 1", content: "Это первая статья." },
    { id: 2, title: "Статья 2", content: "Это вторая статья." },
    { id: 3, title: "Статья 3", content: "Это третья статья." },
];

const ArticlesPage = () => {
    return (
        <Container maxWidth="md">
            <Stack spacing={2}>
                {articles.map((article, index) => (
                    <ArticleAccordion
                        key={article.id}
                        title={article.title}
                        content={article.content}
                        isOdd={index % 2 === 0}
                    />
                ))}
            </Stack>
        </Container>
    );
};

export default ArticlesPage;
