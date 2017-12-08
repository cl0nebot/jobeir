// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import styled from 'styled-components';
import { serverGetCompany } from '../server/';
import { shouldGetCompany, getCompany, resetCompany } from '../ducks/';
import AppHead from '../../app/components/AppHead';
import CompanyInfo from '../components/CompanyInfo';
import CompanyJobList from '../components/CompanyJobList';

@asyncConnect([
  {
    promise: ({ store: { dispatch, getState }, helpers: { req } }) => {
      const state = getState();

      if (shouldGetCompany(state)) {
        return dispatch(serverGetCompany(req.originalUrl, req));
      }
    },
  },
])
class Company extends Component {
  componentDidMount() {
    const { dispatch, isLoaded, params } = this.props;

    if (!isLoaded) {
      dispatch(getCompany(params.companyName));
    }
  }

  componentWillUnmount() {
    this.props.dispatch(resetCompany());
  }

  render() {
    const { company } = this.props;

    return (
      <CompanyContainer>
        <CompanyInfo company={company} />
        {/* <CompanyJobList jobs={company.jobs}/> */}
      </CompanyContainer>
    );
  }
}

const mapStateToProps = state => ({
  company: state.company.company,
});

export default connect(mapStateToProps)(Company);

const CompanyContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
`;
