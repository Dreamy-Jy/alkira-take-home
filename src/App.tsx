import './App.css';
import { useEffect, useState } from 'react';
import ControlPanel from './components/ControlPanel';
import DataView from './components/DataView';

type APIPayload = {
  data: APIData[],
  meta: APIMetaData
};

export type APIData = {
  id: number,
  first_name: string,
  last_name: string,
  position: string,
  height_feet: number | null,
  height_inches: number | null,
  weight_pounds: number | null,
  team: APITeamData
};

type APITeamData = {
  id: number,
  abbreviation:string,
  city:string,
  conference:string,
  division:string,
  full_name:string,
  name:string
};

type APIMetaData =  {
  total_pages: number,
  current_page: number,
  next_page: number,
  per_page: number,
  total_count: number
};

export enum Layout {
  Grid = 0,
  List = 1,
};

function App() {
  const [data, setData] = useState<APIPayload | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [lastPage, setLastPage] = useState<number>(0);
  const [layout, setLayout] = useState<Layout>(Layout.Grid);
  const search = (query: string) => {
    fetch("https://www.balldontlie.io/api/v1/players?search="+encodeURI(query))
      .then(response => response.json())
      .then(data => {
        console.log("A search was made: ");
        console.log(data);
        setData(data);
        setCurrentPage(data.meta.current_page);
        setLastPage(data.meta.total_pages);
      });
  };

  const gotoPage = (gotoPage: number) => {
    fetch("https://www.balldontlie.io/api/v1/players?page="+gotoPage)
      .then(response => response.json())
      .then(data => {
        console.log("Navigated to page "+gotoPage+" : ");
        console.log(data);
        setData(data);
        setCurrentPage(data.meta.current_page);
        setLastPage(data.meta.total_pages);
      });
  };

  useEffect(() => {
    fetch("https://www.balldontlie.io/api/v1/players")
      .then(response => response.json())
      .then(data => {
        console.log("The intial request was made: ");
        console.log(data);
        setData(data);
        setCurrentPage(data.meta.current_page);
        setLastPage(data.meta.total_pages);
      });
  }, []);

  return (
    <div>
      <ControlPanel
        searchFunction={search}
        layout={layout}
        setLayout={setLayout}
        currentPage={currentPage}
        lastPage={lastPage}
        pageNavigationFunction={gotoPage}
      />
      <DataView
        layout={layout}
        data={data?.data}/>
    </div>
  );
}

export default App;
