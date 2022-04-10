import React from "react";
import ReactPaginate from "react-paginate";
import Loading from "../Loading";
import Charts from "./charts";

const data = ({ apiData }) => {


     const [page, setPage] = React.useState(0);
     const [dataPerPage, setDataPerPage] = React.useState(3);
     const [ search, setSearch] = React.useState("")

    
     //for search function

     const handleSearch = ()=>{
 return apiData.filter((value) =>
   value.ITEM_DESCRIPTION.toString().includes(search)
 );
     }
      const numberOfDataShown = page * dataPerPage;
      const totalPages = Math.ceil(handleSearch().length / dataPerPage);
      const changePage = ({ selected }) => {
        setPage(selected);
      };

  return (
    <div>
      <h1> Total stores: {handleSearch().length}</h1>
      <input
        type="text"
        placeholder="search store"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      {handleSearch()
        .slice(numberOfDataShown, numberOfDataShown + dataPerPage)
        .map((value) => {
          console.log(value);

          const {
            ITEM_NUMBER,
            ITEM_DESCRIPTION,
            TYPICAL_OPEN_TIME,
            TYPICAL_CLOSE_TIME,
            FRIDAY_OPEN_TIME,
            FRIDAY_CLOSE_TIME,
            MONDAY_CLOSE_TIME,
            MONDAY_OPEN_TIME,
            SATURDAY_OPEN_TIME,
            SATURDAY_CLOSE_TIME,
            SUNDAY_OPEN_TIME,
            SUNDAY_CLOSE_TIME,
            THURSDAY_OPEN_TIME,
            THURSDAY_CLOSE_TIME,
            TUESDAY_OPEN_TIME,
            TUESDAY_CLOSE_TIME,
            WEDNESDAY_OPEN_TIME,
            WEDNESDAY_CLOSE_TIME,
            _24_7,
          } = value;

          return (
            <div
              className="display-panel"
              key={value.ITEM_NUMBER}
              style={{ fontSize: "0.8rem" }}
            >
              <hr></hr>
              <h1> Store: {ITEM_DESCRIPTION} </h1>
              <h1> Store Number: {ITEM_NUMBER} </h1>
              <h1>Monday Open: {MONDAY_OPEN_TIME} AM</h1>
              <h1> Monday Close: {MONDAY_CLOSE_TIME} PM</h1>

              <h1>Tuesday Open: {TUESDAY_OPEN_TIME} AM</h1>
              <h1>Tuesday Close: {TUESDAY_CLOSE_TIME} PM</h1>
              <h1>Wednesday Open: {WEDNESDAY_OPEN_TIME} AM</h1>
              <h1> Wednesday Close: {WEDNESDAY_CLOSE_TIME} PM</h1>
              <h1>Thursday Open: {THURSDAY_OPEN_TIME} AM</h1>
              <h1>Thursday Close: {THURSDAY_CLOSE_TIME} PM</h1>
              <h1>Friday Open: {FRIDAY_OPEN_TIME} AM</h1>
              <h1>Friday Close: {FRIDAY_CLOSE_TIME} PM</h1>
              <h1> Saturday Open: {SATURDAY_OPEN_TIME} AM</h1>
              <h1> Saturday Close: {SATURDAY_CLOSE_TIME} PM</h1>
              <h1> Sunday Open: {SUNDAY_OPEN_TIME} AM</h1>
              <h1> Sunday Close: {SUNDAY_CLOSE_TIME} PM</h1>

              <hr></hr>
            </div>
          );
        })}
      <div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={totalPages}
          onPageChange={changePage}
          containerClassName={"navigationButtons"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"navigationDisabled"}
          activeClassName={"navigationActive"}
        />
      </div>
  
    </div>
  );
};
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/test/hello");
  const data = await res.json();
  return {
    props: {
      apiData: data,
    },
  };
}

export default data;
