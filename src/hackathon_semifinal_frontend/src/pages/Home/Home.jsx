import React from 'react'
import { Button, Col, Row } from "antd"
import { Link } from 'react-router-dom'
import * as S from "./style"


const Home = () => {
  return (
    <S.Wrapper>
      <Row>
        <Col span={16}>
          <Link to={"/list"}>Customer lists</Link>
        </Col>
        <Col span={8}>
          <Button>Connect</Button>
        </Col>
      </Row>
    </S.Wrapper>
  );
}

export default Home

