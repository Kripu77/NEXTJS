import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, Box } from "@mui/material";
import Link from "next/dist/client/link";
import { TextField } from "@mui/material";



const Data = ({apiData}) => {
    
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);
       const [search, setSearch] = React.useState("");

      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };

      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
          const handleSearch = () => {
            return apiData.filter((value) =>
              value.ITEM_DESCRIPTION.toString().includes(search)
            );
          };

      return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <Button variants="outlined">
            <Link href="/tradinghours/charts">View Chart Data</Link>
          </Button>
          <h1> Total stores: {handleSearch().length}</h1>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              type="text"
              placeholder="search store"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />{" "}
          </Box>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell style={{minWidth: handleSearch().minWidth}}>Store Name:</TableCell>
                  <TableCell>Store Number:</TableCell>
                  <TableCell>Monday Open:</TableCell>
                  <TableCell>Monday Close:</TableCell>
                  <TableCell>Tuesday Open:</TableCell>
                  <TableCell>Tuesday Close:</TableCell>
                  <TableCell>Wednesday Open:</TableCell>
                  <TableCell>Wednesday Close:</TableCell>
                  <TableCell>Thursday Open:</TableCell>
                  <TableCell>Thursday Close:</TableCell>
                  <TableCell>Friday Open:</TableCell>
                  <TableCell>Friday Close:</TableCell>
                  <TableCell>Saturday Open:</TableCell>
                  <TableCell>Saturday Close:</TableCell>
                  <TableCell>Sunday Close:</TableCell>
                  <TableCell>Sunday Close:</TableCell>
                </TableRow>
              </TableHead>

              {/* content goes here */}
              <TableBody>
                {handleSearch()
                  .sort((a, b) =>
                    a.ITEM_DESCRIPTION.localeCompare(b.ITEM_DESCRIPTION)
                  )
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={2}
                        key={ITEM_NUMBER}
                      >
                        <Link href={`/tradinghours/${ITEM_DESCRIPTION}`}>
                        
                          <TableCell>{ITEM_DESCRIPTION}</TableCell>
                        </Link>
                        <TableCell>{ITEM_NUMBER}</TableCell>
                        <TableCell> {MONDAY_OPEN_TIME} AM</TableCell>
                        <TableCell>{MONDAY_CLOSE_TIME} PM</TableCell>
                        <TableCell> {TUESDAY_OPEN_TIME} AM</TableCell>
                        <TableCell>{TUESDAY_CLOSE_TIME} PM</TableCell>
                        <TableCell>{WEDNESDAY_OPEN_TIME} AM</TableCell>
                        <TableCell>{WEDNESDAY_CLOSE_TIME} PM</TableCell>
                        <TableCell>{THURSDAY_OPEN_TIME} AM</TableCell>
                        <TableCell>{THURSDAY_CLOSE_TIME} PM</TableCell>
                        <TableCell>{FRIDAY_OPEN_TIME} AM</TableCell>
                        <TableCell>{FRIDAY_CLOSE_TIME} PM</TableCell>
                        <TableCell>{SATURDAY_OPEN_TIME} AM</TableCell>
                        <TableCell>{SATURDAY_CLOSE_TIME} PM</TableCell>
                        <TableCell>{SUNDAY_OPEN_TIME} AM</TableCell>
                        <TableCell>{SUNDAY_CLOSE_TIME} PM</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={handleSearch().length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
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


export default Data;
