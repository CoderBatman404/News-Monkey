import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)



  const capitalize = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(5)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    const data = await fetch(url);
    props.setProgress(30)
    const parsedData = await data.json();
    props.setProgress(70)
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults) // Correctly set totalResults
    setloading(false)

    props.setProgress(100)

  }

  useEffect(() => {
    document.title = `News-Monkey: ${capitalize(props.category)}`
    updateNews()
    // eslint-disable-next-line 
  }, [])


  const fetchmore = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setpage(page + 1) // Update the page state
    const data = await fetch(url);
    const parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    setloading(false)
  }

  return (

    <div >
      <h3 className='text-center ' style={{marginTop :'70px',marginBottom:'20px'}} ><strong>News-Monkey</strong> - Top {capitalize(props.category)} Headlines</h3>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchmore} // Pass the function reference without invoking
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container  justify-content-center">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-3 mx-5 my-2" key={element.url}>
                <NewsItem
                  imageurl={element.urlToImage}
                  Title={element.title}
                  description={element.description ? element.description.slice(0, 100) : ''}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );

}

export default News;
