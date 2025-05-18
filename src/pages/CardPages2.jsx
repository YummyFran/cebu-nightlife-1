import React from 'react';
import { useParams } from 'react-router-dom';
import pagesData from '../data/cardsPages';

const CardPages2 = () => {
  const { category, slug } = useParams();
  const PageComponent = pagesData[category]?.[slug];

  if (!PageComponent) {
    return <div>Page not found</div>;
  }

  return <PageComponent />;
};

export default CardPages2;