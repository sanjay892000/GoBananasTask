import React from 'react';
import { Button, Typography } from '@material-ui/core';

const PaginationControls = (props) => {
    const { currentPage, totalPages, onPrevPage, onNextPage } = props;
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingBottom:'20px' }}>
            <Button variant="contained" color="primary" onClick={onPrevPage} disabled={currentPage === 1}>
                Previous
            </Button>
            <Typography variant="body1">Page {currentPage} of {totalPages}</Typography>
            <Button variant="contained" color="primary" onClick={onNextPage} disabled={currentPage === totalPages}>
                Next
            </Button>
        </div>
    );
};

export default PaginationControls;
