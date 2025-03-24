"use client";
import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

import { Select, Table, Spin, Alert, Divider } from "antd";
import { fetchDataQuery } from "../functions/fetchDataQuery";

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [sortKey, setSortKey] = useState("name");

  const { loading, error, data } = useQuery(fetchDataQuery, {
    variables: { page: page || 1, status: status || null, species: species || null },
  });
  console.log("Loading:", loading);
  console.log("Error:", error?.message);
  console.log("Data:", data);

  //if (loading) return <Spin tip="Loading characters.. Please wait"></Spin>;
  //if (error) return <Alert message="Error loading data" type="error"></Alert>;

  let characters = data?.characters?.results || [];

  
  return (
    <div>
      <h1>Rick And Morty Characters</h1>
      <div>
        <Select placeholder="Filter by Status" onChange={setStatus} allowClear>
          <Select.Option value="Alive">Alive</Select.Option>
          <Select.Option value="Dead">Dead</Select.Option>
          <Select.Option value="unknown">Unknown</Select.Option>
        </Select>
        <Select
          placeholder="Filter by Species"
          onChange={setSpecies}
          allowClear
        >
          <Select.Option value="Human">Human</Select.Option>
          <Select.Option value="Alien">Alien</Select.Option>
        </Select>
        <Select placeholder="Sort by" onChange={setSortKey} defaultValue="name">
          <Select.Option value="name">Name</Select.Option>
          <Select.Option value="origin.name">Origin</Select.Option>
        </Select>
      </div>
      <Table
        dataSource={characters}
        columns={[
          { title: "Name", dataIndex: "name", key: "name" },
          { title: "Status", dataIndex: "status", key: "status" },
          { title: "Species", dataIndex: "species", key: "species" },
          { title: "Gender", dataIndex: "gender", key: "gender" },
          { title: "Origin", dataIndex: ["origin", "name"], key: "origin" },
        ]}
        pagination={{
          total: data?.characters?.info?.pages * 10,
          pageSize: 10,
          current: page,
          onChange: setPage,
        }}
        rowKey="id"
      />
    </div>
  );
};
export default CharacterList;
