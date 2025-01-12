import React, { useReducer, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '../../components/card/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from '../../components/Pagination/Pagination';
import db from '../../utils/db.json';

const initialUsers = {
  loading: true,
  users: [],
  error: '',
  pageNo: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: action.loading,
        users: action.payload,
        error: '',
        pageNo: action.pageNo,
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        users: [],
        error: 'Something Went Wrong!!!',
        pageNo: 1,
      };
    default:
      return state;
  }
};

function Body({ match }) {
  const [state, dispatchState] = useReducer(reducer, initialUsers);

  useEffect(() => {
    const startPage = parseInt(match.params.pageNo) || 1;
    const startIndex = (startPage - 1) * 18;
    const data = db.authors.slice(startIndex, startIndex + 18);

    dispatchState({
      type: 'FETCH_SUCCESS',
      payload: data,
      loading: false,
      error: '',
      pageNo: startPage,
    });
  }, [match]);

  return (
    <div>
      <Container>
        {state.error && <h1 className="text-center">{state.error}</h1>}
        {state.loading && (
          <h1 className="text-center">Loading... Please Wait...</h1>
        )}
        <Row>
          {state.users.map((user) => (
            <Col key={user.id} md={4} sm={6} xs={12}>
              <Card name={`${user.firstName} ${user.lastName}`} id={user.id} />
            </Col>
          ))}
        </Row>
        
        {/* Pagination component */}
        <Pagination page="/" pageNo={state.pageNo} />
      </Container>
    </div>
  );
}

export default Body;
