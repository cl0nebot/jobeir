import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import styled from 'styled-components';
import { serverGetJobs } from '../server/';
import { shouldGetJobs } from '../ducks/';
import JobsList from './JobsList';
import SearchForm from '../../user-input/forms/form/search/SearchForm';

@asyncConnect([
  {
    promise: ({ store: { dispatch, getState }, helpers: { req } }) => {
      const state = getState();

      if (shouldGetJobs(state)) {
        return dispatch(serverGetJobs(req.query, req));
      }
    }
  }
])
class Jobs extends Component {
  render() {
    return (
      <JobsContainer>
        <JobsList />
      </JobsContainer>
    );
  }
}

export default Jobs;

const JobsContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
