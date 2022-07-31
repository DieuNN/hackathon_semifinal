
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

      sorter: (a, b) => a.id.length - b.id.length,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
      sorter: (a, b) => a.firstName - b.firstName,
      sortOrder: sortedInfo.columnKey === "firstName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "dateOfBirth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",

      sorter: (a, b) => a.dateOfBirth.length - b.dateOfBirth.length,
      sortOrder: sortedInfo.columnKey === "dateOfBirth" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",

      sorter: (a, b) => a.phone.length - b.phone.length,
      sortOrder: sortedInfo.columnKey === "phone" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "sex",
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
        (
          <Link to={`/update/${record.key}`}>
            <span>update</span>
          </Link>
        )
        
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
        <S.WrapperConnect>
          <Button>ksksks</Button>
        </S.WrapperConnect>

        <S.WrapperButton>
          <h1>Customer List</h1>
        </S.WrapperButton>
      </div>
      <Space
        style={{
          marginBottom: 16,
        }}
      ></Space>
      <Table columns={columns} dataSource={dataRender} onChange={handleChange} />

      <Link to={"/register"}>
        <S.WrapperButton>
          <Button>Regiter</Button>
        </S.WrapperButton>
      </Link>
    </S.Wrapper>
  );
};

export default ListUser;
