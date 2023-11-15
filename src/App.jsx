import * as React from "react";

const App = () => {

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'Firebase',
      url: 'https://firebase.google.com/',
      author: 'James Tamplin, Andrew Lee',
      num_comments: 4,
      points: 2,
      objectID: 2,
    },
    {
      title: 'Vue',
      url: 'https://vuejs.org/',
      author: 'Evan You',
      num_comments: 0,
      points: 1,
      objectID: 3,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState('React');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  console.log("App Renders");
  
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={stories.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))}/>
    </div>
  );
}

const List = ({list}) => (
      <ul>
        {list.map((item) => (
            <Item key={item.objectID} item={item}/>
          ))}
      </ul>
);

const Item = ({item}) => (
    <li>
      <span>
        <a href={item.url}> {item.title} </a>
      </span>  
      <span> {item.author} </span>
      <span> {item.num_comments} </span>
      <span> {item.points} </span>
    </li>
);

const Search = ({search, onSearch}) => (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={onSearch} />
    </div>
);

export default App;