// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { media } from '../../../../../styles/breakpoints';
import draftToHtml from 'draftjs-to-html';

class JobPostingBody extends Component {
  render() {
    return (
      <JobPostingBodyContainer>
        <div
          dangerouslySetInnerHTML={{
            __html: draftToHtml(
              JSON.parse(this.props.activePosting.descriptionRaw)
            )
          }}
        />
      </JobPostingBodyContainer>
    );
  }
}

const mapStateToProps = state => ({
  companies: state.account.companies
});

export default connect(mapStateToProps)(JobPostingBody);

const JobPostingBodyContainer = styled.div`
  position: relative;
  max-width: 670px;
  margin: 0 auto;
  padding: 0 24px;

  p {
    line-height: 1.7;
    margin-bottom: 50px;
    font-size: 20px;
    color: #333;

    ${media.desktop`
      margin-bottom: 40px;
      font-size: 18px;
    `};

    ${media.phablet`
      margin-bottom: 30px;
      font-size: 16px;
    `};

    ${media.phonePlus`
      margin-bottom: 20px;
    `};
  }

  a {
    color: rgba(0, 0, 0, 0.85);
    text-decoration-skip: ink;
  }

  img {
    width: 100%;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 20px;

    ${media.tablet`
      margin-bottom: 15px;
    `};

    ${media.phablet`
      margin-bottom: 10px;
    `};
  }

  h2 {
    font-size: 26px;

    ${media.phablet`
      font-size: 20px;
    `};

    ${media.phonePlus`
      margin-bottom: 15px;
    `};
  }

  h3 {
    font-size: 24px;

    ${media.phablet`
      font-size: 18px;
    `};
  }

  h4,
  h6 {
    font-size: 20px;

    ${media.phablet`
      font-size: 18px;
    `};
  }

  ul,
  ol {
    line-height: 1.7;
    padding-left: 20px;
    margin-bottom: 50px;
    font-size: 18px;
    color: #333;

    ${media.tablet`
      margin-bottom: 30px;
      font-size: 16px;
    `};

    & > li {
      margin-bottom: 15px;
      font-size: 18px;
      color: #333;

      ${media.tablet`
        margin-bottom: 10px;
        font-size: 16px;
      `};
    }
  }
`;
