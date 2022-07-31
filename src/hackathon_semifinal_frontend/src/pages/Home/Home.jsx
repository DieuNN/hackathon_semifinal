import React, { useState } from 'react'
import { Button, Col, Row } from "antd"
import { Link } from 'react-router-dom'
import * as S from "./style"
import { ConnectButton, ConnectDialog, Connect2ICProvider, useConnect } from "@connect2ic/react"


const Home = () => {
  const [isConnect, setIsConnect] = useState(false)
  const [principalId, setPrincipalId] = useState("");
  async function connect() {
    await window.ic.plug.requestConnect();
    setIsConnect(await window.ic.plug.isConnected())
    let sessionData = await window.ic.plug.sessionManager.sessionData
    setPrincipalId(sessionData.principalId);
  };

  // console.log('asdasd',principalId);

  return (
    <S.Wrapper>
      <Row>
        <Col span={16}>
          <Link to={"/list"}>Customer lists</Link>
        </Col>
        <Col span={8}>
          <Button onClick={connect}>{isConnect ? 'Connected' : "Connect"}</Button>
        </Col>
      </Row>
    </S.Wrapper>
  );
}

export default Home

