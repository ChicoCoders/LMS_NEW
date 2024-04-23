'use client'
import { Button, Flex, Pagination, Row, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { UserDeleteOutlined ,MoreOutlined} from '@ant-design/icons';
import ResultTable from '../../Component/ResultTable';
import CardResource from './myComponent/CardResource'
import Link from 'next/link';
import Card from 'antd/es/card/Card';
import axios from 'axios';

// const books = [
//   { title: "To Kill a Mockingbird", numberOfBooks: 34, author: "Harper Lee", isbn: "ISBN-3478267139" },
//   { title: "1984", numberOfBooks: 79, author: "George Orwell", isbn: "ISBN-158274583" },
//   { title: "The Great Gatsby", numberOfBooks: 52, author: "F. Scott Fitzgerald", isbn: "ISBN-642057482" },
//   { title: "The Catcher in the Rye", numberOfBooks: 18, author: "J.D. Salinger", isbn: "ISBN-836529185" },
//   { title: "To Kill a Mockingbird", numberOfBooks: 34, author: "Harper Lee", isbn: "ISBN-3478267139" },
//   { title: "The Hobbit", numberOfBooks: 55, author: "J.R.R. Tolkien", isbn: "ISBN-9780547928227" },
//   { title: "Pride and Prejudice", numberOfBooks: 42, author: "Jane Austen", isbn: "ISBN-9780141439518" },
//   { title: "The Lord of the Rings", numberOfBooks: 63, author: "J.R.R. Tolkien", isbn: "ISBN-9780544003415" },
//   { title: "To Kill a Mockingbird", numberOfBooks: 34, author: "Harper Lee", isbn: "ISBN-3478267139" },
//   { title: "Harry Potter and the Philosopher's Stone", numberOfBooks: 97, author: "J.K. Rowling", isbn: "ISBN-9780747532743" },
//   { title: "The Catcher in the Rye", numberOfBooks: 18, author: "J.D. Salinger", isbn: "ISBN-836529185" },
//   { title: "1984", numberOfBooks: 79, author: "George Orwell", isbn: "ISBN-158274583" },
//   { title: "The Great Gatsby", numberOfBooks: 52, author: "F. Scott Fitzgerald", isbn: "ISBN-642057482" },
//   { title: "Harry Potter and the Chamber of Secrets", numberOfBooks: 84, author: "J.K. Rowling", isbn: "ISBN-9780747538493" },
//   { title: "To Kill a Mockingbird", numberOfBooks: 34, author: "Harper Lee", isbn: "ISBN-3478267139" },
//   { title: "The Hobbit", numberOfBooks: 55, author: "J.R.R. Tolkien", isbn: "ISBN-9780547928227" },
//   { title: "Pride and Prejudice", numberOfBooks: 42, author: "Jane Austen", isbn: "ISBN-9780141439518" },
//   { title: "The Lord of the Rings", numberOfBooks: 63, author: "J.R.R. Tolkien", isbn: "ISBN-9780544003415" },
//   { title: "To Kill a Mockingbird", numberOfBooks: 34, author: "Harper Lee", isbn: "ISBN-3478267139" },
//   { title: "Harry Potter and the Philosopher's Stone", numberOfBooks: 97, author: "J.K. Rowling", isbn: "ISBN-9780747532743" },
//   { title: "The Catcher in the Rye", numberOfBooks: 18, author: "J.D. Salinger", isbn: "ISBN-836529185" },
//   { title: "1984", numberOfBooks: 79, author: "George Orwell", isbn: "ISBN-158274583" },
//   { title: "The Great Gatsby", numberOfBooks: 52, author: "F. Scott Fitzgerald", isbn: "ISBN-642057482" },
//   { title: "Harry Potter and the Chamber of Secrets", numberOfBooks: 84, author: "J.K. Rowling", isbn: "ISBN-9780747538493" }
// ];


function SearchResult(props) {

  const [books,setBooks]=useState([]);



  const[page,changepage]=useState(1);

  const changingPage =(pnumber,size)=>{
        changepage(pnumber);
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5164/api/Resource/GetAllResource`);
      const searchData = response.data;
      setBooks(searchData);
      console.log(searchData);
    } catch (error) { 
      console.error('Error searching data:', error);
    }
  };

  useEffect(()=>{handleSearch()},[]);
  
  return(
    <Card title="List of Books">
    <Row style={{width:"100%"}}   gutter={[15,20]} justify="center">
   
    {books.slice((page-1)*9,(page-1)*9+ 9).map((item) => (
        <CardResource  dataset={item} />
      ))}
  
    </Row>
    <br></br>
    <center><Pagination defaultCurrent={1} total={books.length} onChange={changingPage} pageSize={9} hideOnSinglePage/></center>
    </Card>
  )
}

export default SearchResult
