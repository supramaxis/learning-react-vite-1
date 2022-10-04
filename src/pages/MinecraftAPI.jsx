import { useState, useEffect } from "react";
import { getMcData } from "../components/fetchApi";
import { httpHelper } from "../helper/httpHelper";
import MCcards from "../components/MinecraftAPI/MCcards";
import McSearch from "../components/MinecraftAPI/McSearch";
import { Col, Container, Row } from "react-bootstrap";
export default function MinecraftAPI() {
  const [minecraft, setMinecraft] = useState([]);
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  // const mcData = async query => {
  //   const response = await fetchMcData(query);
  //   const results = await response.json();
  //   console.log(results);
  //   setFilteredData(results);
  // };

  let api = httpHelper();

  const fetchMinecraft = async () => {
    try {
      let url = "http://localhost:3005/data";
      api.get(url).then(res => {
        // console.log(res);
        setMinecraft(res);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMinecraft();
  }, []);

  const onSearch = async mcd => {
    if (!mcd) {
      return fetchMinecraft();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await getMcData(mcd);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setMinecraft(result);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <>
      <h1 className="main-container">Minecraft API</h1>
      <McSearch onSearch={onSearch} />
      <h1 className="main-container">Search for categories only!</h1>
      <Container className="w-70" key={minecraft.name}>
        <Row className="gy-3">
          {minecraft.map(mc => (
            <Col md={4} xs={6} key={minecraft.name}>
              <MCcards mc={mc} />
            </Col>
          ))}
        </Row>
      </Container>
      {/* <McTable minecraft={minecraft} /> */}
    </>
  );
}
