import React from 'react'
import SearchResult from './Component/SearchResult'
import Navigations from '../Component/Navigations'
import ContentBox from '../Component/ContentBox'
import { HomeOutlined } from '@ant-design/icons';

const PageRoot = [
  {
      href: '',
      title: <HomeOutlined />,
  },
  {
      href: '',
      title: (
          <>
              <HomeOutlined />
              <span>Resources</span>
          </>
      ),
  },
  {
      href: '',
      title: (
          <>
              <HomeOutlined />
              <span> Search Results</span>
          </>
      ),
  },
]

const data = [
    { reservationId: "res001", resourceId: "ISBN-9780451419439", userId: 1, userName: "John", dueDate: "2024-02-10", status: ["reserved"] },
    { reservationId: "res002", resourceId: "ISBN-9780446310789", userId: 2, userName: "Alice", dueDate: "2024-02-15", status: ["borrowed" ]},
    { reservationId: "res003", resourceId: "ISBN-9780679732761", userId: 3, userName: "Bob", dueDate: "2024-02-18", status: ["reserved"] },
    { reservationId: "res004", resourceId: "ISBN-9780061120084", userId: 4, userName: "Emma", dueDate: "2024-02-25", status: ["borrowed" ]},
    { reservationId: "res005", resourceId: "ISBN-9780345339683", userId: 5, userName: "Michael", dueDate: "2024-03-01", status: ["reserved"] },
    { reservationId: "res006", resourceId: "ISBN-9780812550702", userId: 6, userName: "Sophia", dueDate: "2024-03-08", status: ["borrowed" ]},
    { reservationId: "res007", resourceId: "ISBN-9780441172719", userId: 7, userName: "David", dueDate: "2024-03-15", status: ["reserved"] },
    { reservationId: "res008", resourceId: "ISBN-9780140283334", userId: 8, userName: "Olivia", dueDate: "2024-03-22", status: ["borrowed" ]},
    { reservationId: "res009", resourceId: "ISBN-9780553588484", userId: 9, userName: "Daniel", dueDate: "2024-03-29", status: ["reserved" ]},
    { reservationId: "res010", resourceId: "ISBN-9780743273565", userId: 10, userName: "Emily", dueDate: "2024-04-05", status: ["borrowed" ]},
    { reservationId: "res011", resourceId: "ISBN-9780345342966", userId: 11, userName: "John", dueDate: "2024-04-12", status: ["reserved" ]},
    { reservationId: "res012", resourceId: "ISBN-9780064407663", userId: 12, userName: "Alice", dueDate: "2024-04-19", status: ["borrowed"] },
    { reservationId: "res013", resourceId: "ISBN-9780553213133", userId: 13, userName: "Bob", dueDate: "2024-04-26", status: ["reserved" ]},
    { reservationId: "res014", resourceId: "ISBN-9780671673660", userId: 14, userName: "Emma", dueDate: "2024-05-03", status: ["borrowed" ]},
    { reservationId: "res015", resourceId: "ISBN-9780553296984", userId: 15, userName: "Michael", dueDate: "2024-05-10", status: ["reserved"] },
    { reservationId: "res016", resourceId: "ISBN-9780345339706", userId: 16, userName: "Sophia", dueDate: "2024-05-17", status: ["borrowed" ]},
    // Add more book transitions here
];

function page() {
  return (
    <div>
    <div>
        <Navigations>
            <ContentBox pageroot={PageRoot}>
               <SearchResult data={data}/>
            </ContentBox>
        </Navigations>
    </div>
</div>
  )
}

export default page
