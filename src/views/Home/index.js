import { Button } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import Mosaic from '../../components/Mosaic';
import {Container} from 'react-bootstrap'
import {Col, Row} from 'react-bootstrap'

function Home() {
  const { contracts, account } = useContext(UserContext);
  const [userERC20Balance, setUserERC20Balance] = useState(0.0);

  // Run once when page loaded
  useEffect(() => {
    refreshPage();
  }, [contracts]);

  const refreshPage = async () => {
    if (contracts["MosaicERC20"])
      setUserERC20Balance(
        (await contracts["MosaicERC20"].methods.balanceOf(account).call()) /
          Math.pow(10, await contracts["MosaicERC20"].methods.decimals().call())
      );
  };

  const onRequestAirDrop = async () => {
    try {
      await contracts["TokenAirDrop"].methods.claim().send();
      refreshPage();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>

        {/* <p>Token Balance: {userERC20Balance}</p>
        <Button variant="outlined">Vote</Button>
        <Button variant="outlined" onClick={onRequestAirDrop}>
          Request Airdrop
        </Button> */}
        
        <Row style={{paddingTop: '10vh', paddingBottom: '10vh'}}>
        <Mosaic />
        </Row>
    </Container>
  );
}

export default Home;
