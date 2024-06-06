import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import axios from 'axios';
import PaginationControls from './components/PaginationControls';
import SearchBar from './components/Searchbar';
import DataList from './components/Datalist';
import './App.css'

const App = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

/*     const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }; */

    const filteredData = data.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <Container>
            <Typography className='typography' variant="h4" component="h1" gutterBottom >
                Post List
            </Typography>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <DataList data={currentData} />
            <PaginationControls 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPrevPage={handlePrevPage} 
                onNextPage={handleNextPage} 
            />
        </Container>
    );
};

export default App;
