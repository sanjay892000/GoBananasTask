import React, { useEffect, useRef, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import { gsap } from 'gsap';
import { Skeleton } from '@mui/material';
import "../Styles/datalist.css"

/* const useStyles = makeStyles((theme) => ({
    row: {
        transition: 'background-color 0.3s',
    },
})); */

const DataList = (props) => {
  const { data } = props;
 /*  const classes = useStyles(); */
  const tableBodyRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
      if (tableBodyRef.current) {
        gsap.fromTo(
          tableBodyRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
          }
        );
      }
    }, 1000);
  }, [data]);

  return (
    <Box className="Containerp" component={Paper} elevation={3}>
    <TableContainer component={Paper}>
      <Table>
        <TableHead className="tablehead">
          <TableRow>
            <TableCell><span className="table-head"> No </span></TableCell>
            <TableCell><span className="table-head"> Title </span></TableCell>
            <TableCell><span className="table-head"> Description </span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody ref={tableBodyRef}>
          {loading ? (
            Array.from(new Array(10)).map((_, index) => (
              <TableRow key={index}>
                <TableCell><Skeleton variant="text" width={40} /></TableCell>
                <TableCell><Skeleton variant="text" width={100} /></TableCell>
                <TableCell><Skeleton variant="rectangular" height={30} /></TableCell>
              </TableRow>
            ))
          ) : (
            data.map((row) => (
              <TableRow key={row.id} className="tablebody">
                <TableCell><Box className="rank">{row.id}</Box></TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    {row.title}
                  </Box>
                </TableCell>
                <TableCell>{row.body}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
  );
};

export default DataList;
