
import React, { useEffect, useState } from "react";
import { Button, Popconfirm, Table, Space } from "antd";
import * as S from "./style"
import { Link } from "react-router-dom";
import { hackathon_semifinal_backend } from "../../../../declarations/hackathon_semifinal_backend";


const ListUser = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [dataRender , setDataRender ] = useState([]);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
    const handleDelete = () => {

    }

    useEffect(() => {
        async function fetchData() {
          let _data = await hackathon_semifinal_backend.readCustomers();
          setDataRender(_data)
        }

        fetchData()
    
      
    }, [])
    


    

 

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",

      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name - b.name,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",

      sorter: (a, b) => a.birthday.length - b.birthday.length,
      sortOrder: sortedInfo.columnKey === "birthday" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",

      sorter: (a, b) => a.phone.length - b.phone.length,
      sortOrder: sortedInfo.columnKey === "phone" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex",

      sorter: (a, b) => a.sex.length - b.sex.length,
      sortOrder: sortedInfo.columnKey === "sex" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Update",
      dataIndex: "",
      key: "",
        render: (_, record) =>
        {
            <Link to={`/update/${record.key}`}>Update</Link>
        }
        
    },
    {
      title: "Delete",
      dataIndex: "",
      key: "",
      render: (_, record) =>
        columns.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  return (
    <S.Wrapper>
      <div>
        <Button>ksksks</Button>
        <h1>Customer List</h1>
      </div>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
       
      </Space>
          <Table columns={columns} dataSource={dataRender} onChange={handleChange} />
          <Button>Regiter</Button>
    </S.Wrapper>
  );
};

export default ListUser;